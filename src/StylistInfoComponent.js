import React, {Component} from 'react';
import {Card, Cardimg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class StylistInfo extends Component {





    render(){

        if(this.props.stylist){
            return (
                <div className="row">

                </div>
            )

        } else {
          return  <div></div>
        }
       
    }
}

export default StylistInfo;