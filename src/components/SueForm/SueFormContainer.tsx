import React, {useState} from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap/'
import { useDispatch } from 'react-redux'
import { postClaimAsync } from '../../store/features/claims/claimsSlice'
import { StepperMain } from '../stepper/StepperMain.tsx'

export const SueFormContainer = () => {
  const dispatch = useDispatch<any>()

  const [newClaim, setNewClaim] = useState({
      id: "",
      documentMonth: "",
      documentYear: "",
      agreementDate: "",
      claimerName: "",
      claimerIDNumber: "",
      claimerIDCity: "",
      claimerCity: "",
      claimerAddress: "",
      claimerEmail: "",
      defendantName: "",
      facts:"",
      proofs: ""
  });
  
  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('newClaim: ', newClaim)
    dispatch(postClaimAsync({claimFields: newClaim}));
  };

  return (
    <Container fluid style={{height: 'cover'}}>
      <StepperMain steps={[
        {
          title: "I'm the step 1",
          backgroundColor: '#EB646F',
          // Render whatever you want here, we will improve this later
          element: stepProps => <Step {...stepProps} />,
        },
        {
          title: "I'm the step 2",
          backgroundColor: '#00AC9E',
          element: stepProps => <Step {...stepProps} />,
        },
        {
          title: "I'm the step 4",
          backgroundColor: '#4E4B99',
          element: stepProps => <Step {...stepProps} />,
        },
        {
          title: "I'm the step 5",
          backgroundColor: '#FAB816',
          element: stepProps => <Step {...stepProps} />,
        },
      ]} />
    </Container>
  )
}

const Step = ({
  goNextStep,
  goPreviousStep,
  isFirst,
  isLast,
  step,
}) => {
  return (

    //  <> 
    //   <Row style={{backgroundColor:`${step.backgroundColor}`, height: '30vh'}} className="align-items-center justify-content-center" sm={6}>
    //           <Col sm={7} md={6} lg={6}>
    //         <div>
    //           <h2 style={{fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'center', fontWeight: 800, color: '#EB646F', fontSize: '24px'}}>RECLAMACIÓN PRESTADOR DE SERVICIOS TURÍSTICOS</h2>
    //         </div>
    //           </Col>
    //         </Row>
    //         <Row className="justify-content-center" sm={6}>
    //           <Col sm={10} md={10} lg={10}>
    //             <div className="h-75 d-inline-block">
    //               <p style={{fontFamily: 'Raleway, sans-serif',  textAlign: 'left', fontWeight: 800, fontSize: '12px', marginBottom:'0px'}}>Estimado usuario.</p>
    //               <p style={{fontFamily: 'Raleway, sans-serif',  textAlign: 'left', fontWeight: 500, fontSize: '10px', letterSpacing: '1px',}}>Tenga en cuenta que el presente formulario está diseñado para allegar reclamaciones por incumplimiento de prestadores turísticos ante la Superintendencia de Industria y Comercio - SIC</p>
    //             </div>
    //           </Col>
    //     </Row>
    //     <Row className="align-items-center justify-content-center" style={{backgroundColor:'#EB646F', height:'45vh'}}>
    //     <Col sm={7} md={6} lg={5} >
    //       <Form>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Correo Electrónico</Form.Label>
    //         <Form.Control type="email" placeholder="Enter email"/>
    //       </Form.Group>
    //       </Form>
    //     </Col>
    //   </Row>
    // </>
  <div className="step">
    <div className="step-body">IM THE STEP {step}</div>
    <div className="step-actions">
      {/* If we are in the Step 1, we cannot go back, so we disable this */}
      <button
        className="step-button"
        disabled={isFirst}
        onClick={goPreviousStep}
      >
        GO PREVIOUS
      </button>
      {/* Same but with the last step */}
      <button className="step-button" disabled={isLast} onClick={goNextStep}>
        GO NEXT
      </button>
    </div>
 </div>
    )
};
  











































  {/* <Form.Label>SELECCIONE EL TIPO DE PETICIÓN</Form.Label>
  <Form.Select aria-label="Default select example" onChange={(e) => setNewClaim({ ...newClaim, id: e.target.value })}>
    <option value="62a0203ab7ef665543db73f9">Retracto y Desistimiento</option>
    <option value="62a1748b91f2dd1c91cd2140">Falta de Información al Consumidor</option>
    <option value="62a1778b91f2dd1c91cd2142">Eximentes de la Responsabilidad</option>
    <option value="62a2b59390feaadcf313fe7b">Publicidad Engañosa</option>
  </Form.Select>  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>NOMBRE</Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, claimerName: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>NÚMERO DE IDENTIFICACIÓN *</Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, claimerIDNumber: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>CIUDAD DEL DOCUMENTO DE IDENTIFICACIÓN</Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, claimerIDCity: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>CELULAR*</Form.Label>
    <Form.Control type="text"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>CIUDAD DE DOMICILIO</Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, claimerAddress: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>DIRECCIÓN</Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, claimerCity: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Mes del documento</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setNewClaim({ ...newClaim, documentMonth: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>año del documento</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setNewClaim({ ...newClaim, documentYear: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Nombre del prestador o prestadores de servicios turísticos </Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, defendantName: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword" >
    <Form.Label>HECHOS</Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, facts: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Fecha de la reclamación directa</Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, agreementDate: e.target.value })}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>AÑADIR PRUEBAS</Form.Label>
    <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, proofs: e.target.value })}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleOnClick}>
    Submit Form
  </Button> */}