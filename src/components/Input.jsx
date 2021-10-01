import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Input(){
    return(
        <>
            <Form class="form">
                <Row>
                    <Col xs={7}>
                    <Form.Control placeholder="Enter the log" />
                    </Col>
                    <Col > 
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            
        </>
    );
}

export default Input;