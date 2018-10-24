import React, {Component} from 'react';
import './MainCard.css';

class MainCard extends Component {
	render() {
		return (
			<div className="h-100">
				<div className="mb-2">
					<div className="bg-light border border-primary mr-2 text-center rounded" id="word">Pizza</div>
					<span className="badge badge-light ">20</span>
				</div>
				<div className="mb-2 bg-dark inline rounded">
					<button className="btn btn-outline-dark" id="prev"><i className="fa fa-chevron-circle-left"></i></button>
					<button className="btn btn-outline-dark" id="next"><i className="fa fa-chevron-circle-right"></i></button>
					<img className="border border-primary w-100 p-1" src="octocat.png" alt="pizza"/>
				</div>
				<div className="bg-light p-2 border border-primary rounded">
					<p>an Italian dish consisting of a flat round bread base with cheese, tomatoes, vegetables, meat, etc. on top</p>
				</div>
			</div>
			);
	}
}

export default MainCard;