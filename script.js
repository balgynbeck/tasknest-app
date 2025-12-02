function checkPassword(pass) {
  if (pass === "admin") {
    console.log("Доступ разрешён");
  } else {
    console.log("Доступ запрещён");
  }
}
checkPassword("admin");
checkPassword("1234");

// This JavaScript code defines a function called `checkPassword` that takes a password as input.
// The function checks if the password is equal to the string "admin". If the password matches,
// itlogs a message to the console saying "Access allowed". If the password does not match,
// it logs a message saying "Access denied". The function is then called twice with the passwords "admin" and "1234".
