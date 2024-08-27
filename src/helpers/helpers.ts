export const checkErrorStatus = (error) => {
	if (!error.response) {
		return Promise.reject(error);
	}

	const {
		response: { status },
	} = error;
	if (status === 401) {
		// Dispatch an signOut action

		return Promise.reject(error);
	} else {
		return Promise.reject(error);
	}
};

export const createAxiosInterceptors = (axios) => {
	axios.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			return checkErrorStatus(error);
		}
	);
	return axios;
};
