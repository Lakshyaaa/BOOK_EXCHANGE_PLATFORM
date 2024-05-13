const db = require("../models/booksModels");
const dbController = {};

dbController.findBook = (req, res, next) => {
	const { isbn } = req.body;
	const query = `SELECT * FROM books WHERE isbn = '${isbn}'`;
	db.query(query)
		.then((data) => {
			res.locals.bookInDB = data.rowCount > 0;
			next();
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
};

dbController.addBook = (req, res, next) => {
	if (res.locals.bookInDB) return next();
	const { isbn_13, title, author, subjects } = res.locals.book;
	const query = `
  INSERT INTO books ("isbn", "title", "author", "genre")
  VALUES ('${isbn_13}', '${title}', '${author}', '${subjects}')
  `;
	db.query(query)
		.then(() => next())
		.catch((err) => {
			next(err);
		});
};

dbController.findOldBook = (req, res, next) => {
	const keyword = req.body.searchString;
	const query = `SELECT users.username, users.email, books.title, books.author, users_books.condition, books.isbn
  FROM users
  JOIN users_books
  ON users.user_id = users_books.user_id
  JOIN books
  ON users_books.bookISBN = books.isbn
  WHERE title ~* '\\y${keyword}\\y'`;

	db.query(query)
		.then((data) => {
			res.locals.oldbooks = data.rows;
			next();
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
};

dbController.addOldBook = (req, res, next) => {
	const { isbn, condition } = req.body;
	const userID = req.body.userId;
	const query = `
  INSERT INTO users_books ("user_id", "bookisbn", "condition")
  VALUES ('${userID}', '${isbn}', '${condition}')
  `;
	db.query(query)
		.then(() => next())
		.catch((err) => {
			next(err);
		});
};

dbController.deleteOldBook = (req, res, next) => {
	const _id = req.body.myOldBookId;
	const query = `DELETE FROM users_books WHERE users_books_id = ${_id}`;
	db.query(query)
		.then(() => next())
		.catch((err) => {
			next(err);
		});
};

dbController.findMyBookList = (req, res, next) => {
	const user_id = req.params.userId;
	const query = `SELECT books.title, books.author, users_books.condition, books.isbn, users_books.users_books_id
  FROM users
  JOIN users_books
  ON users.user_id = users_books.user_id
  JOIN books
  ON users_books.bookISBN = books.isbn
  WHERE users.user_id = '${user_id}'`;

	db.query(query)
		.then((data) => {
			res.locals.mybooks = data.rows;
			next();
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
};

dbController.getMyBookRequests = async (req, res, next) => {
	const { userId } = req.params;
	try {
		const query = `SELECT books.title, users.username, users.email
    FROM users
    JOIN users_books
    ON users_books.requester = users.user_id
    JOIN books
    ON users_books.bookisbn = books.isbn
    WHERE users_books.user_id = '${userId}' AND requester IS NOT NULL`;
		const userBooks = await db.query(query);
		res.locals.incomingRequests = userBooks.rows;
		return next();
	} catch (err) {
		return next({
			log: 400,
			message: "Failed to get users incoming books request",
		});
	}
};

dbController.getOutgoingRequests = async (req, res, next) => {
	const { userId } = req.params;
	try {
		const query = `SELECT books.title, users.username, users.email
    FROM users
    JOIN users_books
    ON users_books.requester = '${userId}'
    JOIN books
    ON users_books.bookisbn = books.isbn
    WHERE users_books.user_id = users.user_id`;
		const outBooks = await db.query(query);
		res.locals.outgoingRequests = outBooks.rows;
		return next();
	} catch (err) {
		return next({
			log: 400,
			message: "Failed to get users outgoing books request",
		});
	}
};

dbController.requestBook = (req, res, next) => {
	const user_id = req.body.userId;
	const username = req.body.username;
	const isbn = req.body.isbn;
	const query = `UPDATE users_books 
  SET requester = ${user_id}
  WHERE users_books.bookisbn = '${isbn}' AND users_books.user_id = (SELECT user_id FROM users WHERE users.username = '${username}')`;

	db.query(query)
		.then((data) => {
			res.locals.requestBooks = data.rows;
			return next();
		})
		.catch((err) => {
			console.log(err);
			return next(err);
		});
};

dbController.shipBook = (req, res, next) => {
	const { title, username } = req.body;
	console.log(req.body);
	const query = `DELETE FROM users_books
  WHERE users_books.bookisbn = (SELECT isbn FROM books WHERE title = '${req.body.title}') 
  AND users_books.requester = (SELECT user_id FROM users WHERE username = '${username}')`;

	console.log(title);
	console.log(username);

	db.query(query)
		.then((data) => {
			console.log("response" + JSON.stringify(data.rows));
			res.locals.shippedBook = data.rows;
			next();
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
};

module.exports = dbController;
