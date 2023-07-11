import useCounter from './useCounter';

/**
 * Display count value and increment on click.
 * Get count value and increment method from Custom Hook.
 */
const OnClickHookDemo: React.FC = () => {
	const { count, increment } = useCounter(1);

	return (
		<>
			<button onClick={increment}>Click Count: {count}</button>
		</>
	);
};

export default OnClickHookDemo;
