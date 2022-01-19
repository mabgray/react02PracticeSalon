import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class StylistInfo extends Component {

    renderStylist(stylist){


        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={stylist.image} alt={stylist.name} />
                    <CardBody>
                        <CardTitle>{stylist.name}</CardTitle>
                        <CardText>{stylist.style}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }



    render(){

        if(this.props.stylist){
            return (
                <div className="row">
                    {this.renderStylist(this.props.stylist)}
                </div>
            )

        } else {
          return  <div></div>
        }
       
    }
}

export default StylistInfo;