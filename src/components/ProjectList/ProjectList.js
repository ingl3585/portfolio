import './projectList.css';
import WeatherApp from '../../img/weather-app.gif';
import TotalWeather from '../../img/total-weather-app.gif';
import CoffeeShop from '../../img/coffee-shop.gif';

const ProjectList = () => {
	return (
		<div className='pl'>
			<div className='pl-texts'>
				<h1 className='pl-title'>Project List</h1>
				<p className='pl-desc'>
					Here are a few projects I have been working on or have worked on in
					the past. Check back soon for more projects!
				</p>
			</div>
			<div className='pl-list'>
				<div className='p-item'>
					<a
						href='https://ingl3585.github.io/total-weather-frontend/'
						target='_blank'
						rel='noreferrer'>
						<img className='p-img' src={TotalWeather} alt='total-weather-gif' />
					</a>
				</div>
				<div className='p-item'>
					<a
						href='https://ingl3585.github.io/weather-app/'
						target='_blank'
						rel='noreferrer'>
						<img className='p-img' src={WeatherApp} alt='weather-app-gif' />
					</a>
				</div>
				<div className='p-item'>
					<a
						href='https://ingl3585.github.io/coffee-shop/'
						target='_blank'
						rel='noreferrer'>
						<img className='p-img' src={CoffeeShop} alt='coffee-shop-gif' />
					</a>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default ProjectList;