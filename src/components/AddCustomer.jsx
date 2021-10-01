import React,{useState,useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";
import url from "./url";

function AddCustomer(){
    const [customerName,setCustomerName]=useState("");
    const [customerEmail,setCustomerEmail] = useState("");
    const [mappedManager,setMappedManager] = useState("");
    const [managers,setManagers] = useState([]);
    let customerSave = (e) => {
        console.log(mappedManager);
        axios.post(url+"/customer",{name:customerName,email:customerEmail,manager:mappedManager})
        .then((res)=>{
            console.log(res.data);
            setCustomerName("");
            setCustomerEmail("");
            setMappedManager("");
        })
    }

    useEffect(()=>{
        axios.get(url+"/manager").then((res)=>{
            setManagers(res.data);
        })
    },[])

    useEffect(()=>{
        setMappedManager(managers.length ? managers[0].name : "");
    },[managers])
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
                        <Form.Select onChange={(e) => setMappedManager(e.target.value)} value={mappedManager}>
                            {
                                managers.map((manager)=><option key={manager.name} value={manager.name}>{manager.name}</option>)
                            }
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