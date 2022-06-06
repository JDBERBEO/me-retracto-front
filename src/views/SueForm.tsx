import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultNavbar } from '../components/navbar/DefaultNavbar.tsx'
import { getTodo, getTodoAsync } from '../store/features/todoSlice.js'


export const SueForm = () => {
  const {hola} = useSelector((state) => {
    return {
      hola: state.hola.data
    }
  })
  console.log('todo: ', hola)
  const dispatch = useDispatch<any>()
  const getTodos = () => {
    dispatch(getTodoAsync("5"))
  }

  return (
    <>
    <DefaultNavbar />
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
    <Button onClick={getTodos}>
      get todos
    </Button>
    {hola.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    {/* {hola.map((h, i) => {
    return <div key={i}>
      <p>todo: {h}</p>
    </div>
    })} */}
    </>
  )
}
