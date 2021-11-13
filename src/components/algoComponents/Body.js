import { Form } from "react-bootstrap";
import React, { useState } from "react";

const Body = (props) => {
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors

    // No errors! Put any logic here for the form submission!
    alert("Thank you for your feedback!");
  };
  return (
    <div className="Flex">
      <div className="row justify-content-center">{props.algo_name}</div>
      <Form className="row">
        <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>To Encrypt(Decrypted Text)</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => setField("toEncrypt", e.target.value)}
            rows={10}
          />
        </Form.Group>
        <div className="col-2">
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleSubmit}
            aria-pressed="false"
          >
            Encrypt Left
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            class="btn btn-primary"
            aria-pressed="true"
          >
            Decrypt Right
          </button>
        </div>
        <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>To Decrypt(Encrypted Text)</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => setField("toDecrypt", e.target.value)}
            rows={10}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Body;
