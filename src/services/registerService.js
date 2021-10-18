const axios = require('axios')

const addUser = async (body) => {
    
    let user = await axios
        .post(`${process.env.REACT_APP_API_URL}/users`, body)
        .then(res => ({ user: res.data }))
        .catch(error => ({ error: error.response.data }))

    return user;

}

module.exports = {
    addUser,
}