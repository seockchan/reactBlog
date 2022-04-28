import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Post from './Post';

function Home() {
    return (
        <>
            <main id="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>

                <section id="blog-type" className="section center type">
                    <div className="container">
                        <h3 className="section__title">새로운 강의</h3>
                        <p className="section__desc">강의와 관련된 블로그입니다. 다양한 정보를 확인하세요!!!</p>
                        <div className="blog__inner">
                            <div className="blog__cont">
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                                <Post />
                            </div>
                            <div className="blog__btn">
                                <Link to="/">더 보기</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
