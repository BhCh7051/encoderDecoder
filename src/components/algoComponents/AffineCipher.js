import {Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import encrypt from "../../algorithms/AffineCipher/encrypt.js";
import decrypt from "../../algorithms/AffineCipher/decrypt.js";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AffineCipher = () => {
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
    setField(
        "toDecrypt",
        form.toEncrypt.Affineencrypt(Number(form.keyA), Number(form.keyB))
    );
    // No errors! Put any logic here for the form submission!
    //console.log(form.toEncrypt.Affineencrypt());
    console.log(form);
    //alert('Thank you for your feedback!')
  };

  const handleDecrypt = (e) => {
    e.preventDefault();
    // get our new errors
    setField(
        "toEncrypt",
        form.toDecrypt.Affinedecrypt(Number(form.keyA), Number(form.keyB))
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
        <div className="row justify-content-center h1 mt-4">Affine Cipher</div>
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
                  <Form.Label>Key A</Form.Label>
                  <Form.Control
                      type="text"
                      //defaultValue="The quick brown fox jumps over the lazy dog."
                      value={form.keyA}
                      onChange={(e) => setField("keyA", e.target.value)}
                  />
                  <Form.Label>Key B</Form.Label>
                  <Form.Control
                      type="text"
                      //defaultValue="The quick brown fox jumps over the lazy dog."
                      value={form.keyB}
                      onChange={(e) => setField("keyB", e.target.value)}
                  />
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
            <p style={{"font-size": "150%"}}>First each character of the message  is converted in a number from 0 to 25, corresponding to its position in the alphabet which contains 26 letters --> (a = 0, b = 1 ... z = 25 ).
            Then, each number obtained is transformed by an encrypt(f(x) = ax + b).  Where "x" is representing the number while "a" and "b" are defined during the encryption.  While, "a" and "b" are the keys required to decrypt the final message.
            After passing the values we now have the numbers corresponding to them and now we perform mod(26) to each of them. That gives us another numeric values for each character.
            We then convert these values to the alphabets corresponding to each resulting values and then putting them together side by side gives the encrypted message.
            </p>
        </div>
      </div>
  );
};

export default AffineCipher;
