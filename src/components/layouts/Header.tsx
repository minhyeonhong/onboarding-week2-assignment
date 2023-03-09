import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            Header
            <div>
                <Link to="/main">main</Link>
                <Link to="/reservations">cart</Link>
            </div>
        </div>
    );
};

export default Header;