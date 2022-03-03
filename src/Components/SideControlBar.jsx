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
          <FormListGroupItem name="AdditionalGroup" type="checkbox" label="Weather"></FormListGroupItem>
          <FormListGroupItem name="AdditionalGroup" type="checkbox" label="Electric Chargers"></FormListGroupItem>
          <FormListGroupItem name="AdditionalGroup" type="checkbox" label="Recycling Points"></FormListGroupItem>
          <FormListGroupItem name="AdditionalGroup" type="checkbox" label="Weather"></FormListGroupItem>
          <FormListGroupItem name="AdditionalGroup" type="checkbox" label="Weather"></FormListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Title>Weather</Card.Title>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
        <FormListGroupItem name="WeatherGroup" type="radio" label="Temperature"></FormListGroupItem>
        <FormListGroupItem name="WeatherGroup" type="radio" label="Clouds"></FormListGroupItem>
        <FormListGroupItem name="WeatherGroup" type="radio" label="Wind"></FormListGroupItem>
        <FormListGroupItem name="WeatherGroup" type="radio" label="Precipitation"></FormListGroupItem>
        </ListGroup>
      </Card>
      </Form>
  </div>
  )
}

export default SideControlBar