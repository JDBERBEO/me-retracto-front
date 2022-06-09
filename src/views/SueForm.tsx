import React, {useState} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultNavbar } from '../components/navbar/DefaultNavbar.tsx'
import { getTodo, getTodoAsync } from '../store/features/todoSlice.js'
import { postClaimAsync } from '../store/features/claims/claimsSlice'
import { useEffect } from 'react'


export const SueForm = () => {
  const {hola} = useSelector((state) => {
    return {
      hola: state.hola.data
    }
  })
  const dispatch = useDispatch<any>()

  const [newClaim, setNewClaim] = useState({
      id: "62a0203ab7ef665543db73f9",
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

  const getTodos = () => {
    dispatch(getTodoAsync("5"))
  }

  useEffect(() => {
  }, [])
  
  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('newClaim: ', newClaim)
    dispatch(postClaimAsync({claimFields: newClaim}));
  };

  return (
    <>
    <DefaultNavbar />
    <Row className="align-items-center justify-content-center">
      <Col lg={6} >
        <Form>
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setNewClaim({ ...newClaim, claimerEmail: e.target.value })}/>
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
        </Button>
        </Form>
      </Col>
    </Row>
    <Button onClick={getTodos}>
      get todos
    </Button>
    {hola.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </>
  )
}
