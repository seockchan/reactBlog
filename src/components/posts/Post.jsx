import React from 'react';
import './posts.css';

export default function Post() {
    return (
        <>
            <article className="blog">
                <figure className="blog__header">
                    <a href="/"></a>
                </figure>
                <div className="blog__body">
                    <span className="blog__cate">javascript</span>
                    <div className="blog__title">포스트 제목</div>
                    <div className="blog__desc">포스트 컨텐츠</div>
                    <div className="blog__info">
                        <span className="author">
                            <a href="/">글쓴이</a>
                        </span>
                        <span className="date">2022.04.27</span>
                        <span className="modify">
                            <a href="/">수정</a>
                        </span>
                        <span className="delete">
                            <a href="/">삭제</a>
                        </span>
                    </div>
                </div>
            </article>
        </>
    );
}
