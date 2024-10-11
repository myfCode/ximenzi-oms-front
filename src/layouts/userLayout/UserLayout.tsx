import React from "react";
import { Redirect } from "react-router";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

export const UserLayout = (props: RouteConfigComponentProps) => {
  const { route, location, match } = props;
  console.log(" UserLayout : ", props);

  if (!route) {
    return <Redirect to={"/"} />;
  }

  return (
    <div>
      <p>UserLayout</p>
      {renderRoutes(route!.routes)}
    </div>
  );
};
