import React from "react";
import styled from "styled-components";

function Footer({className, children}) {
  return <footer className={className}>
    <a href="https://github.com/Falsin">Made by Falsin</a>
  </footer>
}

const StyledFooter = styled(Footer)`
  background: #282C33;
  padding: 20px;
  display: flex;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;
  }
`

export default StyledFooter;