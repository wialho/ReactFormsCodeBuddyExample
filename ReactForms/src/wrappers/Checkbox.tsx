export interface ICheckbox {
  label: string;
  isToggle?: boolean;
  isChecked?: boolean;
  onChange: (e: boolean) => void;
}

export const Checkbox = ({
  label,
  isToggle = false,
  isChecked = false,
  onChange,
}: ICheckbox) => {
  const change = (e: any) => {
    onChange(e);
  };

  return (
    <div className={isToggle ? "toggle-switch" : "check-box"}>
      <input
        type="checkbox"
        name={label}
        checked={isChecked}
        onChange={change}
      />
      <label className="checkbox-label">{label}</label>
    </div>
  );
};
