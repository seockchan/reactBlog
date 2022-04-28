import React from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
    return (
        <>
            <article className="blog">
                <figure className="blog__header">
                    <img src="https://source.unsplash.com/800x600/?nature,water" alt="dd"></img>
                </figure>
                <div className="blog__body">
                    <span className="blog__cate">javascript</span>
                    <div className="blog__title">10</div>
                    <div className="blog__desc">10</div>
                    <div className="blog__info">
                        <span className="author">
                            <Link to="#">배석</Link>
                        </span>
                        <span className="date">2022-04-14</span>
                        <span className="modify">
                            <Link to="#">수정</Link>
                        </span>
                        <span className="delete">
                            <Link to="#">삭제</Link>
                        </span>
                    </div>
                </div>
            </article>
        </>
    );
}
