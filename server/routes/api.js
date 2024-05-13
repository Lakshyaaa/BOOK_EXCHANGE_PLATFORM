const express = require("express");
const router = express.Router();

const dbController = require("../controllers/dbController");
const apiController = require("../controllers/apiController");
const userController = require("../controllers/userController");

router.get(
	"/findBook",
	apiController.findBook,
	apiController.findAuthor,
	(req, res) => {
		return res.status(200).json(res.locals.bookInDB);
	}
);

router.post(
	"/addOldBook",
	dbController.findBook,
	apiController.findBook,
	apiController.findAuthor,
	dbController.addBook,
	dbController.addOldBook,
	(req, res) => {
		return res.status(200).json(res.locals);
	}
);

router.post("/findOldBook", dbController.findOldBook, (req, res) => {
	return res.status(200).json(res.locals.oldbooks);
});

router.post("/requestBook", dbController.requestBook, (req, res) => {
	return res.status(200).json(res.locals.requestBooks);
});

router.get(
	"/getIncomingInfo/:userId",
	dbController.getMyBookRequests,
	(req, res) => {
		return res.status(200).json(res.locals.incomingRequests);
	}
);
router.get(
	"/getOutgoingInfo/:userId",
	dbController.getOutgoingRequests,
	(req, res) => {
		return res.status(200).json(res.locals.outgoingRequests);
	}
);

router.post("/shipped", dbController.shipBook, (req, res) => {
	return res.status(200).json(res.locals.shipped);
});

router.post("/deleteOldBook", dbController.deleteOldBook, (req, res) => {
	return res.status(200).json(req.body.myOldBookId);
});

router.get(
	"/getMyOldBookList/:userId",
	dbController.findMyBookList,
	(req, res) => {
		return res.status(200).json(res.locals.mybooks);
	}
);

router.post("/register", userController.createUser, (req, res) => {
	return res.status(200).json(res.locals);
});

router.post("/verifyUser", userController.verifyUser, (req, res) => {
	return res.status(200).json(res.locals);
});

const db = require("../models/booksModels");
router.get("/seeuser", (req, res) => {
	const query = `SELECT * FROM users`;
	db.query(query)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
	return res.status(200).json({ msg: "hhihi" });
});

module.exports = router;
