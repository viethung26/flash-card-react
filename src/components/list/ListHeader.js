import React, {Component} from 'react';
import './header.css';
class Header extends Component {
	render() {
		return(
			<div className="">
				<div className="avatar">
					<img id="avatar" src="avatar.jpg" height="120px"/>
				</div>
				<h6>Flash Card</h6>
				<p><i>Developed by Hideki</i></p>
			</div>
			);
	}
}

export default Header;