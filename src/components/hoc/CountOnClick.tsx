import withCounter, { InjectedProps } from './withCounter';

interface Props extends InjectedProps {}

/**
 * Display count value and increment on click.
 * Get count value and increment method as injected props from HOC.
 */
const CountOnClick: React.FC<Props> = ({ count, increment }) => {
	return (
		<div>
			<button onClick={increment}>Click Count: {count}</button>
		</div>
	);
};

export default withCounter(CountOnClick);
