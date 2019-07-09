/**
 * From https://codesandbox.io/s/n5nRmZBv4
 * Allows a styled component to be created with a dynamic element
 */
import { createElement as h } from 'react';

export default Component => {
	const bucket = Object.create(null);

	const DynamicElement = props => {
		const { el } = props;

		if (typeof el !== 'string') {
			return h(Component, props);
		}

		if (bucket[el] === undefined) {
			bucket[el] = Component.withComponent(el);
		}

		return h(bucket[el], props);
	};

	const name = Component.displayName || Component.constructor.name;

	if (name) {
		DynamicElement.displayName = `DynamicElement(${name})`;
	}

	return DynamicElement;
};
