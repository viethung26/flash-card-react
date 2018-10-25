import React, {Component} from 'react';
import './Card.css';
import MainCard from './card/MainCard';
import OtherCards from './card/OtherCards';
import Modal from './card/Modal';
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {new: false, cards: []};
		this.newCard = this.newCard.bind(this);
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
					<div className="col-lg-5"><MainCard/></div>
					<div className="col-lg-7"><OtherCards/></div>
				</div>
				<div className="menu fixed-top">
					<button className="btn btn-success" onClick={()=>this.setState({new: true})}><i class="fa fa-file-o"></i></button>
				</div>
				<Modal visibility={this.state.new} onCreate={this.newCard}/>
			</div>
			);
	}
	newCard(card) {
		const {cards} = this.state; 
		if(card) {
			cards.push(card);
			this.setState({cards});
		}
		this.setState({new: false});
	}
}

export default Card;