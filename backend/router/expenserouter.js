const express = require("express");

const router = express.Router();

const editcontroller = require("../controller/editform");
const deletecontroller = require("../controller/deleteform");

router.get("/", editcontroller.getall);
router.post("/submitform", editcontroller.submitform);

router.get("/delete/:productid", deletecontroller.delete);
router.get("/editform/:productid", editcontroller.editform);

module.exports = router;
