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
                        WEB <em>class</em>
                    </Link>
                </h1>
                <nav className="menu">
                    <h2 className="ir_so">메인 메뉴</h2>
                    <ul>
                        <li>
                            <Link to="/Login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/Login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/Login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/Login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/Login">로그인</Link>
                        </li>
                    </ul>
                </nav>
                <div className="member">
                    <Link to="/Login">
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
