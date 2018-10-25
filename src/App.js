import React, { Component } from 'react';
import './App.css';
import Loadable from 'react-loadable';
import List from './components/List';
import Card from './components/Card';
import Modal from './components/Modal';

// const LoadableOther = Loadable({
//     loader: () =>import('./OtherComponent'),
//     loading (){
//         return <div>Loading...</div>
//     }
// });
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {packages:[], new: false};
        this.newPackage = this.newPackage.bind(this);
    }

    render() {
        return (
            <div className="row app">
                <div className="col-lg-2 col-md-4">
                    <List list={this.state.packages}/>
                </div>
                <div className="col-lg-10 col-md-8">
                    <Card/>
                </div>
                <button className="btn btn-primary fixed-bottom" 
                onClick={()=>this.setState({new: true})}><i className="material-icons">add_to_photos</i> New Package</button>
                <Modal visibility={this.state.new} onCreate={this.newPackage}/>
            </div>);
    }

    newPackage(name) {
        if(name) {
            const packages = this.state.packages;
            packages.push({name: name, cards: [] });
            this.setState({packages});
        }
        this.setState({new: false});
        
    }
}

export default App;
