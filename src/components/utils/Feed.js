import React from 'react';
import FeedList from "./FeedList";

const Feed = () => (
    <div className="flex">
        <div style={{ width: '35%' }} />

        <div className="feed">
            <FeedList />
        </div>

        <div style={{ width: '35%' }} />
    </div>
)

export default Feed;