import React from 'react';
import './posts.css';
import Post from './Post';

export default function Posts() {
    return (
        <>
            <section id="card-type" className="section center">
                <div className="container">
                    <h3 className="section__title">웹스토리보이 강의</h3>
                    <p className="section__desc">
                        웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다. <br />
                        Gmarket Sans Light 22px 150% #67778A
                    </p>
                    <div className="post__inner">
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
                </div>
            </section>
        </>
    );
}
