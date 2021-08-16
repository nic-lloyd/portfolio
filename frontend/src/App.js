import logo from "./logo.svg";
import "./App.css";
import ReactTypingEffect from "react-typing-effect";
import { Card, Button, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant='top' src='https://avatars.githubusercontent.com/u/61630547?v=4'/>
            <Card.Title>Nicolas Lloyd</Card.Title>
            <Card.Text>Web Dev Extraordinaire</Card.Text>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
