interface Props {
	count: number;
	increment: () => void;
}

/**
 * Display count value and increment on click.
 * Get count value and increment method from outside as props.
 */
const CountOnClick: React.FC<Props> = ({ count, increment }) => {
	return (
		<>
			<button onClick={increment}>Click Count: {count}</button>
		</>
	);
};

export default CountOnClick;
