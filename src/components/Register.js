import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { TextField, Button, Typography, LinearProgress } from '@material-ui/core';
import API from '../services/registerService'

const Register = () => {
    const [values, setValues] = useState({
        loading: false,
        registerSuccessful: false,
        registerError: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        let body = {
            nickname: document.getElementById("nickname").value,
            password: document.getElementById("password").value,
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
        }

        await setValues({ ...values, loading: true, });

        let user = await API.addUser(body)

        if (user && user.error) {
            setValues({ ...values, registerError: user.error, loading: false, });
        } else if (user && user.user && user.user.id) {
            setValues({ ...values, registerError: '', registerSuccessful: true, loading: false, });
        }

    };

    const UserGenerated = () => (
        <div>
            <Typography className="green" variant="h6">
                Usuário gerado com sucesso.
            </Typography>
        </div>
    )

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

                    <TextField
                        label="Nome completo"
                        margin="normal"
                        required
                        size="small"
                        fullWidth
                        id="fullName"
                        disabled={values.loading}
                    />

                    <TextField
                        label="E-mail"
                        margin="normal"
                        required
                        type="email"
                        size="small"
                        fullWidth
                        id="email"
                        disabled={values.loading}
                    />

                    <Typography variant="subtitle2" component="div" color="red">
                        {values.registerError}
                    </Typography>

                    <Button
                        variant="contained"
                        style={{ margin: '15px 0px' }}
                        color="warning"
                        fullWidth
                        type="submit" >
                        Registrar
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

                    {values.registerSuccessful ? <UserGenerated /> : <Form />}
                </div>

                <div className="white-box">
                    <Typography className="bottomMargin" component="div" >Já tem conta?</Typography>

                    {values.loading
                        ? <Button
                            disabled={values.loading}
                            color="warning"
                            variant="contained"
                            fullWidth >
                            Entrar
                        </Button>
                        : <Link to={"/login"} style={{ textDecoration: 'none' }} disabled={values.loading}>
                            <Button
                                disabled={values.loading}
                                color="warning"
                                variant="contained"
                                fullWidth >
                                Entrar
                            </Button>
                        </Link>}

                </div>
            </div>
        </div>
    )
}

export default Register;