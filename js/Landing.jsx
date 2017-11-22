import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
    <div className="landing">
        <h1>Video</h1>
        <input type="text" placeholder="search" />
        <Link to="/search">or Browse All</Link>
    </div>
)

export default Landing;