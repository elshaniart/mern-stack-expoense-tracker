import React from "react";
import PropTypes from "prop-types";
import "./ExpensesGrid.css";

const ExpensesGrid = ({ expenses = [], deleteExpense, editExpense }) => {
  const formatDate = (date) => {
    let formattedDate = "";
    const newDate = new Date(date);
    formattedDate += `${newDate.getDate()} / `;
    formattedDate += `${+newDate.getMonth() + 1} / `;
    formattedDate += newDate.getFullYear();
    return formattedDate;
  };

  const getTotalValue = (expenses) => {
    let value = 0;
    expenses.forEach((item) => {
      value += +(+item?.quantity * +item?.value).toFixed(2);
    });
    const valArr = (value + "").split(".");
    valArr.length < 2 ? (value += ".00") : (value += "");
    valArr[1]?.length < 2 ? (value += "0") : (valArr[1] += "");
    return value;
  };

  return (
    <div className="expenses-grid-container">
      <div className="expenses-grid-expense">
        <p className="w-1/12 font-montserrat font-semibold">Nr.</p>
        <p className="w-2/12 font-montserrat font-semibold">Name</p>
        <p className="w-1/12 font-montserrat font-semibold">Price</p>
        <p className="w-1/12 font-montserrat font-semibold">Quantity</p>
        <p className="w-1/12 font-montserrat font-semibold">Total</p>
        <p className="w-2/12 font-montserrat font-semibold">Date</p>
        <p className="w-2/12 font-montserrat font-semibold">Category</p>
        <p className="w-1/12 font-montserrat font-semibold">Edit</p>
        <p className="w-1/12 font-montserrat font-semibold">Delete</p>
      </div>
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <div key={expense?._id} className="expenses-grid-expense">
            <p className="w-1/12 font-montserrat font-semibold">{++index}.</p>
            <p className="w-2/12 font-montserrat font-semibold">
              {expense?.name}
            </p>
            <p className="w-1/12 font-montserrat font-semibold">
              {expense?.value}
            </p>
            <p className="w-1/12 font-montserrat font-semibold">
              {expense?.quantity}
            </p>
            <p className="w-1/12 font-montserrat font-semibold">
              {(+expense?.quantity * +expense?.value).toFixed(2)} €
            </p>
            <p className="w-2/12 font-montserrat font-semibold">
              {formatDate(expense?.date)}
            </p>
            <p className="w-2/12 font-montserrat font-semibold">
              {expense?.category}
            </p>
            <div className="w-1/12">
              <div
                className="cursor-pointer"
                onClick={() => editExpense(expense)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="lightgreen"
                  className="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
              </div>
            </div>
            <div className="w-1/12">
              <div
                className="cursor-pointer"
                onClick={() => deleteExpense(expense?._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="salmon"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="w-full mt-6 font-montserrat font-semibold text-lg">
          No expenses found...
        </p>
      )}
      <div className="expenses-grid-expense">
        <p className="w-5/12 font-montserrat font-semibold">{"Total Value"}</p>
        <p className="w-1/12 font-montserrat font-semibold">
          {getTotalValue(expenses)} €
        </p>
        <p className="w-2/12 font-montserrat font-semibold"> </p>
        <p className="w-2/12 font-montserrat font-semibold"> </p>
        <p className="w-1/12 font-montserrat font-semibold"> </p>
        <p className="w-1/12 font-montserrat font-semibold"></p>
      </div>
    </div>
  );
};

export default ExpensesGrid;

ExpensesGrid.propTypes = {
  expenses: PropTypes.array,
  deleteExpense: PropTypes.func,
  editExpense: PropTypes.func,
};
