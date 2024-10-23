import { ReactNode } from "react";

export interface IForm {
  children: ReactNode;
  submit: () => void;
  submitText?: string;
}

// wrapper to abstract the form setup (neccesary?)
export const Form = ({ children, submit, submitText = "Submit" }: IForm) => {
  return (
    <div>
      {children}
      <div>
        <button onClick={submit}>{submitText}</button>
      </div>
    </div>
  );
};
