import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Style from './senha.module.css';
import {useState, useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

export default function Senha(){
  const URL_API = process.env.NEXT_PUBLIC_API_URL+"reset";

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aviso, setAviso] = useState(false);
  const [password, setPassword] = useState('');
  const [new_password, setNew_password] = useState('');
  const [confirm_new_password, setConfirm_new_password] = useState('');
  const [show, setShow] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);

  const onChangeSenhaAtual = (evt) =>{
    setPassword(evt.target.value)
  }
  const onChangeSenha = (evt) =>{
    setNew_password(evt.target.value)
  }
  const onChangeSenhaConf = (evt) =>{
    setConfirm_new_password(evt.target.value)
  }

// const checarSenhas = () =>{
//   console.log("a senha inserida: ", dadosSenha1)
//   console.log("a senha redigitada: ", dadosSenha2)
//   if(new_password === dadosSenha2 ){
// console.log("as senhas conscidem")
//   } else if (dadosSenha1 != dadosSenha2){
//     console.log("as senhas não conscidem")
//   }
// }

  const enviarForm = async (evt) => {

    evt.preventDefault()
    try {
      setLoading(true)

      const response = await fetch(URL_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },

        body: JSON.stringify({ password, new_password, confirm_new_password }),
      })

      const json = await response.json()
      // console.log("::",error.response)
      if (password, new_password, confirm_new_password) {
        //setLoading(false)
        setLoading(false)
        setSuccess(true)
        //setShow(false);
        //setReloadCount(prevCount => prevCount + 1);

      } else if (!new_password || !confirm_new_password || !password){
        setAviso(true)
        setLoading(false)

        //setErro(true)
      } if (response.status == 400){
        // setSuccess(false)
        // setErroInterno(true)
        
      }
     
      // setLoading(false)

    } catch (err) {
     
      console.log(err)
    }
  }




    return(
        <> 
        <div className={Style.divPassword}>
        <Form onSubmit={enviarForm} method='post'>
  
        <Form.Group className="mb-3" controlId="formBasicPassword1">
     
          <FloatingLabel controlId="floatingInput" label="Digite password atual" className="mb-3">

          <Form.Control type="password" placeholder="Password" onChange={onChangeSenhaAtual} />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
        <FloatingLabel controlId="floatingInput" label="Digite novo password" className="mb-3">

        <Form.Control type="password" placeholder="novo Password" onChange={onChangeSenha} />
        </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword3">
          <FloatingLabel controlId="floatingInput" label="Redigite novo password" className="mb-3">

          <Form.Control type="password" placeholder="Redigite novo Password"  onChange={onChangeSenhaConf}/>
          </FloatingLabel>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" onClick={enviarForm}>
          Salvar
        </Button>
      </Form>
      </div>





      {success &&
          <Alert key="1232" variant="success" className={Style.botaoCarregamento} onClose={() => setShow(false)} dismissible>
            <Spinner animation="grow" variant="success" /> Salvo com sucesso!
          </Alert>
        }

        {loading &&
          <Alert key="12345" variant="primary" className={Style.botaoCarregamento}>
            <Spinner animation="border" variant="primary" /> Aguarde, carregando...
          </Alert>
        }

        {aviso &&
          <Alert key="123456" variant="primary" className={Style.botaoCarregamento}  dismissible>
            <Spinner animation="border" variant="warning" /> O nome não pode ser vazio!
          </Alert>
        }


      </>
    )
}