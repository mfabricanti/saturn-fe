const axios = require('axios')

const loginUser = async (body) => {

    let user = await axios
        .post(`${process.env.REACT_APP_API_URL}/authenticate/login`, body)
        .then(res => ({ user: res.data }))
        .catch(error => ({ error: error.response.data }))

    return user;

}

const logoutUser = async (body) => {

    let user = await axios
        .post(`${process.env.REACT_APP_API_URL}/authenticate/logout`, body)
        .then(() => (true))
        .catch(error => ({ error: error.response.data }))

    return user;

}

module.exports = {
    loginUser,
    logoutUser,
}