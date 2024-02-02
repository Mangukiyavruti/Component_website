import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";

// import Home from "./Components/Home";


function Discount() {
    return (
      <div className="discount">
          <Container>
            <Row>
              <Col>
                <div className="disc_box">
              <div className="Boxes">
                  <div className="box">
                    
                    <div className="text_s">
                      <h1>special zambo burger</h1>
                      <p>get 20% flat discount on this week</p>
                      <a href="#">make an order</a>
                    </div>
                    <div className="images">
                      <img src={require('./image/burger-1.webp')}></img>
                    </div>
                  </div>
              </div>
              <div className="box">
                    
                    <div className="text_s">
                      <h1>special zambo burger</h1>
                      <p>get 20% flat discount on this week</p>
                      <a href="#">make an order</a>
                    </div>
                    <div className="images">
                      <img src={require('./image/burger-1.webp')}></img>
                    </div>
                  </div>
                  <div className="box">
                    
                    <div className="text_s">
                      <h1>special zambo burger</h1>
                      <p>get 20% flat discount on this week</p>
                      <a href="#">make an order</a>
                    </div>
                    <div className="images">
                      <img src={require('./image/burger-1.webp')}></img>
                    </div>
                  </div>
                  </div>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Discount;