import React from 'react';
import { Field, reduxForm } from 'redux-form';

import "./ContactUs.css";

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLengthMessage = maxLength(250);
const maxLengthInput = maxLength(30);
const maxLengthPhone = maxLength(8);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	</div>
);

const renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div>
		<label>{label}</label>
		<div>
			<textarea {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	</div>
);

const ContactUs = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<form onSubmit={handleSubmit} className={'formPadding'}>
			<div>
				<div>
					<Field
						name="firstName"
						component={renderField}
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
						component={renderField}
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
						component={renderField}
						type="email"
						label="Email"
						validate={[required, maxLengthInput]}
					/>
				</div>
			</div>
			<div>
				<div>
					<Field
						name="phone"
						component={renderField}
						type="number"
						label="Phone"
						validate={[required, maxLengthPhone]}
					/>
				</div>
			</div>
			<div>
				<label>Message</label>
				<div>
					<Field
						name="message"
						type="text"
						component={renderTextArea}
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