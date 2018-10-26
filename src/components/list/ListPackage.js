import React, {Component} from 'react';
import './Package.css';
class Package extends Component {
	render() {
		return (
			<div className="text-left ml-4 mr-4">
				<select className="" name="display" value="all" onChange={event=>this.value=event.target.value}>
					<option value="all">All</option>
					<option value="favorite">Favorite</option>
				</select>
				<table className="table mt-4">
					<tbody>
						{this.init()}
					</tbody>
				</table>
			</div>
			);
	}
	init() {
		const packages = this.props.list;
		const list = [];
		for(let pack of packages) {
			list.push(<tr key={pack.id} className="item" onClick={()=>this.props.onChoose(pack.id)}><td><i className={pack.favor ? "fa fa-heart text-danger" : "fa fa-heart-o" }></i></td>
						<td>{pack.name}</td></tr>);
		}
		return list;
	}
}

export default Package;