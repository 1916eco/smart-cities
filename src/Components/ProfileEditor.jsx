import React from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, where, query, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useUserAuth } from "../context/UserAuthContext";
import { X, Pencil } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function ProfileEditor() {
  const navigate = useNavigate();
  const [userBases, setUserBases] = useState([]);
  const [newName, setNewName] = useState();
  const [emailToConfirm, setEmailToConfirm] = useState();
  const homeLocationCollectionRef = collection(db, "home");
  const { user, updateUserProfile, deleteUserProfile } = useUserAuth();
  const [show, setShow] = useState(false);
  const [showDelete, setDeleteShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  const deleteHandler = (id) => {
    deleteDoc(doc(db, "home", id));
  };
  useEffect(() => {
    const getLocation = async () => {
      const q = await query(homeLocationCollectionRef, where("UserID", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let homes = [];
        snapshot.docs.forEach((doc) => {
          homes.push({ ...doc.data(), id: doc.id });
        });
        setUserBases(homes);
      });
    };
    getLocation();
  }, []);
  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    if (emailToConfirm === user.email) {
      console.log("delete account");
      await deleteUserProfile();
      navigate("/");
      // setDeleteShow(false);
      window.location.reload();
    }
  };

  const handleEditName = async () => {
    var validate = newName.trim().replace(/[^a-zA-Z ]/g, "");
    if (validate === "") {
      alert("Enter a valid name!");
    } else {
      //updating user profiles with the input field and also validate it
      await updateUserProfile(newName.replace(/[^a-zA-Z ]/g, ""));
      setShow(false);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Display name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter new Display name</Form.Label>
              <Form.Control type="name" placeholder="New Name" onChange={(e) => setNewName(e.target.value)} autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditName}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDelete} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Enter Current email to delete account! <b>{user.email}</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                required
                onChange={(e) => setEmailToConfirm(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDeleteClose}>
            Close
          </Button>
          {emailToConfirm === user.email ? (
            <Button variant="danger" onClick={handleDeleteAccount}>
              Delete Account
            </Button>
          ) : (
            <Button variant="danger" disabled onClick={handleDeleteAccount}>
              Delete Account
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <div className="jumbotron vertical-center">
        <div className="container pt-4">
          <h1>
            Hello, {user.displayName}
            <Pencil width="16" height="16" className="mx-3" onClick={() => setShow(true)} />
            <br />
            Email - {user.email}
          </h1>
          <br />
          <hr></hr>
          <h1>Home Editor</h1>
          <Table striped bordered hover variant="dark" responsive="sm">
            <thead>
              <tr>
                <th>Home Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {userBases.map((bases) => {
                return (
                  <tr key={bases.id}>
                    <td>Name: {bases.homeName}</td>
                    <td>{bases.location[0]}</td>
                    <td>{bases.location[1]}</td>
                    <td className="text-center">
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteHandler(bases.id);
                        }}
                      >
                        <X color="black" className="IconHelper" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button variant="danger" onClick={handleDeleteShow}>
            Delete Account
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProfileEditor;
