import { ComponentType, useState } from 'react';

export interface InjectedProps {
	count: number;
	increment: () => void;
}

function withCounter<T extends InjectedProps>(
	WrappedComponent: ComponentType<T>
): ComponentType<Omit<T, keyof InjectedProps>> {
	const NewComponent = (hocProps: Omit<T, keyof InjectedProps>) => {
		const [count, setCount] = useState(0);

		const handleIncrement = () => {
			setCount((count) => count + 1);
		};

		const injectedProps: InjectedProps = {
			count,
			increment: handleIncrement
		};

		return <WrappedComponent {...(hocProps as T)} {...injectedProps} />;
	};

	return NewComponent;
}

export default withCounter;
