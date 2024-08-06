const URL_LOGIN = 'http://localhost:3001/api/v1/user/login'
const URL_USER = 'http://localhost:3001/api/v1/user/profile'

export const postLogin = data => {
    return fetch(URL_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => response.json())

}


export const postUser = (token) => {
    return fetch(URL_USER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ token }),
    })
        .then((response) => response.json())
}

export const putUserName = (token, userName) => {
    return fetch(URL_USER, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
    })
        .then((response) => response.json())
}