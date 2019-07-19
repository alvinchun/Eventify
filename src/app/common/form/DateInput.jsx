import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
	input,
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
				selected={input.value ? new Date(input.value) : null}
				// Redux form props
				placeholderText={placeholder}
				onChange={input.onChange}
				onBlur={input.onBlur}
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
