import React from 'react';
import './posts.css';

export default function Post() {
    return (
        <article className="post">
            <figure className="post__header" aria-hidden="true">
                <img src="https://source.unsplash.com/800x600/?nature,water" alt="1" />
            </figure>
            <div className="post__body">
                <span className="post__cate">javascript</span>
                <div className="post__title">포스트 제목입니다.</div>
                <div className="post__desc">포스트 설명부분입니다. 포스트 설명부분입니다.</div>
                <div className="post__info">
                    <span className="author">배석찬</span>
                    <span className="date">2022-04-29</span>
                </div>
            </div>
        </article>
    );
}
