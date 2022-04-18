const express = require("express");
const router = express.Router();
const mysqlConnection = require("../database.js");

router.get("", (req, res) => {
  mysqlConnection.query("SELECT * FROM employees", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM employees WHERE id=?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});
router.post("", (req, res) => {
  if (!req.body.name) {
    res.status(405);
    res.send({ name: "debe de poner un nombre" });
  }
  if (!req.body.salary) {
    res.status(405);
    res.send({ salary: "debe de poner un salario" });
  } else {
    const employeeData = {
      name: req.body.name,
      salary: req.body.salary,
    };

    mysqlConnection.query(
      "INSERT INTO `company`.`employees` (`name`, `salary`) VALUES (?, ?)",
      [employeeData.name, employeeData.salary],
      (err, rows, fields) => {
        if (!err) {
          res.status(200);
          res.send("Empleado dado de alta en el sistema!");
        } else {
          console.log(err);
        }
      }
    );
  }
});
router.put("/:id", (req, res) => {
  if (!req.body.name) {
    res.status(405);
    res.send({ name: "debe de poner un nombre" });
  }
  if (!req.body.salary) {
    res.status(405);
    res.send({ salary: "debe de poner un salario" });
  } else {
    const employeeNewData = {
      id: req.params.id,
      name: req.body.name,
      salary: req.body.salary,
    };
    mysqlConnection.query(
      "UPDATE `company`.`employees` SET `name` = ?, `salary` = ? WHERE (`id` = ?);",
      [employeeNewData.name, employeeNewData.salary, employeeNewData.id],
      (err, rows, fields) => {
        if (!err) {
          res.status(200)
          res.send("Empleado Actualizado correctamente!")
        } else {
          console.log(err);
        }
      }
    );
  }
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM `company`.`employees` WHERE (`id` = ?);",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.status(100)
        res.send("Empleado Eliminado correctamente.")
      } else {
        console.log(err);
      }
    }
  );
});
module.exports = router;
