import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddManager(){
    const [managerName,setManagerName]=useState("");
    const [managerEmail,setManagerEmail]=useState("");
    let managerSave = (e) => {
        e.preventDefault();
        let resObj = {"name":managerName, "email":managerEmail}
    }
    return(
    <>
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Add Manager</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Name..." 
                    onChange={(e) => setManagerName(e.target.value)} 
                    value={managerName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={(e) => setManagerEmail(e.target.value)} value={managerEmail}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary"
            onClick={managerSave}
            >Save changes</Button>
        </Modal.Footer>
    </Modal.Dialog>
    </>
    );
}

export default AddManager;