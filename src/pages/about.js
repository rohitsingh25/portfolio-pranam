import React from 'react'
import Copyright from '../components/copyright'
import aboutIMage from '../Images/demo9.jpg'
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaRedditSquare, } from 'react-icons/fa'
import { FaReact, FaAws, FaHtml5, FaSass, FaCss3Alt, FaBootstrap, FaGithub, FaNode } from "react-icons/fa";
import { SiJavascript, SiBulma, SiNetlify, SiJquery, SiMongodb } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

const About = () => {
    return (
        <>
            <div id="forColor">
                <div className="about-logo">
                    <img src="https://see.fontimg.com/api/renderfont4/4BEVW/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UHJhbmFtIGphaW4/blackpine.png" alt="logo" />
                </div>
                <div className="about-section">
                    <div className="about-header">
                        <img src={aboutIMage} alt="reload" />
                    </div>
                    <div id="div">
                        <h2>ABOUT ME</h2>
                        <p>When people talk about the stock markets making new highs, they are not really talking about the stock market as a whole. More often than not, they’re referring t When people talk about the stock markets making new highs, they are not really talking about the stock market as a whole. More often than not, they’re referring to the 30 or 50 stocks that serve as a benchmark to help people make sense of what’s happening. They’re talking about Nifty 50  happening. They’re talking about Nifty 50</p>
                        <ul>
                            <li><a href="http://www.linkedin.com/in/pranam-jain" target="_blank" rel="noopener noreferrer" ><FaLinkedin /></a></li>
                            <li><a href="https://www.instagram.com/pranam_1603" target="_blank" rel="noopener noreferrer" ><FaInstagramSquare /></a></li>
                            <li><a href="https://twitter.com/Pranamjain02" target="_blank" rel="noopener noreferrer" ><FaTwitterSquare /></a></li>
                            <li><a href="https://www.reddit.com/user/Pranamj" target="_blank" rel="noopener noreferrer" ><FaRedditSquare /></a></li>
                        </ul>
                        <div></div>
                    </div>
                </div>
                <div className="about-skills">
                    <h2 id="skills">MY SKILLS.</h2>
                    <span className="underLine"></span>
                    <ul className="about-lang">
                        <li><span><FaHtml5 /></span>HTML</li>
                        <li><span><FaCss3Alt /></span>CSS</li>
                        <li><span><SiJavascript /></span>JAVASCRIPT</li>
                        <li><span><FaReact /></span>REACT</li>
                        <li><span><FaBootstrap /></span>BOOTSTRAP</li>
                        <li><span><SiJquery /></span>jQUERY</li>
                    </ul>
                    <ul className="about-lang">
                        <li><span><FaGithub /></span>GITHUB</li>
                        <li><span><AiFillApi /></span>APIs</li>
                        <li><span><FaNode /></span>NODE.JS</li>
                        <li><span><SiMongodb /></span>MONGODB</li>
                        <li><span><SiNetlify /></span>NETLIFY</li>
                    </ul>
                    <ul className="about-lang">
                        <li><span><FaSass /></span>SASS</li>
                        <li><span><SiBulma /></span>BULMA</li>
                        <li><span><FaAws /></span>AWS</li>
                    </ul>
                </div>
                <div style={{ backgroundColor: '#f6f6f6' }}>
                    <div className="about-footer" style={{ backgroundColor: '#f6f6f6' }}>
                        <h3> SOME OF MY CLIENTS.</h3>
                        <div className="underlone"></div>
                        <div className="aboutImage-cont">
                            <img src="https://olcademy.com/images/olcademy-beta.png" alt="jkfnf" />
                            <img src="https://xp.io/storage/DjA2V3j.png" alt="jkfnf" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#3a3e3b' }} >
                <Copyright />
            </div>
        </>
    )
}

export default About
