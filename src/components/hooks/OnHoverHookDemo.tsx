import useCounter from './useCounter';

/**
 * Display count value and increment on hover.
 * Get count value and increment method from Custom Hook.
 */
const OnHoverHookDemo: React.FC = () => {
	const { count, increment } = useCounter();

	return (
		<>
			<h3 onMouseOver={increment} style={{ margin: 0 }}>
				Hover Count: {count}
			</h3>
		</>
	);
};

export default OnHoverHookDemo;
