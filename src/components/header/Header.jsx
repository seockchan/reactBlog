import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../App.css';

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 className="logo">
                    <Link to="/">
                        React <em>Blog</em>
                    </Link>
                </h1>
                <nav className="menu">
                    <h2 className="ir_so">메인 메뉴</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Join">Join</Link>
                        </li>
                        <li>
                            <Link to="/View">Post</Link>
                        </li>
                        <li>
                            <Link to="/Write">Write</Link>
                        </li>
                    </ul>
                </nav>
                <div className="member">
                    <Link to="/My">
                        <img
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt="1"
                        />
                    </Link>
                    <Link to="/Login">배석찬님 환영합니다.</Link>
                </div>
            </header>
        </>
    );
}
