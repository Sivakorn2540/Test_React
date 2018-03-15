import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Top from './R_Navbar.js'
import ShowList from './R_List.js'
import SetName from './R_SetName.js'

class App extends Component {
    render() {
        return (
            <div >
                <Top/>
                <br/>
                <SetName />
                <ShowList/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

