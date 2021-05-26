import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import styled from "styled-components";

const Greeting = styled.h1`
  color: rebeccapurple;
`;

const TestPage = () => <Greeting>Hello from playground</Greeting>;

const routes = [
  {
    path: "/",
    exact: true,
    component: TestPage,
  },
];

const App = () => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
