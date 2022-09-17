import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import contactImg from "./../assets/img/contact-img.svg"


const Contact = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit= async (e) => {
    e.preventDefault();

    setButtonText('Enviando...')
    let response = await fetch("https://nodemailerscript.herokuapp.com/contact", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(formDetails)
    });
    setButtonText("Enviar")
    let result =  await response.json()
    setFormDetails(formInitialDetails);
    console.log(result.code)
    
    if(result.code === 200) {
      setStatus({sucess: true, message: "Mensagem enviada com sucesso!"})
    }
    else{
      setStatus({sucess: false, message: "Alguma coisa deu errada, por favor tente mais tarde!"})
    }
  }

    return (
        <section className="contact" id="connect">
             <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                      <img src={contactImg} alt="contactImg"/>
                    </Col>
                    <Col md={6}>
                        <h2>Entre em Contato</h2>
                        <form onSubmit={handleSubmit}>
                          <Row>
                            <Col sm={6} className="px-1">
                              
                              <input onChange={(e) => onFormUpdate('firstName', e.target.value)} value={formDetails.firstName} type='text' placeholder="Nome" required/>
                            </Col>
                            <Col sm={6} className="px-2">
                              
                              <input onChange={(e) => onFormUpdate('lastName', e.target.value)} value={formDetails.lastName} type='text' placeholder="Sobrenome" required/>
                            </Col>
                      
                            <Col sm={6} className="px-1">
      
                              <input onChange={(e) => onFormUpdate('email', e.target.value)} value={formDetails.email} type='text' placeholder="Endereço de Email" required/>
                            </Col>
                            <Col sm={6} className="px-2">
                             
                              <input onChange={(e) => onFormUpdate('phone', e.target.value)} value={formDetails.phone} type='tel' placeholder="Telefone"/>
                            </Col>
                        
                            <Col className="px-1" sm={12}>
                              <textarea rows={6} onChange={(e) => onFormUpdate('message', e.target.value)} value={formDetails.message} type="text" placeholder="Mensagem" required/>
                              <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                          </Row>
                        </form>
                    </Col>

                    {
                      status.message && 
                      <Col>
                        <p className={status.sucess === false ? "danger" : "sucess"}>{status.message}</p>
                      </Col>
                    }
                </Row>
             </Container>
        </section>
      );
}

export default Contact;