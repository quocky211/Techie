export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const GET_NUMBER_CART = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART";
export const OFF_NOTI = "OFF_NOTI";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GETUSERFULLNAME = "GETUSERFULLNAME";
export const SETUSERFULLNAME = "SETUSERFULLNAME";

/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: "GET_NUMBER_CART",
  };
}
export function Off_Noti() {
  return {
    type: "OFF_NOTI",
  };
}
export function AddCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: "UPDATE_CART",
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
}
export function Log_in(payload) {
  return {
    type: "LOGIN",
    payload,
  };
}
export function Log_out(payload) {
  return {
    type: "LOGOUT",
    payload,
  };
}
export function GetUserFullName() {
  return {
    type: "GETUSERFULLNAME",
  };
}
export function SetUserFullName(payload) {
  return {
    type: "SETUSERFULLNAME",
    payload,
  };
}
