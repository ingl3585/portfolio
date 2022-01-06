import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProjectList from './components/ProjectList/ProjectList';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Intro />
			<About />
			<ProjectList />
		</div>
	);
};

export default App;
