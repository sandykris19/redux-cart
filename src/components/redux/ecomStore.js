const { createStore } = require("redux");

const mainStore = {
  inventory: {
    1: { name: "apple", qty: 10 },
    2: { name: "mango", qty: 10 },
    3: { name: "ice", qty: 10 },
    4: { name: "pine", qty: 10 },
  },
  cart: [],
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
        cart: [],
      };
  }
  return state;
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(buyItems(1));
store.dispatch(buyItems(2));
store.dispatch(buyItems(2));
store.dispatch(buyItems(2));
store.dispatch(buyItems(2));
store.dispatch(buyItems(2));
