import React from 'react';
import { Field, reduxForm } from 'redux-form';

import "./ContactUs.css";

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLengthMessage = maxLength(250);
const maxLengthInput = maxLength(30);

const basicField = ({ input, label, type, meta: { touched, error, warning } }) => {
	return (
		<div class="input-row">
			<input placeholder={label} type={type} />
  			{touched && error && <span className="error">{error}</span>}
		</div>
	)
};

const basicTextArea = ({ input, label, type, meta: { touched, error, warning } }) => {
	return (
		<div class="input-row">
			<textarea {...input} placeholder={label} type={type} />
      		{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	)
};

const ContactUs = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<form onSubmit={handleSubmit} className={'formPadding'}>
			<div>
				<div>
					<Field
						name="firstName"
						component={basicField}
						type="text"
						label="First Name"
						validate={[required, maxLengthInput]}
					/>
				</div>
			</div>
			<div>
				<div>
					<Field
						name="lastName"
						component={basicField}
						type="text"
						label="Last Name"
						validate={[required, maxLengthInput]}
					/>
				</div>
			</div>
			<div>
				<div>
					<Field
						name="email"
						component={basicField}
						type="email"
						label="Email"
						validate={[required, maxLengthInput]}
					/>
				</div>
			</div>
			<div>
				<label>Message</label>
				<div>
					<Field
						name="message"
						type="text"
						component={basicTextArea}
						validate={[required, maxLengthMessage]}
						className={'commentsWidth'}
					/>
				</div>
			</div>
			<div>
				<button type="submit" disabled={pristine || submitting}>Submit</button>
				<button type="button" disabled={pristine || submitting} onClick={reset}>
					Clear Values
				</button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'contactUsForm' // a unique identifier for this form
})(ContactUs);