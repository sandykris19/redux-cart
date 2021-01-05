const { createStore } = require("redux");

const mainStore = {
  inventory: {
    1: { name: "apple", qty: 10, price: 100 },
    2: { name: "mango", qty: 10, price: 110 },
    3: { name: "ice", qty: 10, price: 190 },
    4: { name: "pine", qty: 10, price: 120 },
  },
  cart: [],
  total: [],
};

function buyItems(id) {
  return {
    type: "ADD_TO_CART",
    item: id,
  };
}

const reducer = (state = mainStore, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        inventory: {
          ...state.inventory,
          [action.item]: {
            ...state.inventory[action.item],
            qty: state.inventory[action.item].qty - 1,
          },
        },
        cart: [...state.cart, action.item],
        total: state.cart
          .map((item) => {
            return state.inventory[item].price;
          })
          .reduce((a, b) => {
            return a + b;
          }, 0),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(buyItems(1))
// store.dispatch(buyItems(1))
// store.dispatch(buyItems(1))

export { store, buyItems };
