import './Intro.css';

const Intro = () => {
	return (
		<div className='i'>
			<div className='i-left'>
				<div className='i-left-wrapper'>
					<h2 className='i-intro'>Hello, my name is</h2>
					<h1 className='i-name'>Tony Ingle</h1>
					<div className='i-title'>
						<div className='i-title-wrapper'>
							<div className='i-title-item'> Web Developer</div>
							<div className='i-title-item'> UI/UX Designer</div>
							<div className='i-title-item'> Meteorologist</div>
							<div className='i-title-item'> Stock Trader</div>
						</div>
					</div>
				</div>
			</div>
			<div className='i-right'>Right</div>
		</div>
	);
};

export default Intro;
