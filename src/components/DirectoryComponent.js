import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import StylistInfo from '../StylistInfoComponent';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStylist: null
        };
    }

    onStylistSelect(stylist) {
        this.setState({selectedStylist: stylist});
    }

    
    render() {
        const directory = this.props.staffInfo.map(stylist => {
            return (
                <div key={stylist.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onStylistSelect(stylist)}>
                        <CardImg width="100%" src={stylist.image} alt={stylist.name} />
                        <CardImgOverlay>
                            <CardTitle>{stylist.name}</CardTitle>got 
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <StylistInfo  stylist={this.state.selectedStylist}/>
            </div>
        );
    }
}

export default Directory;