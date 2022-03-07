import authService from "../services/authService";

export default async function callApiWithToken(url, options = {}) {
    let token = JSON.parse(localStorage.getItem('token'));
    options = {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${token.accessToken}`,
            'Content-type': 'application/json'
        }
    };
    let res = await fetch(url, options);
    if (res.status === 403) {
        const refresh = await authService.refreshToken();
        token.accessToken = refresh.data.accessToken;
        options = {
            ...options,
            headers: {
                ...options.headers,
                'Authorization': `Bearer ${token.accessToken}`
            }
        };
        return fetch(url, options).then(data => data.json());
    }
    return res.json();
}