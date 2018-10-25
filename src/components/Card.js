import React, {Component} from 'react';
import './Card.css';
import MainCard from './card/MainCard';
import OtherCards from './card/OtherCards';
import Modal from './card/Modal';
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {new: false, cards: [{id: 0, name: "hung", content: "21"}], current: null};
		this.newCard = this.newCard.bind(this);
	}
	componentDidMount() {
		if(this.state.cards) this.setState({current: 0});
	}
	render() {
		return (
			<div className="h-100 pt-2">
				<ul className='bg-white border border-primary'>
					<li><a href="#"><i className="fa fa-heart"></i></a></li>
					<li>English</li>
					<li>100</li>
				</ul>
				<div className="row">
					<div className="col-lg-5"><MainCard card={this.state.cards[this.state.current]} onChoose={this.onChoose}/></div>
					<div className="col-lg-7"><OtherCards cards={this.state.cards} onChoose={this.onChoose}/></div>
				</div>
				<div className="menu fixed-top">
					<button className="btn btn-success" onClick={()=>this.setState({new: true})}><i className="fa fa-file-o"></i></button>
				</div>
				<Modal visibility={this.state.new} onCreate={this.newCard}/>
			</div>
			);
	}
	newCard(card) {
		const {cards} = this.state; 
		if(card) {
			card.id = cards.length;
			cards.push(card);
			this.setState({cards});
		}
		this.setState({new: false});
	}
	onChoose = index => {
		const SIZE = this.state.cards.length;
		if(index>=SIZE) index=0;
		else if(index<0) index=SIZE-1;
		this.setState({current: index});
	}
}

export default Card;