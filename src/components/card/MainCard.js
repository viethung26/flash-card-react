import React, {Component} from 'react';
import './MainCard.css';

class MainCard extends Component {
	render() {
		const Empty = {name: "empty", content: "empty", id: 0, repeat: 0};
		const CARD = this.props.card || Empty;
		return (
			<div className="h-100">
				<div className="mb-2">
					<div className="bg-light border border-primary mr-2 text-center rounded" id="word">{CARD.name}</div>
					<div className="bg-light border border-primary mr-2 text-center rounded" id="word">/{CARD.phonetic}/</div>
					<span className="badge badge-light mr-2">{CARD.repeat}</span>
					<button className="btn btn-success mr-2" title="Edit card" onClick={()=>this.props.onClickEdit()}><i className="fa fa-edit"></i></button>
					<button className="btn btn-danger" title="Remove card" onClick={()=>this.props.deleteCard(CARD.id)}><i className="fa fa-times-circle-o"></i></button>
					
					
				</div>
				<div className="mb-2 bg-dark inline rounded">
					<button className="btn btn-outline-dark" id="prev" onClick={() => this.props.onChoose({move: -1})}><i className="fa fa-chevron-circle-left"></i></button>
					<button className="btn btn-outline-dark" id="next" onClick={() => this.props.onChoose({move: 1})}><i className="fa fa-chevron-circle-right"></i></button>
					<img className="border border-primary w-100 p-1" src="octocat.png" alt="pizza"/>
				</div>
				<div className="bg-light mb-2 p-2 border border-primary rounded">
					<span className="badge badge-success">Meaning</span> {CARD.content}
				</div>
				<div className="bg-light p-2 border border-primary rounded">
					<span className="badge badge-success">Ex</span> {CARD.ex}
				</div>
			</div>
			);
	}
}

export default MainCard;