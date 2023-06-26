const expenses = require("../model/expense");

exports.getall = (req, res, next) => {
  expenses
    .findAll()
    .then((content) => {
      res.json(content);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.submitform = (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;

  expenses
    .create({
      amount: amount,
      description: description,
      category: category,
    })
    .then((prod) => {
      console.log("product created");
      res.json(prod);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.editform = (req, res, next) => {
  const productid = req.params.productid;
  expenses.findByPk(productid).then((prod) => {
    res.json(prod);
  });
};
