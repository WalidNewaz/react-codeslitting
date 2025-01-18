import { Link, useMatches } from "react-router-dom";

import "./breadcrumbs.css";

export default function Breadcrumbs() {
  const matches = useMatches();
  // console.log("matches", matches);
  const filteredMatches = matches.filter((match) => match?.handle?.breadcrumb);
  return (
    <nav aria-label="breadcrumb" id="breadcrumb">
      <ol>
        {filteredMatches.map((match, index) => {
          return (
            <li key={index}>
              {index < filteredMatches.length - 1 ? (
                <Link to={match.pathname}>{match?.handle?.breadcrumb}</Link>
              ) : (
                <span>{match?.handle?.breadcrumb}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
