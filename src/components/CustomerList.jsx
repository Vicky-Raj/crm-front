import React, {useState}  from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Input from "./Input";


function CustomerList(){
    const [showCreateReview,setShowCreateReview] = useState(false);
    const handleReview = () => setShowCreateReview(true);
    return(
        <>
        {/* {
                customers && customers.length > 0 && customers.map((item) => {
    
                     <Modal.Dialog>
                        <Modal.Header >
                                <Modal.Title>Customer</Modal.Title>
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
        <Modal.Dialog>
            <Modal.Header >
                <Modal.Title>Customer</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Customer Name</p>
                <p>Customer Email</p>
                <p>Customer's Manager </p>
            <Modal.Footer>
                <Button variant="primary" class="review" onClick={handleReview}>Create Review</Button>
                { showCreateReview ? <Input /> : null }
                <Button variant="secondary">View Logs</Button>   
            </Modal.Footer>
            </Modal.Body>
        </Modal.Dialog>
        </>
    );
}
export default CustomerList; 

