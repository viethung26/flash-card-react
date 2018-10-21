import React, { Component } from 'react';
import './App.css';
import Loadable from 'react-loadable'

const LoadableOther = Loadable({
    loader: () =>import('./OtherComponent'),
    loading (){
        return <div>Loading...</div>
    }
});
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {enable:false};
    }
    render() {
        var enable = this.state.enable;
      return (
        <div >
            <button onClick={()=>this.setState({enable: !enable})}>Show</button>
            {enable?<LoadableOther/>:null}
        </div>
        
            );
    }
}

export default App;
