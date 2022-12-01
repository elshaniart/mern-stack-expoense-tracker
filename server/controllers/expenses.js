const Expense = require("../models/expense");

const getAllExpenses = async (req, res) => {
  try {
    const { category, name } = req.query;

    const queryObject = {};

    if (category) {
      queryObject.category = category;
    }

    if (name) {
      queryObject.name = name;
    }
    const expenses = await Expense.find(queryObject);
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
};

const createExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json({ expense });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id: expenseID } = req.params;
    const expense = await Expense.findOneAndUpdate(
      { _id: expenseID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!expense) {
      res.status(404).json({ message: `No task with id: ${expenseID}` });
      return;
    }

    res.status(200).json({ expense });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id: expenseID } = req.params;
    const expense = await Expense.findOneAndDelete({ _id: expenseID });
    if (!expense) {
      res.status(404).json({ message: `No task with id: ${expenseID}` });
      return;
    }

    res.status(200).json({ expense });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
};
