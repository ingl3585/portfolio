import React, { useState } from 'react';
import DownloadResume from '../../img/AnthonyIngleResumeSE.pdf';
import Resume from '../../img/resume.png';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Email from '../../img/email.png';
import './contact.css';

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
		<div className='contact'>
			<div className='contact-bg'></div>
			<div className='contact-wrapper'>
				<div className='contact-left'>
					<h1 className='contact-title'>Let's discuss your project</h1>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<a href={DownloadResume} download>
								<img className='contact-icon' src={Resume} alt='resume-icon' />
								Resume
							</a>
						</div>
						<div className='contact-info-item'>
							<a
								href='https://www.linkedin.com/in/anthonyingle/'
								target='_blank'
								rel='noreferrer'>
								<img
									className='contact-icon'
									src={Linkedin}
									alt='linkedin-icon'
								/>
								LinkedIn
							</a>
						</div>
						<div className='contact-info-item'>
							<a
								href='https://github.com/ingl3585'
								target='_blank'
								rel='noreferrer'>
								<img className='contact-icon' src={Github} alt='github-icon' />
								GitHub
							</a>
						</div>
						<div className='contact-info-item'>
							<a href='mailto: ingleanthonyco@gmail.com'>
								<img className='contact-icon' src={Email} alt='email-icon' />
								Email
							</a>
						</div>
					</div>
				</div>
				<div className='contact-right'>
					<p className='contact-desc'>Contact Me</p>
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
