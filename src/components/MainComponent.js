import React, { Component } from 'react';
import '../App.css';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Appointment from './AppoinmentComponent';
import Contact from './ContactUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        staffInfo: state.staffInfo
       
     
    };
};



class Main extends Component {

   
    render() {
        return (
            <div className="App">
                
               
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/aboutus' render={() => <Directory staffInfo={this.props.staffInfo} />} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/makeappointment' component={Appointment} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>


        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
