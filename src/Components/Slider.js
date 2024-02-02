import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

// import Home from "./Components/Home";


function Slider() {
    return (

      <div className="app">
        <div className="s_one">
            <Container className="one">
                <Row>
                    <Col>
                    <div className="Slider">
                        <img src={require('./image/bg-4.webp')}></img> 
                        <img src={require('./image/03.webp')}></img>
                    </div>
                    </Col>
                </Row>
             </Container> 
        </div>

      </div>
    );
  }
  
  export default Slider;