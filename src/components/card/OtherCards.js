import React, {Component} from 'react';

class OtherCards extends Component {
	other() {
		const arr = [];
		for(let i=0; i<50; i++) arr.push(<a href="#" className="mr-2 mb-2 border border-warning"><img src="dog.jpg" alt="other" height="80px"/></a>);
		return arr;
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