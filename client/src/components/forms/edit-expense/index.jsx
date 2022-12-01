import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./EditExpenseForm.css";

const EditExpenseForm = ({
  id,
  oldExpenseName,
  oldExpenseValue,
  oldAmount,
  oldDate,
  oldCategory,
  onSubmit,
}) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const formatDate = (date) => {
      let formattedDate = "";
      const newDate = new Date(date);
      formattedDate += `${newDate.getFullYear()}-`;
      const monthVal = +newDate.getMonth() + 1;
      formattedDate +=
        monthVal.length > 1 ? monthVal + "-" : "0" + monthVal + "-";
      formattedDate += newDate.getDate();
      return formattedDate;
    };
    setExpenseName(oldExpenseName);
    setExpenseValue(oldExpenseValue);
    setAmount(oldAmount);
    setDate(formatDate(oldDate));
    switch (oldCategory) {
      case "groceries":
        setCategory(0);
        break;
      case "food&beverage":
        setCategory(1);
        break;
      case "gas":
        setCategory(2);
        break;
      case "parking":
        setCategory(3);
        break;
      case "going out":
        setCategory(4);
        break;
      case "tech":
        setCategory(5);
        break;
      case "gifts":
        setCategory(6);
        break;
      case "supplements":
        setCategory(7);
        break;
      default:
        setCategory(0);
        break;
    }
  }, []);

  return (
    <div className="edit-expense-form-container">
      <div className="edit-expense-form-input-container pt-10">
        <p className="font-montserrat text-3xl font-extrabold">Edit Expense</p>
      </div>
      <div className="mt-10 edit-expense-form-input-container">
        <TextField
          label="Expense Name..."
          variant="standard"
          className="w-3/4"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>
      <div className="mt-8 edit-expense-form-input-container">
        <div className="flex flex-row w-3/4 justify-between">
          <TextField
            label="Price..."
            variant="standard"
            className="w-9/12 mx-4"
            InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>,
            }}
            type="number"
            value={expenseValue}
            onChange={(e) => setExpenseValue(e.target.value)}
          />
          <TextField
            label="Amt."
            variant="standard"
            className="w-2/12"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10 edit-expense-form-input-container">
        <TextField
          variant="standard"
          className="w-3/4"
          type={"date"}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mt-14 edit-expense-form-input-container">
        <FormControl className="w-3/4">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            defaultValue={category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={0}>Groceries</MenuItem>
            <MenuItem value={1}>Food&Beverage</MenuItem>
            <MenuItem value={2}>Gas</MenuItem>
            <MenuItem value={3}>Parking</MenuItem>
            <MenuItem value={4}>Going Out</MenuItem>
            <MenuItem value={5}>Tech</MenuItem>
            <MenuItem value={6}>Gifts</MenuItem>
            <MenuItem value={7}>Supplements</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mt-20 edit-expense-form-input-container">
        <div
          onClick={() =>
            onSubmit(id, expenseName, expenseValue, amount, date, category)
          }
          className="bg-blue-400 cursor-pointer hover:bg-blue-500 flex justify-center align-middle px-8 py-4 rounded-lg"
        >
          <p className="text-white font-montserrat font-black text-3xl">
            Submit
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditExpenseForm;

EditExpenseForm.propTypes = {
  id: PropTypes.string,
  oldExpenseName: PropTypes.string,
  oldExpenseValue: PropTypes.number,
  oldAmount: PropTypes.number,
  oldDate: PropTypes.string,
  oldCategory: PropTypes.string,
  onSubmit: PropTypes.func,
};
