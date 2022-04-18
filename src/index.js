const express = require('express');
const app = express();
const employeeRoute = require('./routes/employeesRoute');
//settings
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(express.json());
//routes
app.use(employeeRoute);
//starting the server
app.listen(app.get('port'), () => {
  console.log('server corriendo en el puerto: ', app.get('port'));
});
