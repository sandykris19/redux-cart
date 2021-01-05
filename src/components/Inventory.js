import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToInventory } from "./redux/newEcom";

const Inventory = () => {
  const [item, setItem] = useState({ name: "", qty: 0, price: 0 });
  const state = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container my-4" style={{ width: "600px" }}>
        <div className="d-flex justify-content-around my-2 form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Item-name to Add"
            style={{ width: "300px" }}
            onChange={(e) => {
              setItem({ ...item, name: e.target.value });
            }}
          />
          <input
            type="text"
            className="form-control"
            style={{ width: "100px" }}
            placeholder="Price"
            onChange={(e) => {
              setItem({ ...item, price: parseInt(e.target.value) });
            }}
          />
          <input
            type="text"
            className="form-control"
            style={{ width: "100px" }}
            placeholder="Quantity"
            onChange={(e) => {
              setItem({ ...item, qty: e.target.value });
            }}
          />
          <span
            className="badge badge-danger"
            onClick={() => {
              dispatch(addToInventory(item));
              // setItem({ name: "", qty: 0, price: 0 });
            }}
          >
            Add
          </span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item_id</th>
              <th scope="col">Item</th>
              <th scope="col">Price(in INR)</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.name}</td>
                  <td> Rs. {item.price}</td>
                  <td>{item.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Inventory;
