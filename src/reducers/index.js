import { combineReducers } from "redux";
import {
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
  OFF_NOTI,
  LOGIN,
  LOGOUT,
  GETUSERFULLNAME,
  SETUSERFULLNAME,
} from "../actions";
let item = [];
if (localStorage.getItem("gio") !== null)
  item = JSON.parse(localStorage.getItem("gio"));

let num = 0;
for (let i = 0; i < item.length; i++) num += item[i].quantity;

const initProduct = {
  userFullname: "",
  isLoggedin: false,
  numberCart: num,
  Carts: item,
  noti: false,
  _products: [],
};

function todoProduct(state = initProduct, action) {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      state.noti = true;

      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.maSp,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.hinh,
          price: action.payload.price,
        };
        state.Carts.push(cart);
        localStorage.setItem("gio", JSON.stringify(state.Carts));
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id === action.payload.maSp) {
            state.Carts[key].quantity++;
            check = true;
          }
          localStorage.setItem("gio", JSON.stringify(state.Carts));
        });
        if (!check) {
          let _cart = {
            id: action.payload.maSp,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.hinh,
            price: action.payload.price,
          };
          state.Carts.push(_cart);
          localStorage.setItem("gio", JSON.stringify(state.Carts));
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;
      localStorage.setItem("gio", JSON.stringify(state.Carts));
      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }
      localStorage.setItem("gio", JSON.stringify(state.Carts));
      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      state.Carts.splice(action.payload, 1);
      localStorage.setItem("gio", JSON.stringify(state.Carts));
      if (state.numberCart === quantity_) localStorage.removeItem("gio");
      state.numberCart -= quantity_;
      return {
        ...state,
      };
    case OFF_NOTI:
      state.noti = false;
      return {
        ...state,
      };
    case LOGIN:
      return {
        ...state,
        isLoggedin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedin: false,
      };
    case GETUSERFULLNAME:
      return {
        ...state,
      };
    case SETUSERFULLNAME:
      return {
        ...state,
        userFullname: action.payload,
      };

    default:
      return state;
  }
}
const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;
