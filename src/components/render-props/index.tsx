import Counter from './Counter';
import CountOnClick from './CountOnClick';
import CountOnHover from './CountOnHover';

/**
 * Used Counter component with render-prop (shared logic)
 * and rendered two different component with common logic.
 */
const RenderProps = () => {
	return (
		<>
			<h2>Render Props</h2>
			<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<Counter render={(count, increment) => <CountOnClick count={count} increment={increment} />} />
				<Counter render={(count, increment) => <CountOnHover count={count} increment={increment} />} />
			</div>
		</>
	);
};

export default RenderProps;
