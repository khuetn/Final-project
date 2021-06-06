import React from "react";

function useFormValidation(initialState, validate, authenticate, checkLogin) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noError = Object.keys(errors).length === 0;
      if (noError) {
        authenticate();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    // event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handleBlur() {
    console.log(checkLogin);
    const validationErrors = validate(values, checkLogin);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // var data = new FormData(event.target);
    // console.log(data.get("email"));
    console.log(checkLogin);
    const validationErrors = validate(values, checkLogin);
    setErrors(validationErrors);
    setSubmitting(true);
  }
  console.log(values);
  return {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  };
}

export default useFormValidation;