import {Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import encrypt from "../../algorithms/atBashCipher/encrypt.js";
import decrypt from "../../algorithms/atBashCipher/decrypt.js";

const AtBASHCipher = () => {
    const [form, setForm] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    const handleEncrypt = (e) => {
      e.preventDefault();
      // get our new errors
      setField("toDecrypt", form.toEncrypt.AtBashencrypt());
      // No errors! Put any logic here for the form submission!
        //console.log(form.toEncrypt.AtBashencrypt());
        // console.log(form);
        //alert('Thank you for your feedback!')
  };

  const handleDecrypt = (e) => {
      e.preventDefault();
      // get our new errors
      setField("toEncrypt", form.toDecrypt.AtBashdecrypt());
      // No errors! Put any logic here for the form submission!
      //console.log(form.toDecrypt.AtBashdecrypt());
      // console.log(form);
      //alert('Thank you for your feedback!')
  };

    const copyLeft = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            toEncrypt: form.toDecrypt,
        });
    };

    const copyRight = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            toDecrypt: form.toEncrypt,
        });
    };

  return (
    <div className="Flex">
      <div className="row justify-content-center h1 mt-4">AtBash Cipher</div>
      <Form className="row">
        <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>To Encrypt(Decrypted Text)</Form.Label>
            <Form.Control
                as="textarea"
                // defaultValue="The quick brown fox jumps over the lazy dog."
                value={form.toEncrypt}
                onChange={(e) => setField("toEncrypt", e.target.value)}
                rows={10}
            />
        </Form.Group>
        <div className="col-2">
          <Container fluid className="justify-content-center h-100 flex ">
            <div className="h-50 mt-4 w-100">
                {/* <Row className="justify-content-center">
                    <Form.Label>Key</Form.Label>
                    <Form.Control
                        // as="text"
                        // //defaultValue="The quick brown fox jumps over the lazy dog."
                        // value={form.toEncrypt}
                        // onChange={(e) => setField("toEncrypt", e.target.value)}
                        // rows={10}
                    />
                </Row> */}
                <div className="d-flex flex-column justify-content-center align-items-center pt-4">
                    {/* <svg data-testid="ArrowBackIcon"></svg> */}
                    <button className="btn btn-primary w-75 m-1" onClick={copyLeft}>
                        {" "}
                        <ArrowBackIcon/>{" "}
                    </button>
                    <button
                        className="btn btn-primary w-75 m-1"
                        onClick={copyRight}
                    >
                        {" "}
                        <ArrowForwardIcon/>
                    </button>
                </div>
            </div>
              <div className="row align-items-center h-50">
                  <div>
                      <button
                          type="button"
                          className="btn btn-primary w-100 m-1"
                          onClick={handleEncrypt}
                          aria-pressed="false"
                      >
                          Encrypt Left
                      </button>
                      <button
                          type="button"
                          onClick={handleDecrypt}
                          className="btn btn-primary w-100 m-1"
                          aria-pressed="true"
                      >
                          Decrypt Right
                      </button>
                  </div>
            </div>
          </Container>
        </div>
        <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>To Decrypt(Encrypted Text)</Form.Label>
          <Form.Control
            as="textarea"
            value={form.toDecrypt}
            onChange={(e) => setField("toDecrypt", e.target.value)}
            rows={10}
          />
        </Form.Group>
      </Form>

    </div>
  );
};

export default AtBASHCipher;
