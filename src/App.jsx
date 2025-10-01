import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// 🔹 Функция валидации
const validate = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Full name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!values.course) {
    errors.course = "Please select a course";
  }

  if (!values.gender) {
    errors.gender = "Please select gender";
  }

  if (!values.dob) {
    errors.dob = "Date of birth is required";
  }

  if (!values.city) {
    errors.city = "City is required";
  }

  if (!values.country) {
    errors.country = "Country is required";
  }

  if (values.zip && !/^[0-9]+$/.test(values.zip)) {
    errors.zip = "Zip Code must contain only numbers";
  }

  return errors;
};

export default function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Course Application</h2>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          course: "",
          gender: "",
          dob: "",
          city: "",
          country: "",
          phone: "",
          education: "",
          address: "",
          state: "",
          zip: "",
        }}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          {/* Full Name */}
          <div>
            <label>Full name:</label>
            <Field name="fullName" type="text" className="input" />
            <ErrorMessage name="fullName" component="div" className="error" />
          </div>

          {/* Email */}
          <div>
            <label>Email:</label>
            <Field name="email" type="email" className="input" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          {/* Password */}
          <div>
            <label>Password:</label>
            <Field name="password" type="password" className="input" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          {/* Course */}
          <div>
            <label>Course:</label>
            <div>
              <label><Field type="radio" name="course" value="Course A" /> Course A</label>
              <label><Field type="radio" name="course" value="Course B" /> Course B</label>
              <label><Field type="radio" name="course" value="Course C" /> Course C</label>
            </div>
            <ErrorMessage name="course" component="div" className="error" />
          </div>

          {/* Gender */}
          <div>
            <label>Gender:</label>
            <div>
              <label><Field type="radio" name="gender" value="Male" /> Male</label>
              <label><Field type="radio" name="gender" value="Female" /> Female</label>
            </div>
            <ErrorMessage name="gender" component="div" className="error" />
          </div>

          {/* Date of birth */}
          <div>
            <label>Date of Birth:</label>
            <Field name="dob" type="date" className="input" />
            <ErrorMessage name="dob" component="div" className="error" />
          </div>

          {/* City */}
          <div>
            <label>City:</label>
            <Field name="city" type="text" className="input" />
            <ErrorMessage name="city" component="div" className="error" />
          </div>

          {/* Country */}
          <div>
            <label>Country:</label>
            <Field as="select" name="country" className="input">
              <option value="">Select country</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </Field>
            <ErrorMessage name="country" component="div" className="error" />
          </div>

          {/* Optional fields */}
          <div>
            <label>Phone:</label>
            <Field name="phone" type="text" className="input" />
          </div>

          <div>
            <label>Education:</label>
            <Field as="select" name="education" className="input">
              <option value="">Select education</option>
              <option value="School">School</option>
              <option value="College">College</option>
              <option value="University">University</option>
            </Field>
          </div>

          <div>
            <label>Address:</label>
            <Field as="textarea" name="address" className="input" />
          </div>

          <div>
            <label>State:</label>
            <Field name="state" type="text" className="input" />
          </div>

          <div>
            <label>Zip Code:</label>
            <Field name="zip" type="text" className="input" />
            <ErrorMessage name="zip" component="div" className="error" />
          </div>

          {/* Submit button */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
