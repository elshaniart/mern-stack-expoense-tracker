import React from "react";
import PropTypes from "prop-types";
import EditExpenseForm from "../../forms/edit-expense";
import "./EditExpenseModal.css";

const EditExpenseModal = ({ expense, editExpense }) => {
  return (
    <div className="edit-expense-modal-background">
      <div className="edit-expense-form-container">
        {/*  Create new expense form to edit existing expense and make it look the same pretty please  */}
        <EditExpenseForm
          id={expense._id}
          oldAmount={expense.quantity}
          oldCategory={expense.category}
          oldDate={expense.date}
          oldExpenseName={expense.name}
          oldExpenseValue={expense.value}
          onSubmit={editExpense}
        />
      </div>
    </div>
  );
};

export default EditExpenseModal;

EditExpenseModal.propTypes = {
  expense: PropTypes.object,
  editExpense: PropTypes.func,
};
