import { io } from "socket.io-client";
import { GET_COIN_DATA, CHANGE_ACTIVE_COIN ,SET_USER_BALANCE} from "../constant";
import { get_wallet } from "../helpers/api_functions";
const URL1 = "http://localhost:4002";
// const URL1 ="http://70.32.23.94:4002/socket"
const socket = io(URL1, { autoConnect: false, transport: ["websocket"] });
socket.connect();
socket.emit("start_server", "chal bhai suru ho ja");

export function getData() {
  return (dispatch) =>
    socket.on("currency_prices", (data) => {
      // console.log(data);
      dispatch({ type: GET_COIN_DATA, data: data });
      return data;
    });
}

export function getUserBalance(session) {
  return (dispatch) => {
    get_wallet(session).then((d) => {
      console.log("user Wallet", d);
      dispatch({ type: SET_USER_BALANCE, data: d.data });
    });
  };
}
