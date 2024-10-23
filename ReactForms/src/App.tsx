import "./App.css";
import { Form } from "./wrappers/Form";
import { useFormInputHook } from "./useFormInputHook";
import { TextInput } from "./wrappers/TextInput";
import { EmailInput } from "./wrappers/EmailInput";
import { PhoneInput } from "./wrappers/Button";
import { CreditCardInput } from "./wrappers/CreditCardInput";

function App() {
  const firstName = useFormInputHook();
  const lastName = useFormInputHook();
  const email = useFormInputHook();
  const phone = useFormInputHook();
  const creditCard = useFormInputHook();

  const onSubmit = () => {
    //check validations
    if (
      !firstName.isValid ||
      !lastName.isValid ||
      !email.isValid ||
      !phone.isValid ||
      !creditCard.isValid
    ) {
      return;
    }

    // make api call
  };

  return (
    <Form submit={onSubmit} submitText="Submit">
      <TextInput
        isSubmitting={firstName.submitting}
        onIsFormSubmissionValid={firstName.setIsValid}
        value={firstName.isValid}
        onChange={firstName.setInputValue}
      />
      <TextInput
        isSubmitting={lastName.submitting}
        onIsFormSubmissionValid={lastName.setIsValid}
        value={lastName.isValid}
        onChange={lastName.setInputValue}
      />
      <PhoneInput
        isSubmitting={firstName.submitting}
        onIsFormSubmissionValid={firstName.setIsValid}
        value={firstName.isValid}
        onChange={firstName.setInputValue}
      />
      <EmailInput
        isSubmitting={firstName.submitting}
        onIsFormSubmissionValid={firstName.setIsValid}
        value={firstName.isValid}
        onChange={firstName.setInputValue}
      />
      <CreditCardInput
        isSubmitting={firstName.submitting}
        onIsFormSubmissionValid={firstName.setIsValid}
        value={firstName.isValid}
        onChange={firstName.setInputValue}
      />
    </Form>
  );
}

export default App;
