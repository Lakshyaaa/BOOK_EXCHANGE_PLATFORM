const React = require("react");

class MyBookRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			book: props,
			users_books_id: props.users_books_id,
		};
	}

	deleteMyOldBook = () => {
		console.log(this.props);
		if (this.props.users_books_id) {
			fetch("/api/deleteOldBook", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					myOldBookId: this.props.users_books_id,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					this.setState({ book: null });
					// return this.props.rerender();
				});
		}
	};
	render() {
		return (
			<>
				{this.state.book ? (
					<tr>
						<td>{this.state.book.title}</td>
						<td>{this.state.author}</td>
						<td>{this.state.isbn}</td>
						<td>{this.state.condition}</td>
						<td>
							<center>
								<button
									type='button'
									class='req-button'
									onClick={this.deleteMyOldBook}
								>
									delete
								</button>
							</center>
						</td>
					</tr>
				) : (
					<></>
				)}
			</>
		);
	}
}

export default MyBookRow;
