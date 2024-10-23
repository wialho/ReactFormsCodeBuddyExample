import { IInput } from "./TextInput";

export const EmailInput = ({
  placeholder,
  value,
  onChange,
  customValidator,
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

  const change = (e: any) => {
    const val = e as unknown as string;
    const valid = isValid(val);

    if (valid && onChange) {
      onChange(val);
    }
  };

  return (
    <input
      type="email"
      value={value}
      placeholder={placeholder}
      onChange={change}
    />
  );
};
