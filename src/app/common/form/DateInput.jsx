import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  input: { value, onChange, onBlur },
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        // importing all the DatePicker props
        {...rest}
        // new Date() = To make date into Javascript date in object
        selected={
          value
            ? Object.prototype.toString.call(value) !== "[object Date]"
              ? value.toDate()
              : value
            : null
        }
        // Redux form props
        placeholderText={placeholder}
        onChange={onChange}
        onBlur={(e, val) => onBlur(val)}
        onChangeRaw={e => e.preventDefault()}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
