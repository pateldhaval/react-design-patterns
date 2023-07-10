import Hoc from './components/hoc';
import RenderProps from './components/render-props';

function App() {
	return (
		<>
			<h1>React Design Patterns</h1>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<RenderProps />
				<Hoc />
			</div>
		</>
	);
}

export default App;
