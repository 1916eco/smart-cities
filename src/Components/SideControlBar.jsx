import React from 'react'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
function SideControlBar() {
    return (
    <div>   
      <Card bg="dark" className='mapSidebar position-absolute dark'>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
        <ListGroup bg="dark"  className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Card>
  </div>
  )
}

export default SideControlBar