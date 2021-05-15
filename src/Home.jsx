import React from 'react';
import './Home.css';
import Header from './Header';
import LeftArrow from './icons/339066-arrows/339066-arrows/svg/093-right-arrow-4.svg';
import Service1 from './icons/3522146-smart-home/3522146-smart-home/svg/050-smart-tv.svg';
import Service2 from './icons/3522146-smart-home/3522146-smart-home/svg/014-fingerprint.svg';
import Service3 from './icons/3522146-smart-home/3522146-smart-home/svg/019-plug.svg';
import Service4 from './icons/3522146-smart-home/3522146-smart-home/svg/028-faucet.svg';
import Service5 from './icons/3522146-smart-home/3522146-smart-home/svg/smartphone.svg';
import Service6 from './icons/3522146-smart-home/3522146-smart-home/svg/039-smart-house.svg';
import Service7 from './icons/603152-database-and-servers/603152-database-and-servers/svg/006-api.svg';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

function Home() {
    return (
        <div className='home'>
            <div className="home-cont-bg">
                <Header/>

                <div className="home-bg-text-cont">
                    <div className="home-bg-text">
                        <h1>Smart home installation <br/> made simple</h1>
                        <p>The best technicians in the area.</p>
                        <button>Book a Service</button>
                    </div>
                </div>
            </div>

            <div className="jumbotron">
                <div className="jumbotron-cont">
                    <h1>Home Owner?</h1>
                    <p>Get complete peace of mind with SmartHub</p>
                    <Link>
                        <img className='jumbo-arrow' src={LeftArrow} alt="" srcset=""/>
                    </Link>
                    
                </div>
            </div>
            
            <div className="home-info">
                <div className="services-cont">
                    <div className="services">
                        <img src={Service1} alt=""/>
                        <h3>Tv <br/> Mounting</h3>
                    </div>

                    <div className="services">
                        <img src={Service2} alt=""/>
                        <h3>Disinfection <br/> Services</h3>
                    </div>

                    <div className="services">
                        <img src={Service3} alt=""/>
                        <h3>Home <br/> Appliances</h3>
                    </div>

                    <div className="services">
                        <img src={Service4} alt=""/>
                        <h3>Handyman <br/> Services</h3>
                    </div>

                    <div className="services">
                        <img src={Service5} alt=""/>
                        <h3>Iphone <br/> Repair</h3>
                    </div>

                    <div className="services">
                        <img src={Service6} alt=""/>
                        <h3>SmartHome <br/> Installation</h3>
                    </div>

                    <div className="services">
                        <img src={Service7} alt=""/>
                        <h3>Web <br/> Development</h3>
                    </div>
                </div>
                <div className="">
                        
                </div>
            </div>
        </div>
    )
}

export default Home
