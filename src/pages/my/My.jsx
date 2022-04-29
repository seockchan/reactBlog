import React from 'react';
import './my.css';
import { Link } from 'react-router-dom';

export default function My() {
    return (
        <>
            <main id="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>
                <section className="join-type">
                    <div className="member-form">
                        <h3>회원 정보</h3>
                        <div className="join-intro">
                            <div className="face">
                                <img
                                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt="1"
                                />
                            </div>
                            <div className="intro">웹과 코딩에 관심이 많은 사람입니다.</div>
                            <div className="intro"></div>
                        </div>
                        <div className="join-info">
                            <ul>
                                <li>
                                    <strong>이메일</strong>
                                    <span>1111@naver.com</span>
                                </li>
                                <li>
                                    <strong>닉네임</strong>
                                    <span>루피</span>
                                </li>
                                <li>
                                    <strong>이름</strong>
                                    <span>배석찬</span>
                                </li>
                                <li>
                                    <strong>번호</strong>
                                    <span>010-3333-3333</span>
                                </li>
                            </ul>
                        </div>
                        <div className="join-btn">
                            <Link to="/">수정하기</Link>
                            <Link to="/">탈퇴하기</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
