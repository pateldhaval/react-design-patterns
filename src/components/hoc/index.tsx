import OnClickHocDemo from './OnClickHocDemo';
import OnHoverHocDemo from './OnHoverHocDemo';

const Hoc = () => {
	return (
		<div>
			<h2>Higher Order Component (HOC)</h2>
			<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<OnClickHocDemo />
				<OnHoverHocDemo name='John' />
			</div>
		</div>
	);
};

export default Hoc;
