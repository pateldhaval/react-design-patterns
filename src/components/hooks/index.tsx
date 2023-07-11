import OnClickHookDemo from './OnClickHookDemo';
import OnHoverHookDemo from './OnHoverHookDemo';

const Hooks = () => {
	return (
		<div>
			<h2>Custom Hooks</h2>
			<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<OnClickHookDemo />
				<OnHoverHookDemo />
			</div>
		</div>
	);
};

export default Hooks;
