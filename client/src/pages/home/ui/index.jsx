import React from "react";
import PropTypes from "prop-types";
import NewExpenseForm from "../../../components/forms/new-expense";
import Header from "../../../components/header";
import ExpensesGrid from "../../../components/forms/expenses-grid";
import EditExpenseModal from "../../../components/modals/edit";

const HomeUI = ({
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
  submit,
  expenses = [],
  deleteExpense,
  handleEditExpensePressed,
  modalOpen,
  expenseToEdit,
  handleEditExpense,
}) => {
  return (
    <>
      <Header />
      {modalOpen ? (
        <EditExpenseModal
          expense={expenseToEdit}
          editExpense={handleEditExpense}
        />
      ) : (
        <></>
      )}
      <div className="flex flex-row p-20">
        <div className="w-1/2">
          <NewExpenseForm
            amount={amount}
            category={category}
            date={date}
            expenseName={expenseName}
            expenseValue={expenseValue}
            setAmount={setAmount}
            setCategory={setCategory}
            setDate={setDate}
            setExpenseName={setExpenseName}
            setExpenseValue={setExpenseValue}
            onSubmit={submit}
          />
        </div>
        <ExpensesGrid
          expenses={expenses}
          deleteExpense={deleteExpense}
          editExpense={handleEditExpensePressed}
        />
      </div>
    </>
  );
};

export default HomeUI;

HomeUI.propTypes = {
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
  submit: PropTypes.func,
  deleteExpense: PropTypes.func,
  expenses: PropTypes.array,
  handleEditExpensePressed: PropTypes.func,
  handleEditExpense: PropTypes.func,
  modalOpen: PropTypes.bool,
  expenseToEdit: PropTypes.object,
};
