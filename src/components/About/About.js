import CampPic from '../../img/camping-pic.png';
import './about.css';

const About = () => {
	return (
		<div className='about'>
			<div className='about-left'>
				<div className='about-card bg'></div>
				<div className='about-card'>
					<img className='about-img' src={CampPic} alt='' />
				</div>
			</div>
			<div className='about-right'>
				<h1 className='about-title'>About Me</h1>
				<p className='about-desc'>
					I'm a meteorologist turned full stack developer based in Denver, CO. I
					am an avid lover of technology and decided to launch myself officially
					into the world of development in July 2021. I have enjoyed programming
					and continued to learn languages such as: HTML, CSS, JavaScript, and
					also Python. I will continue expand that list further as I love to
					learn and continue to advance my knowledge in the CS space. Thank you
					for taking the time to look at my portfolio and if there is anything
					you need, please let me know down below!
				</p>
			</div>
		</div>
	);
};

export default About;
