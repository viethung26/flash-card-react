import React, {Component} from 'react';
import './Modal.css';
class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {isUpdate: false, name: "", phonetic: "", content: "", ex: ""};
	}
	componentWillReceiveProps(next) {
		const card = next.update;
		if(card) {
			this.setState({isUpdate: true});
			this.setState({name: card.name||"",  phonetic: card.phonetic||"", content: card.content||"", ex: card.ex||""});
		} else {
			this.setState({isUpdate: false});
			this.setState({name: "",  phonetic: "", content: "", ex: ""});
		}
	}
	render() {
		const isUpdate = this.state.isUpdate;
		const visibility = this.props.visibility ? "visible" : "invisible";
		return (<div className={visibility + " mask fixed-top w-100 h-100"}>
			<div className="content bg-success d-inline p-3 rounded w-25">
				<h6 className="text-light"><i className="fa fa-file-o"></i> {isUpdate? "Update Card" : "New Card"}</h6>
				<hr/>
				<label>Name: </label>
				<input className="form-control mb-2" type="text" value={this.state.name} onChange={event=>this.setState({name: event.target.value})}/>
				<label>Phonetic: </label>
				<input className="form-control mb-2" type="text" value={this.state.phonetic} onChange={event=>this.setState({phonetic: event.target.value})}/>
				<label>Meaning: </label>
				<textarea className="form-control mb-2" rows="2" value={this.state.content} onChange={event=>this.setState({content: event.target.value})}></textarea>
				<label>Example: </label>
				<textarea className="form-control mb-2" rows="3" value={this.state.ex} onChange={event=>this.setState({ex: event.target.value})}></textarea>
				<span>
					<button className="btn btn-light col-6" onClick={()=>this.handleCard()}>{isUpdate?"Update":"Create"}</button>
					<button className="btn btn-light col-6 float-right" onClick={()=>this.props.onCreate()}>Cancel</button>
				</span>
				
			</div>
		</div>);
	}
	handleCard() {
		let card = {name: this.state.name, phonetic: this.state.phonetic, content: this.state.content, ex: this.state.ex};
		if(this.state.isUpdate) {
			card.id = this.props.update.id;
			card.repeat = this.props.update.repeat;
			this.props.onUpdate(card);
		}
		else this.props.onCreate(card);
	}
}

export default Modal;