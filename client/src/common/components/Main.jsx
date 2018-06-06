import React, { PropTypes, Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import io from 'socket.io-client';
const socket = io('http://localhost:1477');

class Main extends Component {
    constructor(props){
        super(props);

    }

    onChange = (event) => {
        socket.emit("light", Number(event.target.checked));
    }
    render(){
        return <div>
            <h1>Control LED light</h1>
            <p><input onChange={this.onChange} type="checkbox" id="light"/></p>
        </div>

    }

}

export default Main;