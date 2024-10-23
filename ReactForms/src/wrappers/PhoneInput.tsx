import { InputMask } from "@react-input/mask";
import { IInput } from "./TextInput";
import { useEffect } from "react";

export const PhoneInput = ({
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
    <InputMask
      mask="+0 (___) ___-__-__"
      replacement={{ _: /\d/ }}
      onChange={change}
      value={value}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
};
