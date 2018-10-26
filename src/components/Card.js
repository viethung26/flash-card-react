import React, {Component} from 'react';
import './Card.css';
import MainCard from './card/MainCard';
import OtherCards from './card/OtherCards';
import Modal from './card/Modal';
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {new: false, current: null};
		this.newCard = this.newCard.bind(this);
	}
	componentDidMount() {
		if(this.props.pack.cards) {
			this.setState({current: 0});
			this.props.pack.cards[0].repeat++;
		}
	}
	render() {
		const PACK = this.props.pack;
		const NAME = PACK ? PACK.name : "empty";
		const SIZE = PACK ? PACK.cards.length : 0;
		return (
			<div className="h-100 pt-2">
				<ul className='bg-white border border-primary'>
					<li><a href="#"><i className="fa fa-heart"></i></a></li>
					<li>{NAME}</li>
					<li>{SIZE}</li>
				</ul>
				<div className="row">
					<div className="col-lg-5"><MainCard card={this.props.pack.cards[this.state.current]} onChoose={this.onChoose}/></div>
					<div className="col-lg-7"><OtherCards cards={this.props.pack.cards} onChoose={this.onChoose}/></div>
				</div>
				<div className="menu fixed-top">
					<button className="btn btn-success" onClick={()=>this.setState({new: true})}><i className="fa fa-file-o"></i></button>
				</div>
				<Modal visibility={this.state.new} onCreate={this.newCard}/>
			</div>
			);
	}
	newCard(card) {
		this.props.newCard(card);
		this.setState({new: false});
	}
	onChoose = index => {
		const SIZE = this.props.pack.cards.length;
		if(index>=SIZE) index=0;
		else if(index<0) index=SIZE-1;
		this.props.pack.cards[index].repeat++;
		this.setState({current: index});
	}
}

export default Card;