import { Col, Container, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hero from './image/hero.svg';
import { Link } from "react-router-dom";
// import Home from "./Components/Home.js";


function Footer() {
  return (
    <div className="Footer">
      <div className="footer_main">
        <Container>
          <div className="abc">
            <div className="footer_start">
              <Row>
                <Col>
                  <div className="footer_one">
                    <img src={require('./image/sm-06.jpg')}></img>
                    <p>Be the first to know about new collections, special events, and what’s going on at Our Place. We are creative</p>
                    <div className="table">
                      <p>book a table</p>
                    </div>
                    <h1>888 999 000 11</h1>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="footer_start">
              <Row>
                <Col>
                  <div className="footer_two">
                    <div className="footer_image">
                      <div className="footer_icon">
                        <span></span>
                      </div>
                      <div className="footer_text">
                        <h1> get in touch</h1>
                      </div>
                    </div>

                    <div className="icon_one">
                      <div className="icons_one">
                        <div className="map">
                          <span><FaMapMarkerAlt></FaMapMarkerAlt></span>
                          <p>silk st,barbican,london e2y,Uk</p>
                        </div>
                      </div>
                      <div className="icons">
                        <div className="map">
                          <span><FaPhone></FaPhone></span>
                          <p>+39-055-123456</p>
                        </div>
                      </div>
                      <div className="icons">
                        <div className="map">
                          <span><IoIosMail></IoIosMail></span>
                          <p>booking@webexample.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="social_icon">
                      <div className="social_one">
                        <p><FaFacebookF></FaFacebookF></p>
                      </div>
                      <div className="social_one">
                        <p><FaTwitter></FaTwitter></p>
                      </div>
                      <div className="social_one">
                        <p><FaBehance></FaBehance></p>
                      </div>
                      <div className="social_one">
                        <p><FaYoutube></FaYoutube></p>
                      </div>
                      <div className="social_one">
                        <p><FaLinkedinIn></FaLinkedinIn></p>
                      </div>
                    </div>

                  </div>
                </Col>
              </Row>
            </div>
            <div className="footer_three">
              <Row>
                <Col>
                <div className="footer_two">
                    <div className="footer_image">
                      <div className="footer_icon">
                        <span></span>
                      </div>
                      <div className="footer_text">
                        <h1> pages</h1>
                      </div>
                    </div>
                    <div className="footer_menu">
                      <p>about us</p>
                      <p>our menu</p>
                      <p>our chef</p>
                      <p>reservation</p>
                      <p>contact us</p>
                    </div>
                  </div>                  
                </Col>
              </Row>
            </div>
            <div className="footer_four">
                  <div className="iamgesof">
                    <div className="iamgesos">
                        <img src={require('./image/sm-03.jpg')}></img> 
                        <img src={require('./image/sm-04.jpg')}></img>                    

                      </div>
                    <div className="iamgesoffooter">
                    <img src={require('./image/sm-04.jpg')}></img>  
                    <img src={require('./image/sm-03.jpg')}></img>                    


                    </div>
                    <div className="iamges_footer">
                        <img src={require('./image/sm-03.jpg')}></img>                    
                    <img src={require('./image/sm-04.jpg')}></img>                    

                      
                    </div>
                  </div>
            </div>
          </div>

        </Container>
      </div>
    </div>

  );
}
{/*                         
<Link to="/home">Home</Link>
<Link to="/pages">Pages</Link>
<Link to="/menus">Menus</Link>
<Link to="/shop">Shop</Link>
<Link to="/blog">Blog</Link> */}
export default Footer;
