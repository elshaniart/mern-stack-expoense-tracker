const express = require("express");
const router = express.Router();

const {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenses");

router.route("/").get(getAllExpenses).post(createExpense);
router.route("/:id").delete(deleteExpense).patch(updateExpense);

module.exports = router;
