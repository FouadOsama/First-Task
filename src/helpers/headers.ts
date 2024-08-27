
export const getHeaders = (config) => {
	let user = localStorage.getItem("user") || null;

	let headers = {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Platform: 'dashboard',
		...config,
	};

	if (user) {
		headers['Authorization'] = `Bearer ${user['data'].access_token}`;
	}

	return headers;
};
