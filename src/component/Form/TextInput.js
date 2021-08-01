import React from 'react';

const TextInput = (props) => {
	return (
		<input
			className={`${props.className} form-control`}
			onChange={props.onChange}
			onBlur={props.onBlur}
			defaultValue={props.defaultValue}
			value={props.value}
		/>
	);
};

export default TextInput;
