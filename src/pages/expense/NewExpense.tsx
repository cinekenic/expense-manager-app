/** @format */

import { useFormik } from "formik";
import type { Expense } from "../../model/Expense";
import expenseValidationSchema from "../../validation/expenseValidationSchema";
import { expoenseCategories } from "../../utils/AppConstants";
import Dropdown from "../../components/Dropdown";
import { getExpenseByExpenseId, saveOrUpdateExpense } from "../../services/expense-service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NewExpense = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const navigate = useNavigate();
  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Expense>({
    name: "",
    amount: 0,
    note: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (expenseId) {
      setLoader(true);
      getExpenseByExpenseId(expenseId)
        .then((response) => {
          if (response && response.data) {
            setInitialValues(response.data);
          }
        })
        .catch((error) => setErrors(error.message))
        .finally(() => setLoader(false));
    }
  }, [expenseId]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validateOnBlur: true,
    onSubmit: (values: Expense) => {
      saveOrUpdateExpense(values)
        .then((res) => {
          if (res && res.status === 201) {
            navigate("/");
          } else if (res && res.status === 200) {
            navigate(`/view/${expenseId}`);
          }
        })
        .catch((error) => {
          setErrors(error.message);
        });
    },
    validationSchema: expenseValidationSchema,
  });

  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="container col-md-4 col-sm-8 col-xs-12">
        {error && <p className="text-danger fst-italic">{error}</p>}
        {isLoading && <p>Loading...</p>}
        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger fst-italic">{formik.errors.name}</div>
            )}
          </div>

          {/* Amount */}
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-control"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.amount && formik.errors.amount && (
              <div className="text-danger fst-italic">{formik.errors.amount}</div>
            )}
          </div>

          {/* Note */}
          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              className="form-control"
              value={formik.values.note}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Date */}
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date && (
              <div className="text-danger fst-italic">{formik.errors.date}</div>
            )}
          </div>

          {/* Category Dropdown */}
          <Dropdown
            options={expoenseCategories}
            id="category"
            name="category"
            label="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.category}
            touched={formik.touched.category}
          />

          {/* Submit */}
          <button className="btn btn-sm btn-primary btn-outline-light" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewExpense;
