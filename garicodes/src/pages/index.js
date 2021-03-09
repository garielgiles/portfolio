import * as React from "react";
import { css } from "@emotion/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from 'react-bootstrap/Image'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
  display: "inline",
  float: "right",
};

const listItemLogo = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
  display: "inline",
  float: "left",
  marginLeft: "10px",
  marginRight: "10px",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "20px",
  verticalAlign: "5%",
  listStyleType: "none",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
};

const imgList = {
  width: '100%',
  height:'100',
}

const logoList = {
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'spacebetween'
}

// Color Schemes
const navColor = {
  backgroundColor: "#ff4e4e"
};

const navText = {
  color: "#f2f3f4"
}

// Required Images
const reactLogo = require("../images/tech/react.png");
const nodeLogo = require("../images/tech/node.png");
const cssLogo = require("../images/tech/cssIMG.png");
const expLogo = require("../images/tech/express.png");
const bootLogo = require("../images/tech/bootstrap.png");
const gatsbyLogo = require("../images/tech/gatsby.png");
const htmlLogo = require("../images/tech/htmlIMG.png");
const mochaLogo = require("../images/tech/mocha.png");
const mongoLogo = require("../images/tech/mongo.png");
const seleniumLogo = require("../images/tech/selenium.png")

// markup
const IndexPage = () => {
  return (
    <html>
      <Navbar sticky="top" style={navColor} variant="light">
        <Navbar.Brand className="justify-content-start" href="#home">GARICODES</Navbar.Brand>
        <Nav className="justify-content-end" >
        <Nav.Item>
            <Nav.Link style={navText} href="#about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navText} href="#skills">
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navText} href="#exp">
              Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navText} href="#projects">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navText} href="#contact">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <main style={pageStyles}>
        <title>Gariel Giles</title>
        <h1 style={headingStyles}>
          Hey, you dropped by!
          <br />
          <span style={headingAccentStyles}>
            — Welcome to my crib! Take a tour and get to know me.{" "}
          </span>
          {/* <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span> */}
        </h1>
        <div id="about">
          <h2>Fun Facts</h2>
        </div>
        <div id="skills">
          <h2>Tech Stack</h2>
          <p style={paragraphStyles}>
            Here are technologies I have experience with:
          </p>
          <ul style={logoList}>
            <li><Image src={reactLogo} style={imgList} /></li>
            <li><Image src={nodeLogo} style={imgList} /></li>
            <li><Image src={expLogo} style={imgList} /></li>
            <li><Image src={htmlLogo} style={imgList} /></li>
            <li><Image src={cssLogo} style={imgList} /></li>
            <li><Image src={gatsbyLogo} style={imgList} /></li>
            <li><Image src={bootLogo} style={imgList} /></li>
            <li><Image src={mochaLogo} style={imgList} /></li>
            <li><Image src={mongoLogo} style={imgList} /></li>
            <li><Image src={seleniumLogo} style={imgList} /></li>
          </ul>
        </div>
        <div id="exp">
          <h2>Experience</h2>
          <Button href="../../src/Gariel_Giles_QAResume.PDF" size="lg">Resume</Button>
        </div>
        <div id="projects">
          <h2>Projects</h2>
        </div>
        <div id="contact">
          <h2>Contact</h2>
          <Button variant="danger">Red Danger</Button>
        </div>
      </main>
    </html>
  );
};

export default IndexPage;
