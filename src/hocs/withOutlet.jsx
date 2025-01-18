import { Outlet } from "react-router";
import { Link, useMatches } from "react-router-dom";

const withOutlet = (Component, pathId) => {
  const ExtendedComponent = (props) => {
    const matches = useMatches();
    const lastMatch = matches[matches.length - 1];

    if (lastMatch.id === pathId) {
      return <Component {...props} />;
    }

    return <Outlet />;
  };

  return ExtendedComponent;
};

export default withOutlet;
