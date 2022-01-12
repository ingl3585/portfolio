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
				<p className='a-desc'>
					I'm a meteorologist turned full stack developer based in Denver, CO. I
					am an avid lover of technology and decided to launch myself officially
					into the world of development in early July 2021. Early on, I have
					enjoyed programming and continued to learn languages such as: HTML,
					CSS, JavaScript, and also Python. Soon, I will expand that list
					further as I love to learn and continue to advance my knowledge in the
					CS space. Thank you for taking the time to look at my portfolio, and
					if there is anything you need, please let me know down below!
				</p>
			</div>
		</div>
	);
};

export default About;
