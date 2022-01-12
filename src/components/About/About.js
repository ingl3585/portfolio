import CampPic from '../../img/camping-pic.png';
import './about.css';

const About = () => {
	return (
		<div className='a'>
			<div className='a-left'>
				<div className='a-card bg'></div>
				<div className='a-card'>
					<img className='a-img' src={CampPic} alt='' />
				</div>
			</div>
			<div className='a-right'>
				<h1 className='a-title'>About Me</h1>
				{/* <p className='a-sub'>A meteorologist turned full stack developer</p> */}
				<p className='a-desc'>
					I'm a meteorologist turned full stack developer based in Denver,
					Colorado. I am an avid lover of technology and decided to launch
					myself officially into the world of development in early July 2021.
					Early on, I have enjoyed programming and continued to learn languages
					such as: HTML, CSS, JavaScript, and also Python. Soon, I will expand
					that list further as I love to learn and continue to advance my
					knowledge in the CS space. As much as I love developing and anything
					to do with computers/consoles, I am an outdoorsman at heart and enjoy
					being outside and doing anything along the lines of hiking,
					snowboarding, fishing, camping, hanging out with friends, and also
					making new ones along the way. Thank you for taking the time to look
					at my portfolio, and if there is anything you need, please let me know
					in the form down below!
				</p>
			</div>
		</div>
	);
};

export default About;
