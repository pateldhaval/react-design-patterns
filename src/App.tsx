import Hoc from './components/hoc';
import Hooks from './components/hooks';
import RenderProps from './components/render-props';

function App() {
	return (
		<>
			<h1>React Design Patterns</h1>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
				<RenderProps />
				<Hoc />
				<Hooks />
			</div>
		</>
	);
}

export default App;
