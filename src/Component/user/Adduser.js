import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Adduser = () => {
    return (
<div className="adduser col-6 m-5 card p-5 bg-primary text-white">
<Form>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    console.log(Adduser);
</div>
    );
};

export default Adduser;
