import * as React from "react";
import { css } from "@emotion/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'

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
  // width: '100%',
  minWidth: "90px",
  maxWidth: "100px",
  // paddingRight: '10%'
};

const logoList = {
  listStyleType: "none",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

// Color Schemes
const navColor = {
  // backgroundColor: "#ff4e4e"
  backgroundColor: "#ffffff",
};

const navText = {
  // color: "#f2f3f4"
  color: "#232129",
};

// Required Images
const reactLogo = require("../images/tech/react.png");
const nodeLogo = require("../images/tech/node.png");
const jsLogo = require("../images/tech/js.png");
const cssLogo = require("../images/tech/cssIMG.png");
const expLogo = require("../images/tech/express.png");
const bootLogo = require("../images/tech/bootstrap.png");
const gatsbyLogo = require("../images/tech/gatsby.png");
const htmlLogo = require("../images/tech/htmlIMG.png");
const mochaLogo = require("../images/tech/mocha.png");
const mongoLogo = require("../images/tech/mongo.png");
const seleniumLogo = require("../images/tech/selenium.png");

const grail = require("../images/projects/grailcollect.png");
const superWiki = require("../images/projects/superwiki.png");
const rm = require("../images/projects/rm.png");

// markup
const IndexPage = () => {
  return (
    <html>
      <Navbar sticky="top" style={navColor} variant="light">
        <Navbar.Brand href="#home">
          GARICODES
        </Navbar.Brand>
        <Nav className="justify-content-end">
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
          {/* style={{background: "lightblue", position: 'relative', left: '0%', right: '0%'}} */}
          <h2>Tech Stack</h2>
          <p style={paragraphStyles}>
            Here are technologies I have experience with:
          </p>
          <ul style={logoList}>
            <li>
              <Image src={reactLogo} style={imgList} />
            </li>
            <li>
              <Image src={nodeLogo} style={imgList} />
            </li>
            <li>
              <Image src={htmlLogo} style={imgList} />
            </li>
            <li>
              <Image src={cssLogo} style={imgList} />
            </li>
            <li>
              <Image src={jsLogo} style={imgList} />
            </li>
            <li>
              <Image src={bootLogo} style={imgList} />
            </li>
            <li>
              <Image src={gatsbyLogo} style={imgList} />
            </li>
            <li>
              <Image src={mochaLogo} style={imgList} />
            </li>
            <li>
              <Image src={expLogo} style={imgList} />
            </li>
            <li>
              <Image src={seleniumLogo} style={imgList} />
            </li>
            <li>
              <Image src={mongoLogo} style={imgList} />
            </li>
          </ul>
        </div>
        <div id="exp">
          <h2>Experience</h2>
          <Button
            href="https://drive.google.com/file/d/1Oa6Z7I-u9VE52yrh62SMyqz3toVv5jEm/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Button>
          {/* <iframe src="https://drive.google.com/file/d/1Oa6Z7I-u9VE52yrh62SMyqz3toVv5jEm/view?usp=sharing" width="500" height="720"/> */}
        </div>
        <div id="projects">
          <h2>Projects</h2>
          <div>
            <CardDeck>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={grail} />
            <Card.Body>
              <Card.Title>Grail Collect</Card.Title>
              <Card.Text>
                User can add their personal sneaker portfolio with current
                resale prices to keep track of the value of their collection.
              </Card.Text>
              <Button
                href="https://grail-collect.herokuapp.com/"
                variant="primary" size="sm"
              >
                Site
              </Button>{' '}
              <Button
                href="https://github.com/garicodes/grail-collect"
                variant="primary" size="sm"
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={superWiki} />
            <Card.Body>
              <Card.Title>SuperWiki</Card.Title>
              <Card.Text>
                The SuperWiki is a database of everything Marvel that lets users
                build an online collection of their favorites comics.
              </Card.Text>
              <Button
                href="https://superwiki.herokuapp.com/"
                variant="primary" size="sm"
              >
                Site
              </Button>{' '}
              <Button
                href="https://github.com/devkenney/arete-project-3-frontend"
                variant="primary"
                size="sm"
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={rm} />
            <Card.Body>
              <Card.Title>Rick and Morty App</Card.Title>
              <Card.Text>
                The purpose of this site is to allow users to keep up with all
                characters to be created on the hit show, Rick and Morty. Users
                can also add new characters as the show progresses.
              </Card.Text>
              <Button
                href="https://rick-and-mortyapp.herokuapp.com/"
                variant="primary" size="sm"
              >
                Site
              </Button>{' '}
              <Button
                href="https://github.com/garicodes/project_4_client"
                variant="primary"
                size="sm"
              >
                GitHub
              </Button>
            </Card.Body>
          </Card>
          </CardDeck>
          </div>
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
