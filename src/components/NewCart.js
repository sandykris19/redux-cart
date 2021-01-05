import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyItems } from "./redux/newEcom";

const NewCart = () => {
  const state = useSelector((state) => state.inventory);
  const dispatch = useDispatch();
  return (
      <div className="container my-4" style={{width: '600px'}}>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Item_no</th>
          <th scope="col">Name</th>
          <th scope="col">Price(in INR)</th>
        </tr>
      </thead>
      <tbody>
        {state.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td> Rs. {item.price}</td>
              <td>
                {item.qty > 0 ? (
                  <span
                    className="badge badge-danger"
                    onClick={() => dispatch(buyItems(item.name))}
                  >
                    Add
                  </span>
                ) : (
                  <span className="badge badge-secondary">Sold out</span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default NewCart;
