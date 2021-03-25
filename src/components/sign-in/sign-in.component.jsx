import React from 'react';

import './sign-in.styles.scss';
import { auth, signInWithGoogle} from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email:"",
			password:""
		}
	}
handleSubmit = async event => {
		event.preventDefault();

		 const { email, password } = this.state;
		 try {
		 	await auth.signInWithEmailAndPassword(email, password);
		 	this.setState({email: '', password: ''});

		 } catch (error) {
		 	console.error(error);
		 }
};
handleChange = event => {
	const { value, name} = event.target;

	this.setState({ [name]: value });
};

	render() {
		const {email, password } =  this.state;
		return (
			<div className='sign-in'>
				<h2>
					I already have an account
				</h2>
				<span>
					Sign in with your email and password
				</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						onChange={this.handleChange}
						value={email}
						label='email'
						required />

					<FormInput
						name='password'
						type='password'
						onChange={this.handleChange}
						value={password}
						label='password'
						required />

						<div className='buttons'>
							<CustomButton type='submit' value='Submit Form'>
								Sign in
							</CustomButton>
							<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
								Sign in with Google
							</CustomButton>
						</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
