const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'company',
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log('hubo un error: ', err);
    return;
  } else {
    console.log('DB conectada!');
  }
});

module.exports = mysqlConnection;
