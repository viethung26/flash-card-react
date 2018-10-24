import React, {Component} from 'react';
import Header from './list/ListHeader';
import Package from './list/ListPackage.js';
import './list.css';
class List extends Component {
	render() {
		return (
			<div className="list bg-white h-100 pt-2">
				<Header/>
				<hr/>
				<Package list={this.props.list}/>
				
			</div>
			
			);
	}
}

export default List;