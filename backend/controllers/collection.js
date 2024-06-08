const Stock = require("../models/Stock");
const { MongoClient, ObjectId } = require("mongodb");

const getAllCollection = (req, res, next) => {
  Stock.db("hrTest")
    .collection("stock")
    .find({})
    .toArray()
    .then((items) => res.send({ data: items }))
    .catch((err) => next(err));
};

const filterCollection = (req, res, next) => {
  const { mark } = req.body;
  const filter = {};
  if (mark) {
    filter.mark = mark;
  }
  Stock.db("hrTest")
    .collection("stock")
    .find(filter)
    .toArray()
    .then((items) => res.send({ data: items }))
    .catch((err) => next(err));
};

const getOne = (req, res, next) => {
  const { _id } = req.body;
  const filter = {};
  if (_id) {
    filter._id = new ObjectId(_id);
  }
  Stock.db("hrTest")
    .collection("stock")
    .findOne(filter)
    .then((item) => res.send({ data: item }))
    .catch((err) => next(err));
};

module.exports = {
  getAllCollection,
  filterCollection,
  getOne,
};
