import { Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";



import Header from "./Heder";
import Footer from "./Footer";

function Blog() {
    return (
        <>
            <Header>

            </Header>

            <div className="blog_one">

                <div className="blog_image">
                    <div class="img_3">
                        <div class="letter"></div>
                        <div className="text">
                            <span className="shape"></span>
                            <span className="shape"></span>
                            <span className="shape"></span>
                            <p className="p_text">blog&feed</p>
                        </div>
                        <h1 className="p_h1">our menus</h1>
                    </div>
                </div>
                <div className="blog_images">
                    <Container>
                        <div className="bloges">
                            <div className="image_b">
                                <img src={require('./image/blog-03-1.webp')}></img>
                            </div>
                            <div className="main_serach">
                                <div className="search">
                                    <div className="serach_h1">
                                        <h1>search here</h1>
                                    </div>
                                    <div className="search_p">
                                        enter keyword
                                        <span><FaSearch></FaSearch></span>
                                    </div>
                                </div>
                                <div className="search_1">
                                    <div className="serach_h1">
                                        <h1>categories</h1>
                                    </div>
                                    <div className="search_p1">
                                        bussiness solution
                                        <span><FaArrowRight></FaArrowRight></span>

                                    </div>
                                    <div className="search_p1">
                                        strategy growth
                                        <span><FaArrowRight></FaArrowRight></span>

                                    </div>
                                    <div className="search_p1">
                                        finanae solution
                                        <span><FaArrowRight></FaArrowRight></span>

                                    </div>
                                    <div className="search_p1">
                                        investment policy
                                        <span><FaArrowRight></FaArrowRight></span>

                                    </div>
                                    <div className="search_p1">
                                        tax managment
                                        <span><FaArrowRight></FaArrowRight></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="read">
                           <div className="read_caption">
                                <h1>Building smart business solution for you</h1>
                                <p>Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services</p>
                                <button>read details</button>
                            </div>
                        </div>

                        <div className="two_blog">
                            <div className="two_blogimg">
                                <img src={require('./image/blog-02-1.jpg')}></img>
                            </div>
                            <div className="twoblog_text">
                                <div className="texts">
                                    <h1>recent posts</h1>
                                    <div className="imagesof">
                                        <div className="image">
                                            <img src={require('./image/blog-sm-01.jpg')}></img>
                                        </div>
                                        <div className="images_text">
                                            <div className="image_flex">
                                                <span><CiStopwatch></CiStopwatch>15,jan 2023</span>
                                                <p>We would love to share a similar experience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="imagesof">
                                        <div className="image">
                                            <img src={require('./image/blog-sm-01.jpg')}></img>
                                        </div>
                                        <div className="images_text">
                                            <div className="image_flex">
                                                <span><CiStopwatch></CiStopwatch>15,jan 2023</span>
                                                <p>We would love to share a similar experience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="imagesof">
                                        <div className="image">
                                            <img src={require('./image/blog-sm-01.jpg')}></img>
                                        </div>
                                        <div className="images_text">
                                            <div className="image_flex">
                                                <span><CiStopwatch></CiStopwatch>15,jan 2023</span>
                                                <p>We would love to share a similar experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="read">
                           <div className="blog_caption">
                                <h1>Building smart business solution for you</h1>
                                <p>Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services</p>
                                <button>read details</button>
                            </div>
                        </div>

                        <div className="two_blog">
                            <div className="three_blogimg">
                                <img src={require('./image/blog-03-1.webp')}></img>
                            </div>
                        </div>
                        <div className="read">
                           <div className="blog_caption_two">
                                <h1>Building smart business solution for you</h1>
                                <p>Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services</p>
                                <button>read details</button>
                            </div>
                        </div>
                       </Container>
                </div>
            </div>
            <Footer>
                
            </Footer>
        </>
    );
}


export default Blog;