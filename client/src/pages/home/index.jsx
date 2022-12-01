import React, { useEffect, useState } from "react";
import HomeUI from "./ui";
import axios from "axios";

const Home = () => {
  const [expensesList, setExpensesList] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [amount, setAmount] = useState(1);
  const [category, setCategory] = useState(0);
  const [expenseDate, setExpenseDate] = useState("2022-05-22");
  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(process.env.REACT_APP_DEFAULT_URL)
        .then((res) => setExpensesList(res?.data?.expenses))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const getCategory = (categoryNr) => {
    let stringCategory = "";
    switch (categoryNr) {
      case 0:
        stringCategory = "groceries";
        break;
      case 1:
        stringCategory = "food&beverage";
        break;
      case 2:
        stringCategory = "gas";
        break;
      case 3:
        stringCategory = "parking";
        break;
      case 4:
        stringCategory = "going out";
        break;
      case 5:
        stringCategory = "tech";
        break;
      case 6:
        stringCategory = "gifts";
        break;
      case 7:
        stringCategory = "supplements";
        break;
      default:
        stringCategory = "groceries";
        break;
    }
    return stringCategory;
  };

  const handleAmountChange = (e) => {
    if (+e?.target?.value >= 0) {
      setAmount(+e.target.value);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setExpenseDate(e.target.value);
  };

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  };

  const handleExpenseValueChange = (e) => {
    if (+e?.target?.value >= 0) {
      setExpenseValue(+e.target.value);
    }
  };

  const handleEditExpensePressed = (expense) => {
    setModalOpen(true);
    setExpenseToEdit(expense);
  };

  const handleEditExpense = (
    id,
    newName,
    newValue,
    newAmount,
    newDate,
    newCategory
  ) => {
    try {
      const stringCategory = getCategory(newCategory);
      axios
        .patch(`${process.env.REACT_APP_DEFAULT_URL}/${id}`, {
          name: newName,
          value: newValue,
          quantity: newAmount,
          date: newDate,
          category: stringCategory,
        })
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    } catch (error) {}
    setModalOpen(false);
    setExpenseToEdit(null);
  };

  const handleDeleteExpense = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        axios
          .delete(`${process.env.REACT_APP_DEFAULT_URL}/${id}`)
          .then((res) => {
            console.log(res);
            window.location.reload();
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmitForm = () => {
    if (expenseName.length < 3) {
      console.log("Expense name must be longer than 2 characters");
      return;
    }
    if (expenseName.length > 20) {
      console.log("Expense name can't be longer than 20 characters");
      return;
    }
    if (amount < 1) {
      console.log("Amount can't be less than 1");
      return;
    }

    let expenseCategory = getCategory(category);

    try {
      axios
        .post(process.env.REACT_APP_DEFAULT_URL, {
          name: expenseName,
          value: expenseValue,
          quantity: amount,
          date: expenseDate,
          category: expenseCategory,
        })
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    } catch (error) {}
  };

  return (
    <HomeUI
      amount={+amount}
      setAmount={handleAmountChange}
      category={category}
      setCategory={handleCategoryChange}
      date={expenseDate}
      setDate={handleDateChange}
      expenseName={expenseName}
      setExpenseName={handleExpenseNameChange}
      expenseValue={+expenseValue}
      setExpenseValue={handleExpenseValueChange}
      submit={handleSubmitForm}
      expenses={expensesList}
      deleteExpense={handleDeleteExpense}
      handleEditExpensePressed={handleEditExpensePressed}
      handleEditExpense={handleEditExpense}
      modalOpen={modalOpen}
      expenseToEdit={expenseToEdit}
    />
  );
};

export default Home;
