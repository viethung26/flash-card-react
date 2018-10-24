import React, {Component} from 'react';
import './Modal.css';
class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {name: ""};
	}
	componentWillReceiveProps(next) {
		this.setState({name: ""});

	}
	render() {
		const visibility = this.props.visibility ? "visible" : "invisible";
		return (<div className={visibility + " mask fixed-top w-100 h-100"}>
			<div className="content bg-success d-inline p-3 rounded">
				<h6 className="text-light"><i class="material-icons">add_to_photos</i> New Package</h6>
				<hr/>
				<input className="form-control mb-2" type="text" value={this.state.name} onChange={event=>this.setState({name: event.target.value})}/>
				<span className="">
					<button className="btn btn-light col-6" onClick={()=>this.props.onCreate(this.state.name.trim())}>Create</button>
					<button className="btn btn-light col-6 float-right" onClick={()=>this.props.onCreate()}>Cancel</button>
				</span>
				
			</div>
		</div>);
	}
}

export default Modal;