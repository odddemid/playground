import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      {renderRoutes([
        { path: "/", exact: true, component: () => <h1>Hello world</h1> },
      ])}
    </BrowserRouter>
  );
};
