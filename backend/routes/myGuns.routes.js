module.exports = app => {
  const guns = require("../controllers/myGuns.controller");

  var router = require("express").Router();

  router.post("/", guns.create);
  router.get("/", guns.findAll);
  router.get("/:id", guns.findOne);
  router.put("/:id", guns.update);
  router.delete("/:id", guns.delete);

  app.use("/api/guns", router);
}