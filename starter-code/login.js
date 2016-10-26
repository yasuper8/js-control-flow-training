console.log("login.js loaded");

var userLogin = {
  userName: "yasu",
  userPassword: "123456"
}

var userAnswer = prompt("Please enter password for the user " + userLogin.userName);

while (prompt("Please enter password for the user " + userLogin.userName) !== userLogin.userPassword) {
  prompt("Please enter password for the user " + userLogin.userName)
}
