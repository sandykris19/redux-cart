import React from "react";
import ReactDOM from "react-dom";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <div className="container">
        <Cart />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
