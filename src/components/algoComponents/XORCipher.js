import {Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import encrypt from "../../algorithms/XORCipher/encrypt.js";
import decrypt from "../../algorithms/XORCipher/decrypt.js";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const XORCipher = () => {
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
    setField("toDecrypt", form.toEncrypt.XORencrypt(Number(form.key)));
    // No errors! Put any logic here for the form submission!
    //console.log(form.toEncrypt.XORencrypt());
    console.log(form);
    //alert('Thank you for your feedback!')
  };

  const handleDecrypt = (e) => {
    e.preventDefault();
    // get our new errors
    setField("toEncrypt", form.toDecrypt.XORdecrypt(Number(form.key)));
    // No errors! Put any logic here for the form submission!
    //console.log(form.toDecrypt.XORdecrypt());
    console.log(form);
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
          <div className="row justify-content-center h1 mt-4">XOR Cipher</div>
          <Form className="row">
              <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>To Encrypt(Decrypted Text)</Form.Label>
                  <Form.Control
                      as="textarea"
                      //defaultValue="The quick brown fox jumps over the lazy dog."
                      value={form.toEncrypt}
                      onChange={(e) => setField("toEncrypt", e.target.value)}
                      rows={10}
                  />
              </Form.Group>
              <div className="col-2">
                  <Container fluid className="justify-content-center h-100 flex ">
                      <div className="h-50 mt-4 w-100">
                          <Row className="justify-content-center">
                              <Form.Label>Key</Form.Label>
                              <Form.Control
                                  type="text"
                                  //defaultValue="The quick brown fox jumps over the lazy dog."
                                  value={form.key}
                                  onChange={(e) => setField("key", e.target.value)}
                              />
                          </Row>
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
          <div>
                <h1 className="text-light bg-primary display-5">Description</h1>
                <p style={{"font-size": "150%"}}>
                Firstly the cipher works on the principle of boolean XOR i.e returns 1 if and only if both “A” and “B” are different.
                For encryption we need to convert the given message into their equivalent ASCII 
                and then XOR the results with the binary conversion of the key given.
                </p>
            </div>
      </div>
  );
};

export default XORCipher;
