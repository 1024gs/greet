const isUpperCase = (x) => x.toUpperCase(x) === x;
const init = (xs) => xs.slice(0, -1);
const last = (xs) => xs[xs.length -1];
const isArray = (x) => Array.isArray(x);
const isNull = (x) => x === null;

const greet = (name) => {
    if(isNull(name)) {
		return `Hello my friend.`;
    }
	if(isArray(name) && name.length <= 2) {
		return `Hello ${name.join(' and ')}.`;
    }
	if(isArray(name) && name.length > 2) {
		return `Hello ${init(name).join(', ')}, and ${last(name)}.`;
    }
	if(isUpperCase(name)) {
		return `HELLO ${name}.`;
    }
	
	return `Hello ${name}.`;
};
