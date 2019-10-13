import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={App} />
      </div>
    </Router>
  );
}
