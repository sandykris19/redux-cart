import React from "react";

const Cart = () => {
  const items = [
    { item: "apple", count: 10 },
    { item: "mango", count: 10 },
  ];
  return (
    <div className="container" style={{width: '500px'}}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Item_no</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index}</th>
                <td>{item.item}</td>
                <td>{item.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
