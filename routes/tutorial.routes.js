import express from "express";
import {getTuto,getOneTuto,createTuto,updateTuto,deleteOneTuto,deleteTuto} from "../controllers/tutorial.controller.js";

const router = express.Router();

router.get('/',getTuto);

router.get('/:id',getOneTuto);


router.post('/',createTuto);

router.patch('/:id',updateTuto);

router.put('/:id',updateTuto);
 

router.delete('/:id',deleteOneTuto);

router.delete('/',deleteTuto);





export default router





















//ANCIEN CODE...
//::

/*When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will reponse by setting up the routes.

These are our routes:

    /api/tutorials: GET, POST, DELETE
    /api/tutorials/:id: GET, PUT, DELETE
    /api/tutorials/published: GET

Create a turorial.routes.js inside app/routes folder with content like this:
*/


/*
module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/articles", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  //app.use('/api/tutorials', router);
};
*/

/*
You can see that we use a controller from /controllers/tutorial.controller.js.

We also need to include routes in server.js (right before app.listen()):
*/
