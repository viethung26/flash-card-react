import React, {Component} from 'react';
import './Card.css';
import MainCard from './card/MainCard';
import OtherCards from './card/OtherCards';

class Card extends Component {
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
				
				
			</div>
			);
	}
}

export default Card;