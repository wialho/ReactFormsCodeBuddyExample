import { useState } from "react";

export const useFormInputHook = () => {
  const [submitting, setSubmitting] = useState(false);
  //checks validity only on submit and passes to parent form component
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState(undefined);

  return {
    submitting,
    setSubmitting,
    isValid,
    setIsValid,
    inputValue,
    setInputValue,
  };
};
