import React from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

import { routesConfig } from "./config";

type Props = {};

export const AppRoutes = (props: Props) => {
  return <BrowserRouter>{renderRoutes(routesConfig)}</BrowserRouter>;
};
