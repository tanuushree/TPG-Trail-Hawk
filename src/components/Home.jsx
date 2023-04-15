import "../styles.css"
import logo from "../assets/logo.jpg"
// import icon1 from "../assets/icon1.jpg"
import { Icon } from '@iconify/react';
import vector from "../assets/Vector.jpg"
import {Link} from "react-router-dom"

function Home() {

    return (
        <>
            <div className="navbar">
                <a href="#" ><img className="logo" src={logo} alt="logo" width="50" height="50" /></a>
                <p className="name">Trail Hawk!</p>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Work Process</a>
                    <a href="#">Contact</a>
                    <a href="#"><button className="pill" type="button"><strong><p><i className="fa fa-angle-down fa-lg"></i>  EN</p></strong></button></a>
                    <a href="#"><i className="fa fa-fw fa-bell-o fa-lg"></i></a>
                </nav>
            </div>

            <div className="welcome-area" id="welcome">

       
        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <h1>Your Security!<br/>
                            All in your control<br/>All we do is secure it.</h1>
                            <Link to="/login"><button className=" btn btn-success text-light">Connect your Wallet</button></Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
        

        <section className="section home-feature">
        <div className="container">
            {/* <div className="row"> */}
                <div className="col-lg-12">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 cards" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s" style={{minHeight: "300px"}}>
                            <div className="features-small-item">
                                <div className="icon">
                                <Icon icon="material-symbols:device-hub-rounded" width={"80px"} style={{color: "white"}}/>
                                </div>
                                <h5 className="features-title">What is Trail Hawk</h5>
                                <p>A decentralised ledger to share your data with your trusted [people]

                                    A platform to help you easy transition from web2 to web3.

                                    </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div className="features-small-item">
                                <div class="icon">
                                <Icon icon="material-symbols:device-unknown" width={"80px"} style={{color: "white"}}/>
                                </div>
                                <h5 className="features-title">Features we offer</h5>
                                <p>Encrypt sensitive date, like location, date, time. Share that data with [people] who are contract bounded under Lens Protocol.

                                    Receive update notifications with Push Notification</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div className="features-small-item">
                                <div className="icon">
                                <Icon icon="ic:outline-featured-play-list" width={"80px"} style={{color: "white"}}/>
                                </div>
                                <h5 className="features-title">Protocols we use</h5>
                                <p>TrailHawk has been layered with [existing] protocols in the decentrailized ecosystem.<br/>

                                    {">"}Lit protocol for encryption & decryption of your data. <br/>
                                    {">"}Biconomy for gasless transactions <br/>
                                    {">"}Web3.storage for storing user data.<br/>
                                    {">"}Polygon for deploying our smart contract.
                                    </p>
                            </div>
                        </div>

                    </div>
                </div>
            {/* </div> */}
        </div>
    </section>

    <section className="section padding-top-70 padding-bottom-0" id="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={vector} className="rounded img-fluid d-block mx-auto" alt="App" />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                    <div className="left-heading">
                        <h2 className="section-title">Heading 1</h2>
                    </div>
                    <div className="left-text">
                        <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="hr"></div>
                </div>
            </div>
        </div>
    </section>


    <section className="section padding-bottom-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                    <div className="left-heading">
                        <h2 className="section-title">Heading 2</h2>
                    </div>
                    <div className="left-text">
                        <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src={vector} className="rounded img-fluid d-block mx-auto" alt="App" />
                </div>
            </div>
        </div>
    </section>


    <section class="section padding-top-70 padding-bottom-0" id="features">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={vector} class="rounded img-fluid d-block mx-auto" alt="App" />
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                    <div class="left-heading">
                        <h2 class="section-title">Heading 3</h2>
                    </div>
                    <div class="left-text">
                        <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </section>
        </>

    )
}

export default Home