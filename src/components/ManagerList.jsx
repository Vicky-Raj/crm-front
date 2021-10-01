import React,{useState,useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios"
import url from "./url"


function ManagerList(){
    const [managers,setMangers] = useState([]);
    useEffect(()=>{
        axios.get(url+"/manager").then((res)=>{
            setMangers(res.data);
        })
    },[])
    return(
        <>
        {/* {
                managers && managers.length > 0 && managers.map((item) => {
    
                     <Modal.Dialog>
                        <Modal.Header >
                                <Modal.Title>Manager</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.manager}</p>
                        </Modal.Body>
                        <Modal.Footer>
                                <Button variant="primary" class="review" onClick={handleReview}>Create Review</Button>
                                { showCreateReview ? <Input /> : null }
                                <Button variant="secondary">View Logs</Button>   
                        </Modal.Footer>
                        
                    </Modal.Dialog>
        
                })
            } */}
        {
        managers.map((manager)=><>
        <Modal.Dialog>
            <Modal.Header >
                <Modal.Title>Manager</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{manager.name}</p>
                <p>{manager.email}</p>
                <FloatingLabel controlId="floatingSelect" label="Choose customer to log">
                    <Form.Select aria-label="Floating label select example">
                        {
                        manager.customers.map((customer)=><option value={customer.name} key={customer.name}>{customer.name}</option>)
                        }
                    </Form.Select>
                </FloatingLabel>
            <Modal.Footer>
                <Button variant="primary" >Create Log</Button>
                <Button variant="secondary">View Review</Button>
            </Modal.Footer>
            </Modal.Body>
        </Modal.Dialog>
        </>)
}
        </>
    );
}

export default ManagerList;