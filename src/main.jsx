import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import GHClient from "./api/github";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={GHClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
);
