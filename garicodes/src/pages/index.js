import * as React from "react";
import { css } from "@emotion/react"

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
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
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
  marginLeft: "10px",
  marginRight: "10px"
};

const listItemLogo = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
  display: "inline",
  float: "left",
  marginLeft: "10px",
  marginRight: "10px"
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

// markup
const IndexPage = () => {
  return (
    <html>
      <nav style={{paddingTop: "0px"}}>
        <ul style={listStyles}>
          <li style={listItemStyles}><a>Reach Me</a></li>
          <li style={listItemStyles}><a>Projects</a></li>
          <li style={listItemStyles}><a>Experience</a></li>
          <li style={listItemStyles}><a href="#skills" style={linkStyle}>Skills</a></li>
          <li style={listItemLogo}>Logo</li>
        </ul>
      </nav>
      <main style={pageStyles}>
        <title>Gariel Giles</title>
        <h1 style={headingStyles}>
          Hey, you dropped by!
          <br />
          <span style={headingAccentStyles}>
            — Welcome to my crib! Take a tour and get to know me.{" "}
          </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <div id="skills">
          <h2>Tech Stack</h2>
          <p style={paragraphStyles}>Here are technologies I have experience with:</p>
        </div>
       
      </main>
    </html>
  );
};

export default IndexPage;
