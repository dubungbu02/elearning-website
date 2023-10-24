import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App";
import GlobalStyles from "~/Components/admin/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>
);
