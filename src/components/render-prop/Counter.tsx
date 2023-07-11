import { useState } from 'react';

interface Props {
	render: (count: number, increment: () => void) => React.ReactNode;
	initialCount?: number;
}

/**
 * A component with shared logic of counter.
 * Render prop to control what to render with count value and increment method.
 */
const Counter: React.FC<Props> = ({ render, initialCount = 0 }) => {
	const [count, setCount] = useState(initialCount);

	const handleIncrement = () => {
		setCount((count) => count + 1);
	};

	return <>{render(count, handleIncrement)}</>;
};

export default Counter;
