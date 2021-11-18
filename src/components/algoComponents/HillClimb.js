import {Form, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import encrypt from "../../algorithms/HillCipher/encrypt.js";
import decrypt from "../../algorithms/HillCipher/decrypt.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HillClimb = () => {
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleEncrypt = (e) => {
    e.preventDefault();
    console.log(form);

    // get our new errors
    // setField(
    //     "toDecrypt",
    //     hillEncrypt(form.toEncrypt,[Number(form.keyA), Number(form.keyB),Number(form.keyC), Number(form.keyD)])
    // );
    setField("toDecrypt", form.toEncrypt.hillEncrypt([Number(form.keyA), Number(form.keyB), Number(form.keyC), Number(form.keyD)]));

    // No errors! Put any logic here for the form submission!
    //console.log(form.toEncrypt.Affineencrypt());
    //alert('Thank you for your feedback!')
  };

  const handleDecrypt = (e) => {
    e.preventDefault();
    // get our new errors
    setField("toEncrypt", form.toDecrypt.hillDecrypt([Number(form.keyA), Number(form.keyB), Number(form.keyC), Number(form.keyD)])
    );
    // No errors! Put any logic here for the form submission!
    //console.log(form.toDecrypt.Affinedecrypt());
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
        <div className="row justify-content-center h1 mt-4">Hill Climb Cipher</div>
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
                <Row className="text-center">
                  <div className="col-6">
                    <Form.Label>Key A</Form.Label>
                    <Form.Control
                        type="text"
                        //defaultValue="The quick brown fox jumps over the lazy dog."
                        value={form.keyA}
                        onChange={(e) => setField("keyA", e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <Form.Label>Key B</Form.Label>
                    <Form.Control
                        type="text"
                        //defaultValue="The quick brown fox jumps over the lazy dog."
                        value={form.keyB}
                        onChange={(e) => setField("keyB", e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <Form.Label>Key C</Form.Label>
                    <Form.Control
                        type="text"
                        //defaultValue="The quick brown fox jumps over the lazy dog."
                        value={form.keyC}
                        onChange={(e) => setField("keyC", e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <Form.Label>Key D</Form.Label>
                    <Form.Control
                        type="text"
                        //defaultValue="The quick brown fox jumps over the lazy dog."
                        value={form.keyD}
                        onChange={(e) => setField("keyD", e.target.value)}
                    />
                  </div>


                </Row>
                <div className="d-flex justify-content-center align-items-center">
                  {/* <svg data-testid="ArrowBackIcon"></svg> */}
                  <button
                      className="btn btn-primary w-100 m-1"
                      onClick={copyLeft}
                  >
                    {" "}
                    <ArrowBackIcon/>{" "}
                  </button>
                  <button
                      className="btn btn-primary w-100 m-1"
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
            <p style={{"font-size": "150%"}}>Hill cipher is a polygraphic substitution cipher based on linear algebra. Each letter is represented by a number modulo 26. The scheme A = 0, B = 1, …, Z = 25 is used.
            For encryption we convert the given key and message to numeric form using the above rule. Then perform matrix multiplication and take mod 26 of the resulting string.
            Again convert the numeric result to alphabet.
            </p>
        </div>
      </div>
  );
};

export default HillClimb;
