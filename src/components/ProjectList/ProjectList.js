import './projectList.css';
import WeatherApp from '../../img/weather-app.gif';
import TotalWeather from '../../img/total-weather-app.gif';
import Sunnyside from '../../img/sunnyside.gif';

const ProjectList = () => {
	return (
		<div className='project-list'>
			<div className='project-list-texts'>
				<h1 className='project-list-title'>Project List</h1>
				<p className='project-list-desc'>
					Here are a few projects I have been working on or have worked on in
					the past. Check back soon for more projects!
				</p>
			</div>
			<div className='project-list-list'>
				<div className='project-list-item'>
					<a
						href='https://ingl3585.github.io/sunnyside-landing-page/'
						target='_blank'
						rel='noreferrer'>
						<img
							className='project-list-img'
							src={Sunnyside}
							alt='sunnyside-gif'
						/>
					</a>
				</div>
				<div className='project-list-item'>
					<a
						href='https://ingl3585.github.io/weather-app/'
						target='_blank'
						rel='noreferrer'>
						<img
							className='project-list-img'
							src={WeatherApp}
							alt='weather-app-gif'
						/>
					</a>
				</div>
				<div className='project-list-item'>
					<a
						href='https://ingl3585.github.io/total-weather-frontend/'
						target='_blank'
						rel='noreferrer'>
						<img
							className='project-list-img'
							src={TotalWeather}
							alt='total-weather-gif'
						/>
					</a>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default ProjectList;
