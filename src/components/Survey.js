import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Context';

//why did use an expression instead of a declaration?
const Account = () => {
  // our references inside of context
  const {user, logOut} = UserAuth()

  const navigate = useNavigate()


  const handleLogOut = async () => {
    try {
      await logOut
      navigate("/")
      console.log("You are logged out")
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="AI ON PHONE GIF.webp" />
      <Card.Body>
        <Card.Title>Account</Card.Title>
        <Card.Text>
          Welcome back {user && user.email}
        </Card.Text>
        <Button onClick={handleLogOut} variant="primary">Logout</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Account