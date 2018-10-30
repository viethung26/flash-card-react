import React, {Component} from 'react';

class OtherCards extends Component {
	other() {
		const SET = [];
		const CARDS = this.props.cards;
		for(let i=0; i<CARDS.length; i++) SET.push(<button key={i} onClick={()=>this.props.onChoose(CARDS[i].id)}
			className="btn btn-light mr-2 mb-2 border border-warning">
			{CARDS[i].name}</button>);
		return SET;
	}
	render() {
		return (
			<div className="d-flex flex-wrap w-100">
				{this.other()}
				
			</div>
			);
	}
}

export default OtherCards;