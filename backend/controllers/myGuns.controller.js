const { where } = require("sequelize");
const db = require("../models");
const Gun = db.guns;

exports.create = (req, res) => {
  const gun = {
    type: req.body.type,
    name: req.body.name,
    country: req.body.country,
    caliber: req.body.caliber
  }
  
  console.log(req.body);

  Gun.create(gun).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({ message: err.message || "Some error occurred while creating the notebook." });
  });
};


exports.findAll = (req, res) => {
  Gun.findAll().then((data) => {
    res.send(data);
  }).catch(err => {
    console.log("el error está aqui");
  })
}

exports.findOne = (req, res) => {
  const id = req.params.id;
  Gun.findByPk(id).then(data => {
    res.send(data);
  })
}

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(id);
  // const updatedGun = {{type: req.body.type,
  //   name: req.body.name,
  //   country: req.body.country,
  //   caliber: req.body.caliber
  // };
  const {type, name, country, caliber} = req.body;

  Gun.update({type, name, country, caliber}, {
    where: {id: id}
  }).then(() => {
    console.log("The gun was updated");
    res.send({message: "Gun easy updated bro"})
  })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Gun.destroy({ where: { id: id } }).then(() => {
    console.log("se borró todo perfe socio");
    res.send({ message: "se borró" });
  });
}