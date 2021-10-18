import React from 'react';
import { Divider } from '@material-ui/core';

const FeedList = () => {
    let posts = [0, 1, 2]

    return (
        <div className="flex column" >
            {posts
                ? posts.map((item, idx) => (
                    <div key={idx} className="white-box white-box-left flex">
                        <img src={require('../../images/logo.png').default} alt="logo" width="350px" />

                        <div className="flex column fullWidth">
                            <strong>@mfabricanti</strong>
                            <span>Texto do comentario</span>
                            <Divider style={{ margin: '10px 0px', color: '#dbdbdb' }} />
                        </div>
                    </div>
                ))
                : null}
        </div>
    )
}

export default FeedList;