import React from "react";
import { createRoot } from 'react-dom/client';

function Test(params) {
  return <div>This is a test drive!!!</div>
}

const root = createRoot(document.getElementById("root"));
root.render(<Test />)