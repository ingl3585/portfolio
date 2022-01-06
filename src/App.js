import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Intro />
			<About />
			<ProjectList />
			<Contact />
		</div>
	);
};

export default App;
