export interface ISelect {
  options: ISelectOption[];
  value?: string;
  label: string;
  onChange: (e: string) => void;
  customValidator?: (e?: string) => boolean;
}

export interface ISelectOption {
  label: string;
  value: string;
}

export const Select = ({
  options,
  value,
  label,
  onChange,
  customValidator,
}: ISelect) => {
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
    <div>
      <label>{label}</label>
      <select onChange={change} value={value}>
        {options.map((x, i) => (
          <option key={i} value={x.value}>
            {x.label}
          </option>
        ))}
      </select>
    </div>
  );
};
