import CountOnClick from './CountOnClick';
import CountOnHover from './CountOnHover';

const Hoc = () => {
	return (
		<div>
			<h2>Higher Order Component (HOC)</h2>
			<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<CountOnClick />
				<CountOnHover name='John' />
			</div>
		</div>
	);
};

export default Hoc;
