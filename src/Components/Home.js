import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Heder";
import Footer from "./Footer";
import Discount from "./Discount";
import Carousel from 'react-bootstrap/Carousel';

// import Home from "./Components/Home";


function Home() {
  return (
    <div className="w_app">
      <Header>
      </Header>
      {/* start slider */}
      <div className="slider">

        <div class="img_5">
          <div class="letter"></div>
          <div className="images_slider">
            <div className="images_l">
              
              <img src={require('./image/02.webp')} className="logo"></img>
              <img src={require('./image/03.webp')}></img>

            </div>

          </div>

        </div>
      </div>


      <Discount>
      </Discount>

      {/* start enjoyfirst */}
      <div className="enjoy_first">
        <div className="enjoy_karo">
          <div className="enjoy_main">
            <img src={require('./image/07.webp')}></img>
          </div>
          <div className="enjoy_maintext">
            <div className="main">
            

                    <h1>enjoy authentic</h1>
                    <p>delicious burger</p>
                    <div className="imagesofenjoy">
                      <div className="images_enjoy">
                        <img src={require('./image/sm-09.webp')}></img>
                      </div>
                      <div className="text_enjoy">
                        <h2>fresh oysters dozen</h2>
                        <h3>Beetroot And Datterini, Goat Cheese, Ricotta</h3>
                      </div>
                    </div>
                    <div className="imagesofenjoy">
                      <div className="images_enjoy">
                        <img src={require('./image/sm-10.webp')}></img>
                      </div>
                      <div className="text_enjoy">
                        <h2>fresh oysters dozen</h2>
                        <h3>Beetroot And Datterini, Goat Cheese, Ricotta</h3>
                      </div>
                    </div>
                    <div className="imagesofenjoy">
                      <div className="images_enjoy">
                        <img src={require('./image/sm-11.webp')}></img>
                      </div>
                      <div className="text_enjoy">
                        <h2>fresh oysters dozen</h2>
                        <h3>Beetroot And Datterini, Goat Cheese, Ricotta</h3>
                      </div>
                    </div>
                  
        
            </div>
          </div>
        </div>
      </div>
      {/* end enjoyfirst */}




      {/* start enjoy */}
      <div className="two_cap">
        <div className="two">
          <div className="two_texts">
            <Container>
              <Col>
                <Row>
                  <h1>the best burger place</h1>
                  <span>in marlin city.</span>
                  <p>Sed metus a neque sociosqu odio dapibus portass ultricies bindum dictum semper dui. Diam habitasse justo neque purus curabitur iaculis vivamus sed, pulvinar donec tincidunt tellus nulla feugiat gravida tempor</p>
                  <button>make an order now</button>
                </Row>
              </Col>
            </Container>
          </div>
          <div className="two_images">
            <img src={require('./image/08.webp')}></img>
          </div>
        </div>
      </div>
      {/* end enjoy */}




      {/* start members */}
      <div className="memebers">
        <div class="img_4">
          <div class="letter"></div>
          <div className="member_shape">
            <div className="m_shape">
              <span></span>
              <h1>10</h1>
              <p>awards won</p>
            </div>
            <div className="m_shape">
              <span></span>
              <h1>5k</h1>
              <p>Members</p>
            </div>
            <div className="m_shape">
              <span></span>
              <h1>99</h1>
              <p>Members</p>
            </div>
            <div className="m_shape">
              <span></span>
              <h1>100</h1>
              <p>Menu & Dish</p>
            </div>
            <div className="m_shape">
              <span></span>
              <h1>25</h1>
              <p>Specialities</p>
            </div>
          </div>
        </div>
      </div>
      {/* end members */}

      {/* start blog */}
      <div className="start_blog">
        <div className="blog">
          <Container>
            <Row>
              <Col>
                <div className="blogkatext">
                  <h1>blog & insights</h1>
                  <p>It’s the story of an everlasting love affair, Dieter Delicioz and the
                    Atlantic Ocean in the big air.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="blog_gallery">
          <Container>
            <Row>
              <Col>
                <div className="blog_galleryone">
                  <div className="vlog_one">
                    <img src={require('./image/blog-01.jpg')}></img>
                    <p>fastfood</p>
                    <h1>Love and food: It is all about dinenos restaurant</h1>
                  </div>
                  <div className="vlog_one">
                    <img src={require('./image/blog-03.jpg')}></img>
                    <p>DINNER</p>
                    <h1>Enjoy an exceptional journey of taste of joy.</h1>
                  </div>
                  <div className="vlog_one">
                    <img src={require('./image/blog-04.jpg')}></img>
                    <p>restaurant</p>
                    <h1>The opportunity to work abroad is a prospect, one</h1>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* end blog */}




      {/* start logo */}
      <div className="logo_img">
        <Container>
          <Row>
            <Col>
              <div className="logoesofbottom">
                <div className="logoes">
                  <img src={require('./image/01.png')}></img>
                </div>
                <div className="logoes">
                  <img src={require('./image/02.png')}></img>
                </div>
                <div className="logoes">
                  <img src={require('./image/03.png')}></img>
                </div>
                <div className="logoes">
                  <img src={require('./image/04.png')}></img>
                </div>
                <div className="logoes">
                  <img src={require('./image/05.png')}></img>
                </div>
              </div>

            </Col>
          </Row>
        </Container>

      </div>
      {/* end logo */}





      <div className="line">
        <div className="line_img">
          {/* <img src={require('./image/line.svg')}></img> */}
        </div>
      </div>
      {/* start 4 image */}
      <div className="footer_portion">
        <div className="footerp_img">
          <div className="imagesofbottom">
            <img src={require('./image/gallery-img-05.webp')}></img>
          </div>
          <div className="imagesofbottom">
            <img src={require('./image/gallery-img-06.webp')}></img>
          </div>
          <div className="imagesofbottom">
            <img src={require('./image/gallery-img-07.webp')}></img>
          </div>
          <div className="imagesofbottom">
            <img src={require('./image/gallery-img-08.webp')}></img>
          </div>
        </div>
      </div>
      {/* end 4 logo */}
      <Footer>
      </Footer>
    </div>
  );
}

export default Home;