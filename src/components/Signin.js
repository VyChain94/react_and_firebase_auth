import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/Context"

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signIn(email, password)
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
        <h2 className='text-center mb-4'>Sign In</h2>
        <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
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
            <Button className="w-100 mt-4" type="submit">Sign In</Button>
        </Form>
      </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  )
}
