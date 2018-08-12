import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BookAPI from "./BooksAPI"



class Book extends Component {


	render () {
		const { book } = this.props; 


		let displayThumbnail = this.props.book.imageLinks;
		if (displayThumbnail) {
			displayThumbnail = this.props.book.imageLinks.smallThumbnail

		} else {
			displayThumbnail = ''
		}

		return (
			<div className="book">
			<div className="book-top">
			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${displayThumbnail}")`}}></div>
			<div className="book-shelf-changer">
			<select value={this.props.currentShelf}
			onChange={(event) => this.props.moveShelf(
				this.props.book, event.target.value
				)}
				
			>
			<option value="move" disabled>Move to...</option>
			<option value="currentlyReading">Currently Reading</option>
			<option value="wantToRead">Want to Read</option>
			<option value="read">Read</option>
			<option value="none">None</option>
			</select>
			</div>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{book.authors}</div>
			</div>

		);
	}
}

Book.PropTypes = {
	book: PropTypes.object.isRequired
}

export default Book;