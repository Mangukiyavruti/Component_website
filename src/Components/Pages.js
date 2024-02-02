import { Col, Container, Row } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "./Heder";
import Footer from "./Footer";






function Pages() {
    return (
        <>
        <Header>
            
        </Header>
            <div className="page">
                <Row>
                    <Col>
                        <div className="page_image">
                            <div class="img_2">
                                <div class="letter"></div>
                                <div className="text">
                                    <span className="shape"></span>
                                    <span className="shape"></span>
                                    <span className="shape"></span>
                                    <p className="p_text">products</p>
                                </div>
                                <h1 className="p_h1">our menus</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="cheaf">
                <Container>
                    <Row>
                        <Col>
                            <div className="chef_detail">
                                <div className="chef_image">
                                    <img src={require('./image/01-big.webp')}></img>
                                </div>
                                <div className="chef_text">
                                    <h1>alice capsey</h1>
                                    <p>
                                        A restaurant is a business that prepares and serves food and drinks to customers meals are generally.
                                    </p>
                                    <div className="icon">
                                        <div className="icons">
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
                                        <div className="social">
                                            <p><FaFacebookF></FaFacebookF></p>
                                        </div>
                                        <div className="social">
                                            <p><FaTwitter></FaTwitter></p>
                                        </div>
                                        <div className="social">
                                            <p><FaBehance></FaBehance></p>
                                        </div>
                                        <div className="social">
                                            <p><FaYoutube></FaYoutube></p>
                                        </div>
                                        <div className="social">
                                            <p><FaLinkedinIn></FaLinkedinIn></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer>
                
            </Footer>
        </>

    );

}

export default Pages;