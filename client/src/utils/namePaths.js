export const pathToUrl = (path, params) => {
    const url = Object.keys(params).reduce((acc, param) => {
        return acc.replace(`:${param}`, [params[param]])
    }, path);

    return url
};  