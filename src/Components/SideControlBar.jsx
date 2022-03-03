import React from 'react'
import { Card,ListGroup,Form } from 'react-bootstrap';
import FormListGroupItem from './MiniComps/FormListGroupItem';
function SideControlBar() {
    return (
    <div>   
      <Form>
      <Card bg="dark" className='mapSidebar position-absolute dark'>
        <Card.Body>
          <Card.Title>Layer Controller</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
          <FormListGroupItem label="Weather"></FormListGroupItem>
          <FormListGroupItem label="Electric Chargers"></FormListGroupItem>
          <FormListGroupItem label="Recycling Points"></FormListGroupItem>
          <FormListGroupItem label="Weather"></FormListGroupItem>
          <FormListGroupItem label="Weather"></FormListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Title>Weather</Card.Title>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
        <FormListGroupItem label="Temperature"></FormListGroupItem>
        <FormListGroupItem label="Clouds"></FormListGroupItem>
        <FormListGroupItem label="Wind"></FormListGroupItem>
        <FormListGroupItem label="Precipitation"></FormListGroupItem>
        </ListGroup>
      </Card>
      </Form>
  </div>
  )
}

export default SideControlBar