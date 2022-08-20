// This file will contain the queries to the customer table
const database = require("./database");
const express = require("express");

// Allows us to define a mapping from the URI to a function
router = express.Router();

// can be used to define a GET API.   URI -> CB function.
// router.get("/customer/All", (request, response) => {
router.get("/all", (request, response) => {
  database.connection.all("select * from customer", (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});
//Note: use query instead of all for MySQL - database.connection.query("select * from customer"

// defines an API which takes id in the request and return the record in response
// router.get("/customer/id", (request, response) => {
/* router.get("/id", (request, response) => {
  sqlst = `select * from customer where customer_id = ${request.query.cid}`;
  database.connection.all(sqlst, (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred" + sqlst);
    } else {
      response.status(200).send(results);
    }
  });
}); */

// a POST API to store the record received in the request
router.post("/add", (request, response) => {
  database.connection.all(
    `insert into customer (customer_name, customer_email) values ('${request.body.name}','${request.body.email}')`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send("Record saved successfully!");
      }
    }
  );
});

// POST + PUT = Body, GET + DELETE = Query
router.delete("/delete", (request, response) => {
  database.connection.all(
    `delete from customer where email = ${request.query.cemaild}`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Delete:Some error occurred");
      } else {
        response.status(200).send("Record deleted successfully!");
      }
    }
  );
});

// a PUT API to update email for given customer id
/* router.put("/change", (request, response) => {
  sqlstmt = `UPDATE customer SET email = "${request.body.name}"
    WHERE customer_id  = ${request.body.email}`;

  database.connection.all(sqlstmt, (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred" + sqlstmt);
    } else {
      response.status(200).send("Record updated successfully!" + sqlstmt);
    }
  });
}); */

/* `UPDATE customer
SET customer_email = ${request.query.cemail}
WHERE customer_id  = ${request.query.cid}`;

*/
module.exports = {
  router,
};
