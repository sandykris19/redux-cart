import React from "react";
import ReactDOM from "react-dom";
import NewCart from "./components/NewCart";
import { Provider } from "react-redux";
import { store } from "./components/redux/newEcom";
import Inventory from "./components/Inventory";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container my-2">
          <Router>
            <div style={{ width: "200px" }}>
              <nav className="d-flex">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <Link to="/">Shop</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/inventory">Inventory</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/cart">
                  <Navbar />
                </Route>
                <Route path="/inventory">
                  <Inventory />
                </Route>
                <Route path="/">
                  <NewCart />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
