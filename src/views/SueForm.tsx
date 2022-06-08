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
      claimerName: "",
  });

  const getTodos = () => {
    dispatch(getTodoAsync("5"))
  }

  useEffect(() => {
  }, [])
  
  const handleOnClick = (e) => {
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre del prestador o prestadores de servicios turísticos </Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fecha de la reclamación directa * </Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>NOMBRE HPPP*</Form.Label>
          <Form.Control type="text" onChange={(e) => setNewClaim({ ...newClaim, claimerName: e.target.value })}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>NÚMERO DE IDENTIFICACIÓN *</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>CELULAR*</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>DOMICILIO</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>TIPO DE BIEN O SERVICIO </Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>VALOR EN PESOS </Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>HECHOS</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>TIPO DE RECLAMACIÓN</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>PETICIÓN</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>AÑADIR ARCHIVOS</Form.Label>
          <Form.Control type="text"/>
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
