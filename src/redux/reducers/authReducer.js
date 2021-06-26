import { AUTH_FORGET, AUTH_LOGIN, AUTH_LOGOUT, SEND_OTP } from "../constant";
let session = localStorage.getItem("eather-private-session");

const initialState = {
  user: {
    id: 0,
    email: "",
    // kyc: 0,
    verify: 0,
    session_id: session ? session : "",
  },
  otp_send: false,
  isLoggedIn: session ? true : false,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      localStorage.setItem("eather-private-session", action.data.session_id);
      return {
        ...state,
        user: { ...action.data },
        otp_send: false,
        isLoggedIn: true,
      };
    case SEND_OTP:
      return {
        ...state,
        otp_send: true,
        user: { ...action.data },
      };
    case AUTH_FORGET:
      return {
        ...state,
      };

    case AUTH_LOGOUT:
      localStorage.removeItem("eather-private-session");
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
}
