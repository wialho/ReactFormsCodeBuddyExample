import { useEffect, useState } from "react";
import { IInput } from "./TextInput";

// object for easier handling
export interface ICCObject {
  ccNumber?: number;
  ccDate?: string;
  securityCode?: number;
}

// this wrapper relies on the parent sending in the right value
// so it can be translated into ICCObject
export const CreditCardInput = ({
  value,
  readOnly,
  onChange,
  customValidator,
  onIsFormSubmissionValid,
  isSubmitting,
}: IInput) => {
  const ccNumPlaceholder = "1234123412341234";
  const datePlaceholder = "12/30";
  const secCodePlaceholder = "123";

  const [cardNumber, setCardNumber] = useState<string | undefined>();
  const [date, setDate] = useState<string | undefined>();
  const [secCode, setSecCode] = useState<string | undefined>();

  const creditCard = value as ICCObject;

  const isValid = (): boolean => {
    // do things here to check validity
    // also check for custom validation
    let valid = true;

    if (customValidator) {
      valid = customValidator({
        ccNumber: cardNumber,
        ccDate: date,
        securityCode: secCode,
      });
    }

    return valid;
  };

  useEffect(() => {
    if (isSubmitting) {
      onIsFormSubmissionValid(isValid());
    }
  }, [isValid, isSubmitting]);

  const change = (e: any, onFormChange: (e: string) => void) => {
    const valid = isValid();

    if (valid) {
      onFormChange(e);
      onChange?.({
        ccNumber: cardNumber,
        ccDate: date,
        securityCode: secCode,
      });
    }
  };

  // could be further abstracted
  // one input to rule them all
  return (
    <>
      <input
        type="text"
        value={creditCard.ccNumber}
        placeholder={ccNumPlaceholder}
        onChange={(e: any) => change(e, setCardNumber)}
        name="ccNumber"
        readOnly={readOnly}
      />
      <input
        type="text"
        value={date}
        placeholder={datePlaceholder}
        onChange={(e: any) => change(e, setDate)}
        name="exp"
        readOnly={readOnly}
      />
      <input
        type="text"
        value={secCode}
        placeholder={secCodePlaceholder}
        onChange={(e: any) => change(e, setSecCode)}
        name="secCode"
        readOnly={readOnly}
      />
    </>
  );
};
