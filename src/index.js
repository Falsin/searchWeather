import React from "react";
import { createRoot } from 'react-dom/client';
import StyledHeader from "./components/Header";
import StyledFooter from "./components/Footer";
import StyledMainContent from "./components/MainContent";

import "./style/style.css"

function App(params) {
  return <>
    <StyledHeader />
    <StyledMainContent />
    <StyledFooter />
  </>
}

const root = createRoot(document.getElementById("root"));
root.render(<App />)