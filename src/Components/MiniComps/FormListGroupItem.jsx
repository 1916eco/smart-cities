import React from 'react'
import { ListGroupItem,Form } from 'react-bootstrap';

function FormListGroupItem(prop) {
  return (
    <ListGroupItem><Form.Check aria-label="option 1" label={`${prop.label}`}/></ListGroupItem>
  )
}

export default FormListGroupItem