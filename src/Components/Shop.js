import { Col, Container, Row } from "react-bootstrap";
import Header from "./Heder";
import Footer from "./Footer";

function Shop() {
    return (
        <>
        <Header>
            
        </Header>
            <div className="shop">
                <Row>
                    <Col>
                        <div className="shop_image">
                            <div class="img_1">
                                <div class="letter"></div>
                                <div className="text">
                                    <span className="shape"></span>
                                    <span className="shape"></span>
                                    <span className="shape"></span>
                                    <p className="p_text">products</p>
                                </div>
                                <h1 className="p_h1">our menus</h1>
                            </div>

                            <div className="shooping_text">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="t_flex">
                                                <div className="shop_text">
                                                    <p>showing 1-6 of 8 results</p>
                                                </div>
                                                <div className="selecter">
                                                    <select class="from-control">
                                                        <option>Default sorting</option>
                                                        <option>Sort by popularity</option>
                                                        <option>Sort by average rating</option>
                                                        <option>Sort by lates</option>
                                                        <option>Sort by price: low to high</option>
                                                        <option>Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            <div className="shopping_img">
                                <Container>
                                    <Row>
                                        <div className="s_flex">

                                            <Col lg={4}>
                                                <div className="cart">
                                                    <div className="six_image">
                                                        <img src={require('./image/02.jpg')}></img>
                                                    </div>
                                                    <div className="content">
                                                        <p>Chicha Morada</p>
                                                        <p className="price">$33.00</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="cart">
                                                    <div className="six_image">
                                                        <img src={require('./image/04.jpg')}></img>
                                                    </div>
                                                    <div className="content">
                                                        <p>Chicha Morada</p>
                                                        <p className="price">$33.00</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="cart">
                                                    <div className="six_image">
                                                        <img src={require('./image/03.jpg')}></img>
                                                    </div>
                                                    <div className="content">
                                                        <p>Chicha Morada</p>
                                                        <p className="price">$33.00</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="s_flex">
                                            <Col lg={4}>
                                                <div className="cart">
                                                    <div className="six_image">
                                                        <img src={require('./image/06.jpg')}></img>
                                                    </div>
                                                    <div className="content">
                                                        <p>Chicha Morada</p>
                                                        <p className="price">$33.00</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg={4}>
                                                <div className="cart">
                                                    <div className="six_image">
                                                        <img src={require('./image/04.jpg')}></img>
                                                    </div>
                                                    <div className="content">
                                                        <p>Chicha Morada</p>
                                                        <p className="price">$33.00</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="cart">
                                                    <div className="six_image">
                                                        <img src={require('./image/06.jpg')}></img>
                                                    </div>
                                                    <div className="content">
                                                        <p>Chicha Morada</p>
                                                        <p className="price">$33.00</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer>
                
            </Footer>
        </>


    );
}

export default Shop;