import React, { useEffect } from "react";
import { useState, useRef, useMemo } from "react";
import { Form, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function BaseBuilder() {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const [name, setName] = useState("");
  const homeLocationCollectionRef = collection(db, "home");

  useEffect(() => {
    if (!user) navigate("/");
    console.log(user);
  }, []);

  //useEffect(()=>{dragend(){setPosition(marker.getLatLng()}},[currentPos])
  const [position, setPosition] = useState([57.147996005338925, -2.1080017089843754]);
  const markerRef = useRef(null);

  const createNewHome = () => {
    addDoc(homeLocationCollectionRef, { homeName: name, location: position, UserID: user.uid });
    navigate("/");
  };

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          //console.log(marker.getLatLng())
          setPosition([marker.getLatLng().lat, marker.getLatLng().lng]);
        }
      },
    }),
    []
  );

  return (
    <div className="row center">
      <div className="col-md-3">
        <p>Drag pin to desired location.</p>
        <div className="small_map">
          <MapContainer center={[57.148, -2.108]} zoom={10.9} zoomControl={false} minZoom={9.5}>
            <TileLayer
              attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Marker draggable={true} eventHandlers={eventHandlers} position={position} ref={markerRef}>
              <Popup minWidth={90}></Popup>
            </Marker>
          </MapContainer>
        </div>

        <Form onSubmit={createNewHome}>
          <Form.Group className="" controlId="formEmail">
            <Form.Label>Home Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Home Name"
              required={true}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="Submit">
              Add New Home
            </Button>
          </div>
        </Form>
        {position}
      </div>
    </div>
  );
}

export default BaseBuilder;
