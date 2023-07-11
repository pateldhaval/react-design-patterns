import Counter from './Counter';
import OnClickRenderPropDemo from './OnClickRenderPropDemo';
import OnHoverRenderPropDemo from './OnHoverRenderPropDemo';

/**
 * Used Counter component with render-prop (shared logic)
 * and rendered two different component with common logic.
 */
const RenderProp = () => {
	return (
		<div>
			<h2>Render Props</h2>
			<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<Counter render={(count, increment) => <OnClickRenderPropDemo count={count} increment={increment} />} />
				<Counter render={(count, increment) => <OnHoverRenderPropDemo count={count} increment={increment} />} />
			</div>
		</div>
	);
};

export default RenderProp;
