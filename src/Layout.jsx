import { Outlet, Link } from "react-router-dom";

import Breadcrumbs from "./components/Breadcrumbs";

export default function Layout() {
  return (
    <div>
      <Breadcrumbs />
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <header>
            <nav style={{ textAlign: "left" }}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
                <li>
                  <Link to="/electronics/mobile-phones">Mobile Phones</Link>
                  <ul>
                    <li>
                      <Link to="/electronics/mobile-phones/Apple iPhone">
                        Apple iPhone
                      </Link>
                    </li>
                    <li>
                      <Link to="/electronics/mobile-phones/Samsumg">
                        Samsumg
                      </Link>
                    </li>
                    <li>
                      <Link to="/electronics/mobile-phones/Google Pixel 3">
                        Google Pixel 3
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
