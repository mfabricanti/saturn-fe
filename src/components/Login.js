import React from 'react';
import { Link } from 'react-router-dom'
import { TextField, Button, Typography, LinearProgress } from '@material-ui/core';
import Cookies from 'js-cookie';
import API from '../services/authenticateService'

const Login = () => {
    const [values, setValues] = React.useState({
        loading: false,
        loginError: false,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        let body = {
            nickname: document.getElementById("nickname").value,
            password: document.getElementById("password").value,
        }

        await setValues({ ...values, loading: true, });

        let user = await API.loginUser(body)

        if (user && user.error) {
            await setValues({ ...values, loginError: user.error, loading: false, });
        } else if (user && user.user && user.user.login) {

            Cookies.set('accessToken', user.user.nickname)
            Cookies.set('userId', user.user.userId)
            Cookies.set('nickname', user.user.nickname)

            await setValues({ ...values, loginError: '', loading: false, });
            window.location = "/home" //todo: melhorar por metodo react
        }

    };

    const Form = () => (
        <form onSubmit={handleSubmit}>

            {values.loading
                ? <LinearProgress style={{ margin: '30px 0px' }} color="warning" />
                : <div>
                    <TextField
                        label="Usuário"
                        margin="normal"
                        required
                        size="small"
                        fullWidth
                        id="nickname"
                        disabled={values.loading}
                    />

                    <TextField
                        label="Senha"
                        margin="normal"
                        type="password"
                        required
                        size="small"
                        autoComplete={""}
                        fullWidth
                        id="password"
                        disabled={values.loading}
                    />

                    {values.loginError
                        ? <Typography variant="subtitle2" component="div" color="red">
                            Credenciais inválidas
                        </Typography>
                        : null}

                    <Button
                        variant="contained"
                        style={{ margin: '15px 0px' }}
                        color="warning"
                        fullWidth
                        type="submit" >
                        Entrar
                    </Button>
                </div>}
        </form>
    )

    return (
        <div className="flex centerAllAxis">
            <div>
                <img src={require('../images/logo.png').default} alt="logo" />
            </div>

            <div className="login-width">
                <div className="white-box">
                    <Typography
                        variant="h4"
                        gutterBottom
                        component="div"
                        style={{ margin: '20px 0px', fontWeight: 800 }}
                    >saturn project</Typography>

                    <Form />
                </div>

                <div className="white-box">
                    <Typography className="bottomMargin" component="div" >Ainda não tem conta?</Typography>

                    {values.loading
                        ? <Button
                            disabled={values.loading}
                            color="warning"
                            variant="contained"
                            fullWidth >
                            Registrar
                        </Button>
                        : <Link to={"/register"} style={{ textDecoration: 'none' }} disabled={values.loading}>
                            <Button
                                disabled={values.loading}
                                color="warning"
                                variant="contained"
                                fullWidth >
                                Registrar
                            </Button>
                        </Link>}

                </div>
            </div>
        </div>
    )
}

export default Login;