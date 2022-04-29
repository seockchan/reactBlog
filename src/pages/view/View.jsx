import React from 'react';
import { Link } from 'react-router-dom';
import './view.css';

export default function View() {
    return (
        <>
            <main id="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>
                <section id="blog-type" className="center">
                    <div className="blog__label">
                        <h3 className="section__title">블로그 제목</h3>
                        <div className="blog">
                            <span className="author">
                                <a href="/">배석찬 </a>
                            </span>
                            <span className="date">2022-04-29 10:47</span>
                            <br />
                            <span className="modify">
                                <Link to="/">수정</Link>
                            </span>
                            <span className="delete">
                                <Link to="/">삭제</Link>
                            </span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="blog__layout">
                            <div className="blog__left">
                                <h4>블로그 제목</h4>
                                <p>블로그 내용입니다.</p>
                            </div>
                            <div className="blog__right">
                                <iframe
                                    title="ad"
                                    src="https://ads-partners.coupang.com/widgets.html?id=572096&template=carousel&trackingCode=AF6410864&subId=&width=300&height=300"
                                    width="300"
                                    height="300"
                                    frameBorder="0"
                                    scrolling="no"
                                    referrerPolicy="unsafe-url"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
