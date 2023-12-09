import svgImage from './assets/react.svg'
import './App.css'
import { FaFacebook, FaLinkedin  } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card } from 'react-bootstrap';

function App() {

  return (
    <>
      <h1>Reac Icon</h1>
      {/* <FaFacebook className='icon'/> */}
      {/* <FaLinkedin className='icon' /> */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={svgImage} />
      <Card.Body>
        <Card.Title className='text-danger'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default App
