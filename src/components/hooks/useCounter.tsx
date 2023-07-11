import { useState } from 'react';

/**
 * A stateful function with shared logic of counter.
 */
const useCounter = (initialCount = 0) => {
	const [count, setCount] = useState(initialCount);

	const handleIncrement = () => {
		setCount((count) => count + 1);
	};

	return {
		count,
		increment: handleIncrement
	};
};

export default useCounter;
