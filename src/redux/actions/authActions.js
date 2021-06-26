import { NotificationManager } from "react-notifications";
import { AUTH_LOGIN, AUTH_LOGOUT, SEND_OTP } from "../constant";
import { userLogin, userRegister, verifyOTP, userInfoSubmit, userLogout } from "../helpers/api_functions";

export function user_Login(email, password, resolve, reject) {
  console.log("ABCD")
  console.log(email, password);
  return (dispatch) => {
    userLogin(email, password)
      .then((res) => {
        console.log("Login", res);
        if (res.status === 1) {
          dispatch({ type: AUTH_LOGIN, data: res });
          console.log("abcd")
          resolve();
        } else {
          NotificationManager.error(res.msg, "Error", 3000);
          reject();
        }
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error(e.message);
        reject();
      });
  };
}

export function user_Register(email, password, resolve, reject) {
  return (dispatch) => {
    userRegister(email, password)
      .then((res) => {
        console.log("Register", res);
        if (res.status === 1) {
          NotificationManager.success(res.msg);
          dispatch({ type: SEND_OTP ,data:{email:email}});
          resolve();
        } else {
          NotificationManager.error(res.msg);
          reject();
        }
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  };
}

export function opt_verify(otp, resolve, reject) {
  return (dispatch) => {
    console.log("OTP",otp);
    verifyOTP(otp)
      .then((res) => {
        console.log("Verify:",res);
        if (res.status === 1) {
          dispatch({type:AUTH_LOGIN,data:res});
          resolve();
        } else {
          NotificationManager.error(res.msg);
          reject();
        }
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error(e.message);
        reject();
      });
  };
}
export function user_logout(cb) {
  return (dispatch) => {
    userLogout()
    dispatch({ type: AUTH_LOGOUT });
    cb()
  };
}
// export function submitKyc(body, resolve, reject) {
//   return (dispatch) => {
//     userInfoSubmit(body)
//       .then((res) => {
//         if (res.status === 1) {
//           NotificationManager.success(res.msg);
//           resolve();
//         } else {
//           NotificationManager.error(res.msg);
//           reject();
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//         reject();
//       });
//   };
// }