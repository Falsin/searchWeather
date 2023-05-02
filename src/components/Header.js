import React from "react";
import styled from "styled-components";

function Header({className, children}) {
  return <header  className={className}>
    <h1>Weather Search</h1>
  </header>
}

const styledHeader = styled(Header)`
  background: #282C33;
  color: white;
  padding: 20px;

`
export default styledHeader;