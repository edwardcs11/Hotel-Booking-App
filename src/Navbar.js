import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/Product">Produk</Link>
                </li>
                <li>
                    <Link to="/Pricelist">Daftar Harga</Link>
                </li>
                <li>
                    <Link to="/About">Tentang Kami</Link>
                </li>
                <li>
                    <Link to="/BookRoom">Pemesanan Kamar</Link>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
