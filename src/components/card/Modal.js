import React, {Component} from 'react';
import './Modal.css';
class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {name: "", content: ""};
	}
	componentWillReceiveProps(next) {
		this.setState({name: "", content: ""});

	}
	render() {
		const visibility = this.props.visibility ? "visible" : "invisible";
		return (<div className={visibility + " mask fixed-top w-100 h-100"}>
			<div className="content bg-success d-inline p-3 rounded">
				<h6 className="text-light"><i className="fa fa-file-o"></i> New Card</h6>
				<hr/>
				<label>Name: </label>
				<input className="form-control mb-2" type="text" value={this.state.name} onChange={event=>this.setState({name: event.target.value})}/>
				<label>Content: </label>
				<textarea className="form-control mb-2" rows="4" value={this.state.content} onChange={event=>this.setState({content: event.target.value})}></textarea>
				<span>
					<button className="btn btn-light col-6" onClick={()=>this.createCard()}>Create</button>
					<button className="btn btn-light col-6 float-right" onClick={()=>this.props.onCreate()}>Cancel</button>
				</span>
				
			</div>
		</div>);
	}
	createCard() {
		let card = {name: this.state.name, content: this.state.content};
		this.props.onCreate(card);
	}
}

export default Modal;