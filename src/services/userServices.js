import axios from 'axios';

export function userRegister(data) {
return axios.post('/register', data);
}

export function userLogin(data) {
return axios.post('/login', data);
}

export function resetPassword(Password, token) {
return axios.post(`/resetpassword/${token}`,
{ 'Password': Password },
{ headers: { 'token': token } })
}

export function forgotPassword(userName) {
axios.post('/verifyUser',
{
'Email': userName,
})
.then(function (response) {
console.log(response);
alert(' Please check your email.')
})
.catch(function (err) {
console.log(err);
alert('User Not Found.');
});
}