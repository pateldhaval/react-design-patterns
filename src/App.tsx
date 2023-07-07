import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	const handleCount = () => {
		setCount((count) => count + 1);
	};

	return (
		<>
			<button onClick={handleCount}>Count: {count}</button>
		</>
	);
}

export default App;
