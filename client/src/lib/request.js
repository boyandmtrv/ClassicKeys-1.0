const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);

        options.headers = {
            'content-type': 'application/json'
        };
    };

    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken
        };
    };

    return options;
};

export const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {
        return {}
    };

    const result = await response.json();

    if (!response.ok) {
        throw result;
    };

    return result;

};

export default request;


export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');