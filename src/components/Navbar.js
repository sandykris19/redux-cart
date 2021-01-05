import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state);
  let counts = {};
  for (let i = 0; i < state.cart.length; i++) {
    let iname = state.cart[i].name;
    counts[iname] = counts[iname] ? counts[iname] + 1 : 1;
  }
  return (
    <div className="container my-2" style={{ width: "600px" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item_no</th>
            <th scope="col">Item_name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(counts).map((i, index) => {
            let id = state.cart.findIndex((ik) => ik.name === i);
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{i}</td>
                <td>x {counts[i]}</td>
                <td>Rs. {state.cart[id].price * counts[i]}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total: {state.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Navbar;
