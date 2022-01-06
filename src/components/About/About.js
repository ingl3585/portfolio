import Self from '../../img/place-holder-pic.jpeg';
import './about.css';

const About = () => {
	return (
		<div className='a'>
			<div className='a-left'>
				<div className='a-card bg'></div>
				<div className='a-card'>
					<img className='a-img' src={Self} alt='' />
				</div>
			</div>
			<div className='a-right'>
				<h1 className='a-title'>About Me</h1>
				<p className='a-sub'>Words Words Words with more Wordy Words</p>
				<p className='a-desc'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
					sodales, nisl at pulvinar maximus, nisi metus mattis felis, id
					volutpat nisl metus nec sem. Aenean non varius neque. Duis eu est id
					nunc ultricies suscipit sed in tellus. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Donec eleifend risus ac.
				</p>
			</div>
		</div>
	);
};

export default About;
