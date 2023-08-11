import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Style from './senha.module.css';

export default function Senha(){
    return(
        <>
        <div className={Style.divPassword}>
        <Form>
  
        <Form.Group className="mb-3" controlId="formBasicPassword1">
     
          <FloatingLabel controlId="floatingInput" label="Digite password atual" className="mb-3">

          <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
        <FloatingLabel controlId="floatingInput" label="Digite novo password" className="mb-3">

        <Form.Control type="password" placeholder="novo Password" />
        </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword3">
          <FloatingLabel controlId="floatingInput" label="Redigite novo password" className="mb-3">

          <Form.Control type="password" placeholder="Redigite novo Password" />
          </FloatingLabel>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Salvar
        </Button>
      </Form>
      </div>
      </>
    )
}