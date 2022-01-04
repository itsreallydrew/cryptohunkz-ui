import React from 'react';

const Header = ({connect}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2>CRYPTO HUNKZ</h2>
            <button onClick={connect} className="btn btn-outline-dark">Connect</button>

        </nav>
    );
};

export default Header;