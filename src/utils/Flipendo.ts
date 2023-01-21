export const Flipendo = (baseUrl: string = '/api', defaultRequest: RequestInit = {}) => {
	const { headers, ...rest } = defaultRequest;
	const fetch = (path: string = '', config: RequestInit = {}) => {
		const promise = window.fetch(baseUrl + path, {
				...rest,
				...config,
				headers: {
					...headers,
					...config.headers,
				}
			}
		);

		return {
			json: async () => {
				const response = await promise;
				if (!response.ok) {
					return Promise.reject(await response.json());
				}
				return response.json();
			},
			text: async () => {
				const response = await promise;
				if (!response.ok) {
					return Promise.reject(await response.text());
				}
				return response.text();
			}
		}

	}
	let params: string = ''

	const methode = {
		get: (url: string, config?: RequestInit|any) => {
			return fetch(url + params, { ...config, method: 'GET' });
		},
		post: (url: string, data: unknown, config?: RequestInit) => {
			return fetch(url + params,
				{
					... config,
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						...config?.headers,
						'Content-Type': 'application/json',
						Accept: 'application/json',
						'custom-post-header': 'custom-post-header',
					}
				})
		}
	}

	return {
		params: (objParams:any) => {
			params = '?'
			Object.entries(objParams).map((key:any,id) => {
				params !== '?' ? params += '&' : null
				params += `${key[0]}=${key[1]}`
			})
			return methode
		},
		...methode
	}
}
