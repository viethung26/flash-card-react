import React, {Component} from 'react';
import './Card.css';
import MainCard from './card/MainCard';
import OtherCards from './card/OtherCards';
import Modal from './card/Modal';
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {new: false, edit: false, current: null};
		this.newCard = this.newCard.bind(this);
	}
	componentDidMount() {
		if(this.props.pack.cards) {
			this.setState({current: 0});
			this.props.pack.cards[0].repeat++;
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.pack.cards) {
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
					<div className="col-lg-6"><MainCard card={this.props.pack.cards.length !== 0 ? this.props.pack.cards[this.state.current] : null} 
					onChoose={this.onChoose}
					onClickEdit={this.onClickEdit}
					deleteCard={this.props.deleteCard}
					/></div>
					<div className="col-lg-6"><OtherCards cards={this.props.pack.cards} onChoose={this.onChoose}/></div>
				</div>
				<div className="menu fixed-top">
					<button className="btn btn-success mr-2" title="Add card" onClick={()=>this.setState({new: true, edit: false})}><i className="fa fa-file-o"></i></button>
					<button className="btn btn-success" title="Delete package" onClick={()=>this.props.deletePack(PACK.id)}><i className="fa fa-trash-o"></i></button>
				</div>
				<Modal visibility={this.state.new} onCreate={this.newCard}
				onUpdate={this.updateCard} 
				update={this.state.edit?this.props.pack.cards[this.state.current]: null}/>
			</div>
			);
	}
	newCard(card) {
		this.props.newCard(card);
		this.setState({new: false});
	}

	updateCard = card => {
		this.props.updateCard(card);
		this.setState({new:false, isUpdate: false})
	}

	onClickEdit = () => {
		this.setState({new: true, edit: true});
	}

	onChoose = id => {
		const size = this.props.pack.cards.length;
		if(size<=0) return;
		let index = null;
		if(typeof(id) === "object") {
			
			index = this.state.current+id.move;
			if(index>=size) index = 0;
			if(index<0) index = size-1;
		} else {
			index = this.props.pack.cards.findIndex(val => val.id === id);
		}
		this.props.pack.cards[index].repeat++;
		this.setState({current: index});
	}
}

export default Card;