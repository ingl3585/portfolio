import React, { useState } from 'react';
import './contact.css';
import Email from '../../img/email.png';

const Contact = () => {
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});
	const { firstName, lastName, email, message } = data;

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(
				'https://v1.nocodeapi.com/ingl3585/google_sheets/CoYpzKbitMpZbKry?tabId=Sheet1',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify([
						[firstName, lastName, email, message, new Date().toLocaleString()],
					]),
				}
			);
			await response.json();
			setData({
				...data,
				firstName: '',
				lastName: '',
				email: '',
				message: '',
			});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className='c'>
			<div className='c-bg'></div>
			<div className='c-wrapper'>
				<div className='c-left'>
					<h1 className='c-title'>Let's discuss your project</h1>
					<div className='c-info'>
						<div className='c-info-item'>
							<img className='c-icon' src={Email} alt='email-icon' />
							ingleanthonyco@gmail.com
						</div>
					</div>
				</div>
				<div className='c-right'>
					<p className='c-desc'>
						<b>What's your story?</b> Get in touch. Always freelancing if the
						right project comes along.
					</p>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='First Name'
							name='firstName'
							value={firstName}
							onChange={handleChange}
						/>
						<input
							type='text'
							placeholder='Last Name'
							name='lastName'
							value={lastName}
							onChange={handleChange}
						/>
						<input
							type='text'
							placeholder='Email'
							name='email'
							value={email}
							onChange={handleChange}
						/>
						<textarea
							rows='5'
							placeholder='Message'
							name='message'
							value={message}
							onChange={handleChange}
						/>
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
