import React from 'react'
import { useState } from 'react';
import { Card,ListGroup,Form,ListGroupItem } from 'react-bootstrap';
function SideControlBar({setElectricLayer, setUserLocationLayer,setWeatherTypeLayer,setWeatherLayer,weatherLayer,setMapSelect,setRecyclingPointsLayer,setBusLayer}) {
  const [weatherClicked, setWeatherClicked] = useState(false);

    return (
    <div>   
      <Form>
      <Card bg="dark" className='mapSidebar position-absolute dark'>
        <Card.Body>
          <Card.Title>Layer Controller</Card.Title>
          <Card.Text>
            Layer controller, select layers to display. Weather will be set to dark theme for better viewing.
          </Card.Text>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
{
!weatherClicked
?         <ListGroupItem><Form.Check type="switch" id="custom-switch" label="Use Light map theme" onClick={(e)=>setMapSelect(e.target.checked)}/></ListGroupItem>

: null
}        <ListGroupItem><Form.Check type="checkbox" name="AdditionalGroup" aria-label="option 1" onClick={(e)=>setUserLocationLayer(e.target.checked)} label="User Location"/></ListGroupItem>
        <ListGroupItem><Form.Check type="checkbox" name="AdditionalGroup" aria-label="option 1" onClick={(e)=>setRecyclingPointsLayer(e.target.checked)} label="Recycling Points"/></ListGroupItem>
        <ListGroupItem><Form.Check type="checkbox" name="AdditionalGroup" aria-label="option 1" onClick={(e)=>setElectricLayer(e.target.checked)} label="Electric Chargers"/></ListGroupItem>
        <ListGroupItem><Form.Check type="checkbox" name="AdditionalGroup" aria-label="option 1" onClick={(e)=>[setWeatherLayer(e.target.checked),setWeatherClicked(e.target.checked)]} label="Weather"/></ListGroupItem>

        </ListGroup>
{
weatherLayer
? <>        <Card.Body>
          <Card.Title>Weather</Card.Title>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
        <ListGroupItem><Form.Check type="radio" name="WeatherGroup" aria-label="option 1" defaultChecked={true} onClick={(e)=>setWeatherTypeLayer("temp_new")} label="Temperature"/></ListGroupItem>
        <ListGroupItem><Form.Check type="radio" name="WeatherGroup" aria-label="option 1" onClick={(e)=>setWeatherTypeLayer("clouds_new")} label="Clouds"/></ListGroupItem>
        <ListGroupItem><Form.Check type="radio" name="WeatherGroup" aria-label="option 1" onClick={(e)=>setWeatherTypeLayer("wind_new")} label="Wind"/></ListGroupItem>
        <ListGroupItem><Form.Check type="radio" name="WeatherGroup" aria-label="option 1" onClick={(e)=>setWeatherTypeLayer("precipitation_new")} label="Precipitation"/></ListGroupItem>
        </ListGroup></>
: null
}
        <Card.Body>
          <Card.Title>Transport</Card.Title>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
        <ListGroupItem><Form.Check type="checkbox" name="TransportGroup" aria-label="option 1" onClick={(e)=>setBusLayer(e.target.checked)} label="Bus Stops"/></ListGroupItem>
        </ListGroup>

      </Card>
      </Form>
  </div>
  )
}

export default SideControlBar