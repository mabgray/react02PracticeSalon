import React, { Component } from 'react';
import '../App.css';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Appointment from './AppoinmentComponent';
import Contact from './ContactUsComponent';
import { STAFFINFO } from '../shared/staffInfo';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            staffInfo: STAFFINFO
        };
    }


    render() {
        return (
            <div className="App">
                
               
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/aboutus' render={() => <Directory staffInfo={this.state.staffInfo} />} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/makeappointment' component={Appointment} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>


        );
    }
}

export default Main;
