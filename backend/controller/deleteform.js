const expenses = require("../model/expense");

exports.delete = (req, res, next) => {
  const productid = req.params.productid;
  expenses
    .findByPk(productid)
    .then((prod) => {
      if (!prod) {
        console.log("product not found");
      } else {
        return prod.destroy();
      }
    })
    .then(() => {
      console.log("product deleted");
      res.redirect("/");
    });
};
