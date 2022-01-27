import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Appointment(props){
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Select Service</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Hair Cut</option>
            <option>Blow Out</option>
            <option>Color - all over</option>
            <option>Color - artistic placement</option>
            <option>Updo</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelectMulti" sm={2}>Select Stylist</Label>
        <Col sm={10}>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>Star Stylist</option>
            <option>Senior Stylist</option>
            <option>Junior Stylist</option>
            <option>Student</option>
      
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Additional Information</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
     
      
      
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Appointment;