import { Form } from "react-bootstrap";
const Body = (props) => {
    return(
        <div className="Flex"> 
            <div className="row justify-content-center" >{props.algo_name}</div>
            <Form className="row">
                <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>To Encrypt(Decrypted Text)</Form.Label>
                    <Form.Control as="textarea" rows={10} />
                </Form.Group>
            <div className="col-2">
                <button type="button" class="btn btn-primary" aria-pressed="false">Encrypt Left</button>
                <button type="button" class="btn btn-primary" aria-pressed="true">Decrypt Right</button>
            </div>
  <Form.Group className="col-5" controlId="exampleForm.ControlTextarea1">
    <Form.Label>To Decrypt(Encrypted Text)</Form.Label>
    <Form.Control as="textarea" rows={10} />
  </Form.Group>
</Form>
        </div>

    )
}

export default Body;