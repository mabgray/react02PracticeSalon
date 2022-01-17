import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { STAFFINFO } from './shared/staffInfo';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffInfo: STAFFINFO
        };
    }


    render() {
        return (
            <div className="App">
                <Navbar dark color="secondary">
                <div className="container">
                    <NavbarBrand href="/">Salon Name</NavbarBrand>
                </div>
                </Navbar>
                <Directory staffInfo={this.state.staffInfo}/>
            </div>
        );
    }
}

export default App;