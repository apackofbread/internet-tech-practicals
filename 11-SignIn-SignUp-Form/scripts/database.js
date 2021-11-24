const mysql = require("mysql2");
let usernames, passwords;

//create connection
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "purnimakumar12",
  database: "my_database",
});

//retrieve user credentials
const getUserCred = function () {
  connection.query(
    "SELECT USERNAME FROM USER_CREDENTIALS",
    function (error, result) {
      if (error) throw error;
      console.log("usernames");
      console.log(result);
      usernames = result;
    }
  );

  connection.query(
    "SELECT PASSWRD FROM USER_CREDENTIALS",
    function (error, result) {
      if (error) throw error;
      console.log("passwords");
      console.log(result);
      passwords = result;
    }
  );
};

//connect to the database
connection.connect(function (error) {
  if (error) throw error;
  console.log("Connection formed!");
  console.log("user credentials");
  getUserCred();
  console.log([usernames, passwords]);
});
