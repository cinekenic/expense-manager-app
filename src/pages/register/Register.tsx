/** @format */

import { useFormik } from "formik";
import type { Profile } from "../../model/Profile";
import profileValidationSchema from "../../validation/profileValidationSchema";
import { useRegister } from "../../hooks/useRegister";

const Register = () => {
  const { error, isLoading, signup, toast } = useRegister();
  const formik = useFormik<Profile>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: profileValidationSchema,

    onSubmit: (profile: Profile, { resetForm }) => {
      signup(profile);
      resetForm();
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center login-background">
      <div className="container col-md-4 col-sm-12">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {toast && <p className="text-primary">{toast}</p>}

        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-danger fst-italic">{formik.errors.name}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger fst-italic">{formik.errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger fst-italic">{formik.errors.password}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Retype Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Retype your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-danger fst-italic">{formik.errors.confirmPassword}</div>
            )}
          </div>

          {/* Submit */}
          {isLoading ? (
            <button className="btn btn-sm btn-primary" type="submit" disabled>
              Loading...
            </button>
          ) : (
            <button className="btn btn-sm app-primary-bg-color btn-outline-light mx-1" type="submit">
              Register
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
export default Register;
