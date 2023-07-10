import withCounter, { InjectedProps } from './withCounter';

interface Props extends InjectedProps {
	name: string;
}

/**
 * Display count value and increment on click.
 * Get count value and increment method as injected props from HOC.
 */
const CountOnHover: React.FC<Props> = ({ count, increment, name }) => {
	return (
		<>
			<h3 onMouseOver={increment} style={{ margin: 0 }}>
				Hover Count: {count}
			</h3>
			<div>Component level Prop: {name}</div>
		</>
	);
};

export default withCounter(CountOnHover);
