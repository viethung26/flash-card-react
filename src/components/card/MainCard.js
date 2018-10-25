import React, {Component} from 'react';
import './MainCard.css';

class MainCard extends Component {
	render() {
		const Empty = {name: "empty", content: "empty"};
		const CARD = this.props.card || Empty;
		return (
			<div className="h-100">
				<div className="mb-2">
					<div className="bg-light border border-primary mr-2 text-center rounded" id="word">{CARD.name}</div>
					<span className="badge badge-light ">20</span>
				</div>
				<div className="mb-2 bg-dark inline rounded">
					<button className="btn btn-outline-dark" id="prev" onClick={() => this.props.onChoose(CARD.id-1)}><i className="fa fa-chevron-circle-left"></i></button>
					<button className="btn btn-outline-dark" id="next" onClick={() => this.props.onChoose(CARD.id+1)}><i className="fa fa-chevron-circle-right"></i></button>
					<img className="border border-primary w-100 p-1" src="octocat.png" alt="pizza"/>
				</div>
				<div className="bg-light p-2 border border-primary rounded">
					<p>{CARD.content}</p>
				</div>
			</div>
			);
	}
}

export default MainCard;