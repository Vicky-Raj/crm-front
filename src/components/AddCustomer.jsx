import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function AddCustomer(){
    const [customerName,setCustomerName]=useState("");
    const [customerEmail,setCustomerEmail] = useState("");
    const [mappedManager,setMappedManager] = useState("");
    let customerSave = (e) => {
        e.preventDefault();
        let resObj = {"name":customerName, "email":customerEmail,"manager":mappedManager}
    }
    return(
    <>
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Name..."
                    onChange={(e) => setCustomerName(e.target.value)} 
                    value={customerName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    onChange={(e) => setCustomerEmail(e.target.value)} 
                    value={customerEmail}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Mapping Manager</Form.Label>
                        <Form.Select onChange={(e) => setMappedManager(e.target.value)} >
                            <option>Manager 1</option>
                            <option>Manager 1</option>
                            {/* {
                customers && customers.length > 0 && customers.map((item) => {
    
                     return <option value={item.name}>{item.name}</option>
                })
            } */}
                        </Form.Select>
                    </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary"
            onClick={customerSave}
            >Save changes</Button>
        </Modal.Footer>
    </Modal.Dialog>
    </>
    );
}

export default AddCustomer;