import { useEffect } from "react";

export interface IInput extends IFormInputHandlers {
  placeholder?: string;
  readOnly?: boolean;
  // onIsFormSubmissionValid checks only on submission,
  // the custom validator is a great place to add special
  // form submission validations
  customValidator?: (e: any) => boolean;
}

export interface IFormInputHandlers {
  value?: any;
  onChange?: (e?: any) => void;
  onIsFormSubmissionValid: (e: boolean) => void;
  isSubmitting: boolean;
}

export const TextInput = ({
  placeholder,
  value,
  readOnly,
  onChange,
  customValidator,
  onIsFormSubmissionValid,
  isSubmitting,
}: IInput) => {
  const isValid = (e: string): boolean => {
    // do things here to check validity
    // also check for custom validation
    let valid = true;

    if (customValidator) {
      valid = customValidator(e);
    }

    return valid;
  };

  useEffect(() => {
    if (isSubmitting) {
      onIsFormSubmissionValid(isValid(value));
    }
  }, [isValid, isSubmitting]);

  const change = (e: any) => {
    const val = e as unknown as string;
    const valid = isValid(val);

    if (valid && onChange) {
      onChange(val);
    }
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={change}
      readOnly={readOnly}
    />
  );
};
