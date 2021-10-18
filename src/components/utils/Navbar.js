import React from 'react';
import { Button } from '@material-ui/core';
import Cookies from 'js-cookie';
import API from '../../services/authenticateService'

const Navbar = () => {

    const handleLogout = async (event) => {
        event.preventDefault();

        let body = {
            accessToken: Cookies.get('accessToken')
        }

        await API.logoutUser(body)
        window.location = "/login" //todo: melhorar por metodo react
    }

    return (
        <div className="navbar">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={require('../../images/logo.png').default} alt="logo" width="45px" />
                <strong>@{Cookies.get('nickname')}</strong>
            </div>

            <div>
                <strong>2021 © Saturn</strong>

                <Button
                    variant="contained"
                    style={{ margin: '0px 15px' }}
                    color="warning"
                    onClick={handleLogout} >
                    Sair
                </Button>
            </div>
        </div>
    )
}

export default Navbar;