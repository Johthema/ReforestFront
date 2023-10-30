// import Header from '../../components/header/index'

// export default function Checkout(){
//     return(
//         <>
//         <Header></Header>
//         <h2>Pagina "Checkout" em construção</h2>
//         </>
//     )
// }
import Button from 'react-bootstrap/Button';
import Style from './checkout.module.css'
import {useState, useEffect} from 'react'
import React from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Modal from 'react-bootstrap/Modal';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPermissao, setShowPermissao] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded": 
          // setMessage("Pagamento realizado com sucesso!");
          break;
        case "processing":
          // setMessage("Pagamento em processamento.");
          break;
        case "requires_payment_method":
          setMessage("Seu pagamento não foi bem-sucedido, tente novamente.");
          break;
        default:
          setMessage("Algo deu errado.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js ainda não foi carregado.
      // Certifique-se de desativar o envio do formulário até que Stripe.js seja carregado.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        
        // return_url: "http://localhost:3000/plantar",
        return_url: "http://localhost:3000/plantar",
        
       
      },
    });

    // Este ponto só será alcançado se houver um erro imediato quando
    // confirmando o pagamento. Caso contrário, seu cliente será redirecionado para
    // seu `url_de_retorno`. Para alguns métodos de pagamento como iDEAL, seu cliente
    // ser redirecionado para um site intermediário primeiro para autorizar o pagamento e depois
    // redirecionado para `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("Um erro inesperado ocorreu.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };


  const handleClose = () => setShowPermissao(false);
  const handleShowEdit = (idElemento, nome) =>{
    // console.log("o id a passar: ", idUser)
    // console.log("a categoria a passar: ", categ)
    // setIdUsuario(idElemento)
    setShowPermissao(true);
    // setUsuarioNome(nome)
    // setDadosEditar([idElemento, categ]);
    
  }



  return (
    <>
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      {/* <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button> */}
       <Button className={Style.botaoContinuar} type="submit" disabled={isLoading || !stripe || !elements} id="submit" onClick={()=>handleShowEdit()}>
       <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Plantar agora"}
        </span>
        
      </Button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>

      {/* Modal de exclusão de usuario */}
      <Modal show={showPermissao} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {/* <h2 className={Style.tituloDeletar}>Pagamento efetuado com sucesso!</h2> */}
            {/* <h5 className={Style.tituloDelet}>{nome}</h5> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h4 className={Style.tituloDeletar}>Pagamento efetuado com sucesso!</h4>
          {/* <h4><FaRedoAlt />Deseja mesmo restaurar este ítem? </h4> */}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button> */}
          <Button variant="primary" >
           Voltar
          </Button>
        </Modal.Footer>
      </Modal>

      </>

  );
}