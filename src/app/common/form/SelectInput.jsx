import React from "react";
import { Form, Label, Select } from "semantic-ui-react";

const SelectInput = ({
	input,
	type,
	placeholder,
	multiple,
	options,
	meta: { touched, error }
}) => {
	return (
		<Form.Field>
			<Select
				value={input.value || null}
				onChange={(e, data) => input.onChange(data.value)}
				options={options}
				multiple={multiple}
				placeholder={placeholder}
			/>
			{touched && error && (
				<Label basic color="red">
					{error}
				</Label>
			)}
		</Form.Field>
	);
};

export default SelectInput;
