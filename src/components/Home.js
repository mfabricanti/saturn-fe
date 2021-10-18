import React from 'react';
import Navbar from '../components/utils/Navbar';
import Feed from '../components/utils/Feed';
import { Button } from '@material-ui/core'

const Home = () => {

    return (
        <div>
            <Navbar />

            <Feed />

            <Button className="addButton">+</Button>
        </div>
    )
}

export default Home;