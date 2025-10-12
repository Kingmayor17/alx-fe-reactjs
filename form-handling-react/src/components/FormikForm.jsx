import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Submitted:", values)}
    >
      <Form className="space-y-3">
        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" style={{ color: "red" }} />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" style={{ color: "red" }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
