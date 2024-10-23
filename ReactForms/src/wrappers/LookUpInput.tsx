export interface ILookUpInput {
  onChange: (e: string) => void;
}

export const LookUpInput = ({
  placeholder,
  value,
  onChange,
  customValidator,
}: ILookUpInput) => {
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
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={change}
    />
  );
};
