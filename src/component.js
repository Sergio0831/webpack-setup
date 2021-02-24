export default (text = 'Hello from component.js') => {
	const element = document.createElement('div');
	element.innerHTML = text;
	return element;
};
