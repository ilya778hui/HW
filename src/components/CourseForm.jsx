import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const countries = ['Kazakhstan', 'USA', 'UK', 'Russia', 'Germany', 'Other'];

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required(),
  course: Yup.string().required('Please select a course'),
  gender: Yup.string().required('Please select gender'),
  dob: Yup.string().required('Date of birth is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  zip: Yup.string().matches(/^\d*$/, 'Zip code must be numeric'),
});

const initialValues = {
  fullName: '', email: '', password: '', course: '', gender: '',
  dob: '', phone: '', education: '', address: '', state: '', city: '', country: '', zip: ''
};

export default function CourseForm() {
  return (
    <div className="card">
      <h1 className="title">Course Application</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched }) => (
          <Form>
            <FieldGroup name="fullName" label="Full name" errors={errors} touched={touched} />
            <FieldGroup name="email" label="Email" type="email" errors={errors} touched={touched} />
            <FieldGroup name="password" label="Password" type="password" errors={errors} touched={touched} />

            <RadioGroup name="course" label="Course" options={['Course A','Course B','Course C']} errors={errors} touched={touched} />
            <RadioGroup name="gender" label="Gender" options={['Male','Female']} errors={errors} touched={touched} />

            <FieldGroup name="dob" label="Date of birth" type="date" errors={errors} touched={touched} />
            <FieldGroup name="city" label="City" errors={errors} touched={touched} />

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <Field as="select" id="country" name="country" className={`input ${errors.country && touched.country ? 'input-error' : ''}`}>
                <option value="">-- Select country --</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </Field>
              <div className="error"><ErrorMessage name="country" /></div>
            </div>

            {/* Optional fields */}
            <FieldGroup name="phone" label="Phone (optional)" />
            <FieldGroup name="education" label="Education (optional)" as="select">
              <option value="">-- Select --</option>
              <option value="School">School</option>
              <option value="College">College</option>
              <option value="University">University</option>
            </FieldGroup>
            <FieldGroup name="address" label="Address (optional)" as="textarea" />
            <FieldGroup name="state" label="State (optional)" />
            <FieldGroup name="zip" label="Zip Code (optional)" errors={errors} touched={touched} />

            <button type="submit" className="submit-btn">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

// --- helper components ---
function FieldGroup({ name, label, type='text', as='input', errors={}, touched={}, children }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field as={as} id={name} name={name} type={type} className={`input ${errors[name] && touched[name] ? 'input-error' : ''}`}>
        {children}
      </Field>
      <div className="error"><ErrorMessage name={name} /></div>
    </div>
  );
}

function RadioGroup({ name, label, options, errors={}, touched={} }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div className={`radio-box ${errors[name] && touched[name] ? 'radio-error' : ''}`}>
        {options.map(opt => (
          <label key={opt} className="radio-item">
            <Field type="radio" name={name} value={opt} /> {opt}
          </label>
        ))}
      </div>
      <div className="error"><ErrorMessage name={name} /></div>
    </div>
  );
}
