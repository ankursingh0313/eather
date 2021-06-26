// import $ from 'jquery'; 
const url = "http://localhost:3001/api";

export function userLogin(email, password) {
  console.log("Called")
  return fetch(`${url}/login`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function userRegister(email, password) {
  return fetch(`${url}/register`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

// export function userInfoSubmit(body) {
//   return fetch(`${url}/kyc/save_personal_info`, {
//     method: "POST",
//     mode: "cors",
//     credentials: "include",
//     headers: {
//       "content-type": "application/json",
//       "cache-control": "no-cache",
//     },
//     body: JSON.stringify({
//       type_of_kyc: body.type_of_kyc,
//       fname: body.fname,
//       mname: body.mname,
//       lname: body.lname,
//       dob: body.dob,
//       address: body.address,
//       country: body.country,
//       state: body.state,
//       city: body.city,
//       pincode: body.pincode,
//       session_id: body.session_id,
//     }),
//   })
//     .then((d) => d.json())
//     .catch((e) => e);
// }

// export async function setKyc(event, session_id) {
//   $('#'+event.target.id).hide();
//   const formControl = event.target.parentElement;
//   formControl.querySelector('.spinner-border').style.display = 'block';
//   const typeInput = formControl.querySelector("input");
//   var body = {};
//   body.session_id = session_id;
//   if (typeInput.type === "text") {
//     const val = formControl.querySelector("input").value;
//     body.doc_no = val;
//     if (typeInput.id === "user_adhar") {
//       body.doc_type = "AdharCard";
//       body.field_type = "doc1n";
//     } else if (typeInput.id === "user_pancard") {
//       body.doc_type = "PanCard";
//       body.field_type = "doc2n";
//     }
//   } else if (typeInput.type === "file") {
//     const img = formControl.querySelector("img");
//     const val = img.src;
//     body.value = val;
//     body.size = "10000";
//     body.type = "image/jpg";
//     if (img.id === "front_adhar") {
//       body.field_type = "doc1f";
//     } else if (img.id === "back_adhar") {
//       body.field_type = "doc1b";
//     } else if (img.id === "front_dl") {
//       body.field_type = "doc1f";
//     } else if (img.id === "back_dl") {
//       body.field_type = "doc1b";
//     } else if (img.id === "front_passport") {
//       body.field_type = "doc1f";
//     } else if (img.id === "back_passport") {
//       body.field_type = "doc1b";
//     } else if (img.id === "front_pan") {
//       body.field_type = "doc2f";
//     } else if (img.id === "back_pan") {
//       body.field_type = "doc2b";
//     }
//   }
  
//   try {
//     const res = await fetch(`${url}/kyc/submit_kyc_doc`, {
//       method: "POST",
//       mode: "cors",
//       credentials: "include",
//       headers: {
//         "content-type": "application/json",
//         "cache-control": "no-cache",
//       },
//       body: JSON.stringify(body),
//     })
//     const data = await res.json();
//     console.log(data);
//     if (data && data.status === 1) {
//       $('#'+event.target.id).show();
//       $('#'+event.target.id).text('Resend');
//       formControl.querySelector('.spinner-border').style.display = 'none';
//     }
//   } catch (error) {
//     console.error("An unexpected error happened:", error);
//   }
// }
// export async function uploadSelfie(event, session_id) {
//   $('#'+event.target.id).hide();
//   $('.cancelbtn').hide();
//   const formControl = event.target.parentElement;
//   formControl.querySelector('.spinner-border').style.display = 'block';
//   var body = {};
//   body.session_id = session_id;
//   const val = formControl.querySelector("img").src;
//   body.value = val;
//   body.size = "10000";
//   body.type = "image/jpg";
//   body.field_type = "doc1s";
//   try {
//     const res = await fetch(`${url}/kyc/submit_kyc_doc`, {
//       method: "POST",
//       mode: "cors",
//       credentials: "include",
//       headers: {
//         "content-type": "application/json",
//         "cache-control": "no-cache",
//       },
//       body: JSON.stringify(body),
//     })
//     const data = await res.json();
//     if (data && data.status === 1) {
//       $('.cancelbtn').show();
//       $('.cancelbtn').text('Reclick');
//       formControl.querySelector('.spinner-border').style.display = 'none';
//     }
//   } catch (error) {
//     console.error("An unexpected error happened:", error);
//   }
// }



// export async function requestToken(body) {
//   try {
//     const data = await fetchJson(`${API_URL}/tokens/requestToken`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });
//     return data;
//   } catch (error) {
//     console.error("An unexpected error happened:", error);
//   }
// }
// export function getPending(session_id) {
//   return fetch(`${url}/kyc/ed/getPending`, {
//     method: "POST",
//     mode: "cors",
//     credentials: "include",
//     headers: {
//       "content-type": "application/json",
//       "cache-control": "no-cache",
//     },
//     body: JSON.stringify({ session_id: session_id }),
//   })
//     .then((res) => res.json())
//     .catch((e) => {
//       return e;
//     });
// }

// export async function updateKyc(txt, msg, id, session_id) {
//   let body = null;
//   if(txt === 'reject') {
//       body = {
//           msg: msg,
//           id: id,
//           status: 0,
//           session_id: session_id
//       };    
//   } else {
//       body = {
//           msg: msg,
//           id: id,
//           status: 1,
//           session_id:session_id
//       };
//   } 
//   return fetch(`${url}/kyc/ed/update_kyc`, {
//     method: "POST",
//     mode: "cors",
//     credentials: "include",
//     headers: {
//       "content-type": "application/json",
//       "cache-control": "no-cache",
//     },
//     body: JSON.stringify(body),
//   })
//     .then((res) => res.json())
//     .catch((e) => {
//       return e;
//     });
// }

// export function userSubmitDoc(body) {
//   return fetch(`${url}/kyc/submit_kyc_doc`, {
//     method: "POST",
//     mode: "cors",
//     credentials: "include",
//     headers: {
//       "content-type": "application/json",
//       "cache-control": "no-cache",
//     },
//     body: JSON.stringify({
//       type_of_kyc:body.type_of_kyc, 
//       fname:body.fname, 
//       mname:body.mname, 
//       lname:body.lname, 
//       dob:body.dob, 
//       address:body.address, 
//       country:body.country, 
//       state:body.state, 
//       city:body.city, 
//       pincode:body.pincode, 
//       session_id:body.session_id
//     }),
//   })
//     .then((d) => d.json())
//     .catch((e) => e);
// }

export function resendOTP() {
  return fetch(`${url}/register`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({ isResend: true }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function verifyOTP(otp) {
  return fetch(`${url}/verify`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({ otp: otp }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function verifySession() {
  return fetch(`${url}/checkSession`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function userLogout() {
  return fetch(`${url}/logout`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function getCountry() {
  return fetch(`${url}/get_country`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function get_wallet(session_id) {
  return fetch(`${url}/get_wallet`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({session_id:session_id}),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function getState(country) {
  return fetch(`${url}/get_state`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      country: country,
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function getCity(country, state) {
  return fetch(`${url}/get_city`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      country: country,
      state: state,
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}
export function getOrderBook(currency_type, compare_currency) {
  return fetch(`${url}/exchange/orderbook`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      currency_type: currency_type,
      compare_currency: compare_currency,
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function getTradeHistory(currency_type,compare_currency){
  return fetch(`${url}/exchange/tradelist`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      currency_type: currency_type,
      compare_currency: compare_currency,
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}


export function createBuyOffer(price, quantity, currency_type, compare_currency, session_id){
  return fetch(`${url}/purchasing/buy`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      price: price,
      quantity: quantity,
      currency_type: currency_type,
      compare_currency: compare_currency,
      session_id: session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function createSellOffer(price, quantity, currency_type, compare_currency, session_id) {
  return fetch(`${url}/purchasing/sell`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      price: price,
      quantity: quantity,
      currency_type: currency_type,
      compare_currency: compare_currency,
      session_id : session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);  
}

export function getAllOrders(session_id) {
  return fetch(`${url}/purchasing/getUsersAllOrder`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      session_id : session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);  
}

