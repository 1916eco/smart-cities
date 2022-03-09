import React from 'react'
import { Card,ListGroup,Form,ListGroupItem } from 'react-bootstrap';
import FormListGroupItem from './utils/FormListGroupItem';
function SideControlBar({setElectricLayer, setUserLocationLayer,setWeatherTypeLayer,setWeatherLayer}) {
    return (
    <div>   
      <Form>
      <Card bg="dark" className='mapSidebar position-absolute dark'>
        <Card.Body>
          <Card.Title>Layer Controller</Card.Title>
          <Card.Text>
            Layer controller control the LAYERS NOT WORKING YET THIS IS NEXT STEP
          </Card.Text>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
        <ListGroupItem><Form.Check type="checkbox" name="AdditionalGroup" aria-label="option 1" onClick={(e)=>setUserLocationLayer(e.target.checked)} label="User Location"/></ListGroupItem>
        <ListGroupItem><Form.Check type="checkbox" name="AdditionalGroup" aria-label="option 1" onClick={(e)=>setWeatherLayer(e.target.checked)} label="Recycling Points"/></ListGroupItem>
        <ListGroupItem><Form.Check type="checkbox" name="AdditionalGroup" aria-label="option 1" onClick={(e)=>setElectricLayer(e.target.checked)} label="Electric Chargers"/></ListGroupItem>
        <ListGroupItem><Form.Check type="checkbox" name="AdditionalGroup" aria-label="option 1" onClick={(e)=>setWeatherLayer(e.target.checked)} label="Weather"/></ListGroupItem>

        </ListGroup>
        <Card.Body>
          <Card.Title>Weather</Card.Title>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
        <ListGroupItem><Form.Check type="radio" name="WeatherGroup" aria-label="option 1" onClick={(e)=>setWeatherTypeLayer("temp_new")} label="Temperature"/></ListGroupItem>
        <ListGroupItem><Form.Check type="radio" name="WeatherGroup" aria-label="option 1" onClick={(e)=>setWeatherTypeLayer("clouds_new")} label="Clouds"/></ListGroupItem>
        <ListGroupItem><Form.Check type="radio" name="WeatherGroup" aria-label="option 1" onClick={(e)=>setWeatherTypeLayer("wind_new")} label="Wind"/></ListGroupItem>
        <ListGroupItem><Form.Check type="radio" name="WeatherGroup" aria-label="option 1" onClick={(e)=>setWeatherTypeLayer("precipitation_new")} label="Precipitation"/></ListGroupItem>

        </ListGroup>
      </Card>
      </Form>
  </div>
  )
}

export default SideControlBar