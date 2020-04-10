const asyncTryCatchWrapper = async (func, ...params) => {
	try {
		const result = await func(...params);
		return result;
	} catch (error) {
		return error;
	}
};

module.exports = {
	asyncTryCatchWrapper,
};
