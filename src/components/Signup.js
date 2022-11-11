import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Context';



export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {createUser} = UserAuth()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try{
      await createUser(email, password)
      navigate("/survey")
    } catch (e) {
        setError(e.message)
        console.log(e.message)
    }
  }

  return (
    <div>
      <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Sign Up</h2>
        <div className='w-100 text-center mt-2 mb-3'>
        {/* login link will go here */}
        Already have an account? <Link to="/">Log In</Link>
      </div>

        <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
              {/* change state to the current value */}
            <Form.Control onChange={(e) => setEmail(e.target.value)} 
            type="email" required>
            </Form.Control>
        </Form.Group>
        <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)}
            type="password" required>
            </Form.Control>
        </Form.Group>
        <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)}
            type="password" required>
            </Form.Control>
        </Form.Group>
            <Button className="w-100 mt-4" type="submit">Sign Up</Button>
        </Form>
      </Card.Body>
      </Card>
    </div>
  )
}
