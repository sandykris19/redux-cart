const { createStore } = require("redux");

const mainStore = {
  inventory: [
    { name: "apple", qty: 2, price: 55 },
    { name: "mango", qty: 4, price: 90 },
    { name: "icecream", qty: 1, price: 120 },
    { name: "pineapple", qty: 10, price: 40 },
  ],
  cart: [],
  total: 0,
};

function buyItems(id = null) {
  return {
    type: "ADD_TO_CART",
    item: id,
  };
}

function addToInventory(item) {
  return {
    type: "ADD_TO_INVEN",
    newItem: item,
  };
}

const reducer = (state = mainStore, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const id = state.inventory.findIndex((i) => i.name === action.item);
      if (id < 0) {
        return state;
      }
      let update = [...state.inventory];
      update[id] = { ...state.inventory[id], qty: state.inventory[id].qty - 1 };
      return {
        inventory: update,
        cart: [...state.cart, { ...update[id] }],
        total: state.total + state.inventory[id].price,
      };
    case "ADD_TO_INVEN": {
      return {
        inventory: [...state.inventory, action.newItem],
        cart: [...state.cart],
        total: state.total,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

export { store, buyItems, addToInventory };
