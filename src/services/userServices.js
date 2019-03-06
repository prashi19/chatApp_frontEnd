import axios from "axios";
/**
 *
 * @param {*used to send registered data to server} data
 */
export function userRegister(data) {
  return axios.post("/register", data);
}
/**
 *
 * @param {*used to send login data to server} data
 */
export function userLogin(data) {
  return axios.post("/login", data);
}
/**
 *
 * @param {*send password data to server} Password
 * @param {*used to generate token and that data is encrypted} token
 */
export function resetPassword(Password, token) {
  return axios.post(
    `/resetpassword/${token}`,
    { Password: Password },
    { headers: { token: token } }
  );
}

/**
 *
 * @param {*send forgotPassword data to server} userName
 */
export function forgotPassword(userName) {
  axios
    .post("/forgot", {
      Email: userName
    })
    .then(function(response) {
      console.log(response);
      alert(" Please check your email.");
    })
    .catch(function(err) {
      console.log(err);
      alert("User Not Found.");
    });
}
