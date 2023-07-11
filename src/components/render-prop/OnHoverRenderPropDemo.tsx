interface Props {
	count: number;
	increment: () => void;
}

/**
 * Display count value and increment on hover.
 * Get count value and increment method from outside as props.
 */
const OnHoverRenderPropDemo: React.FC<Props> = ({ count, increment }) => {
	return (
		<>
			<h3 onMouseOver={increment} style={{ margin: 0 }}>
				Hover Count: {count}
			</h3>
		</>
	);
};

export default OnHoverRenderPropDemo;
