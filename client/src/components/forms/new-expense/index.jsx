import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./NewExpenseForm.css";

const NewExpenseForm = ({
  expenseName = "",
  setExpenseName,
  expenseValue = 0,
  setExpenseValue,
  amount = 0,
  setAmount,
  date = new Date(),
  setDate,
  category = 0,
  setCategory,
  onSubmit,
}) => {
  return (
    <div className="new-expense-form-container">
      <div className="new-expense-form-input-container">
        <p className="font-montserrat text-3xl font-extrabold">New Expense</p>
      </div>
      <div className="mt-10 new-expense-form-input-container">
        <TextField
          label="Expense Name..."
          variant="standard"
          className="w-3/4"
          value={expenseName}
          onChange={setExpenseName}
        />
      </div>
      <div className="mt-8 new-expense-form-input-container">
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
            onChange={setExpenseValue}
          />
          <TextField
            label="Amt."
            variant="standard"
            className="w-2/12"
            type="number"
            value={amount}
            onChange={setAmount}
          />
        </div>
      </div>
      <div className="mt-10 new-expense-form-input-container">
        <TextField
          variant="standard"
          className="w-3/4"
          type={"date"}
          value={date}
          onChange={setDate}
        />
      </div>
      <div className="mt-14 new-expense-form-input-container">
        <FormControl className="w-3/4">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            defaultValue={category}
            value={category}
            onChange={setCategory}
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
      <div className="mt-20 new-expense-form-input-container">
        <div
          onClick={onSubmit}
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

export default NewExpenseForm;

NewExpenseForm.propTypes = {
  expenseName: PropTypes.string,
  setExpenseName: PropTypes.func,
  expenseValue: PropTypes.number,
  setExpenseValue: PropTypes.func,
  amount: PropTypes.number,
  setAmount: PropTypes.func,
  date: PropTypes.any,
  setDate: PropTypes.func,
  category: PropTypes.number,
  setCategory: PropTypes.func,
  onSubmit: PropTypes.func,
};
