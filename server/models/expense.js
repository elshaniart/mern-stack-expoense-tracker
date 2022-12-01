const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  value: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  category: {
    type: String,
    enum: {
      values: [
        "groceries",
        "food&beverage",
        "gas",
        "parking",
        "going out",
        "tech",
        "gifts",
        "supplements",
      ],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
