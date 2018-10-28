import React, { Component } from 'react';
import './App.css';
import Loadable from 'react-loadable';
import List from './components/List';
import Modal from './components/Modal';
import RandomString from 'random-string';

const LoadableCard = Loadable({
    loader: () =>import('./components/Card'),
    loading (){
        return <div>Loading...</div>
    }
});
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {packages:[{name: "name", cards: [{id: 0, name: "hung", content: "21", repeat: 0}], favor: false, id: 0 }], new: false, current: null};
        this.newPackage = this.newPackage.bind(this);
    }
    componentWillMount() {
        if(localStorage.getItem("packages")) {
            const packages = JSON.parse(localStorage.getItem("packages"));
            this.setState({packages});
        }
    }
    componentDidMount() {
        if(this.state.packages.length!==0) this.setState({current: 0});
    }
    componentDidUpdate() {
        if(this.state.packages.length!==0 && this.state.current===null) this.setState({current: 0});
        localStorage.setItem("packages", JSON.stringify(this.state.packages));
    }

    render() {
        return (
            <div className="row app">
                <div className="col-lg-2 col-md-4">
                    <List list={this.state.packages} onChoosePack={this.choosePack}/>
                </div>
                <div className="col-lg-10 col-md-8">
                    {this.state.current!==null ? <LoadableCard pack={this.state.packages[this.state.current]} 
                    current={this.state.current} newCard={this.newCard} 
                    delete={this.deletePack}/>: ""}
                </div>
                <button className="btn btn-primary fixed-bottom" 
                onClick={()=>this.setState({new: true})}><i className="material-icons">add_to_photos</i> New Package</button>
                <Modal visibility={this.state.new} onCreate={this.newPackage}/>
            </div>);
    }

    newPackage(name) {
        if(name) {
            const packages = this.state.packages;
            packages.push({name: name, cards: [], favor: false, id: RandomString({length: 10})});
            this.setState({packages});
        }
        this.setState({new: false});
        
    }

    choosePack = id => {
        const current = this.state.packages.findIndex(val => val.id === id);
        this.setState({current});
    }

    newCard = card => {
        const {packages, current} = this.state; 
        const pack = packages[current];
        if(card) {
            card.id = pack.cards.length;
            card.repeat = 0;
            pack.cards.push(card);
            this.setState({packages});
            // localStorage.setItem("packages", JSON.stringify(packages));
        }
    }

    deletePack = id => {
        const {packages} = this.state;
        const index = packages.findIndex(val => val.id === id);
        packages.splice(index, 1);
        this.setState({packages, current: null});

    }
}

export default App;
