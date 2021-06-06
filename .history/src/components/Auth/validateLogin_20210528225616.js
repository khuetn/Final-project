export default function validateLogin(values) {
  let errors = {};
  //Email Errors
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //Password Errors
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  //Confirm password
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Please confirm password";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Please confirm the same password";
  }
  return errors;
}
