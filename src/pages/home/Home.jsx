import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Post from './Post';

function Home() {
    return (
        <>
            <main id="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>

                <section id="quiz-type" className="section center gray">
                    <div className="container">
                        <h3 className="section__title">퀴즈</h3>
                        <p className="section__desc">웹 디자이너를 위한 강의 퀴즈입니다.</p>
                        <div className="quiz__inner">
                            <div className="quiz__header">
                                <div className="quiz__subject">
                                    <label htmlFor="quizSubject"></label>
                                    <select name="quizSubject" id="quizSubject">
                                        <option defaultValue="javascript">javascript</option>
                                        <option defaultValue="jquery">jquery</option>
                                        <option defaultValue="html">html</option>
                                        <option defaultValue="css">css</option>
                                    </select>
                                </div>
                            </div>
                            <div className="quiz__body">
                                <div className="title">
                                    <span className="quiz__num"></span>1.<span className="quiz__ask"></span>
                                    <span className="quiz__desc">식별자를 만드는 규칙이 아닌 것은?</span>
                                </div>
                                <div className="contents">
                                    <div className="quiz__selects">
                                        <label htmlFor="select1">
                                            <input
                                                className="select"
                                                type="radio"
                                                id="select1"
                                                name="select"
                                                defaultValue="1"
                                            />
                                            <span className="choice">첫 글자는 숫자를 사용할 수 있습니다.</span>
                                        </label>
                                        <label htmlFor="select2">
                                            <input
                                                className="select"
                                                type="radio"
                                                id="select2"
                                                name="select"
                                                defaultValue="2"
                                            />
                                            <span className="choice">공백을 사용할 수 없습니다.</span>
                                        </label>
                                        <label htmlFor="select3">
                                            <input
                                                className="select"
                                                type="radio"
                                                id="select3"
                                                name="select"
                                                defaultValue="3"
                                            />
                                            <span className="choice">특수기호를 사용할 수 없습니다.</span>
                                        </label>
                                        <label htmlFor="select4">
                                            <input
                                                className="select"
                                                type="radio"
                                                id="select4"
                                                name="select"
                                                defaultValue="4"
                                            />
                                            <span className="choice">키워드를 사용할 수 없습니다.</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="quiz__footer">
                                <div className="quiz__btn">
                                    <button className="comment green none">해설 보기</button>
                                    <button className="next orange ml10 none">다음 문제</button>
                                    <button className="confirm orange right">정답 확인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog-type" className="section center type">
                    <div className="container">
                        <h3 className="section__title">새로운 강의</h3>
                        <p className="section__desc">강의와 관련된 블로그입니다. 다양한 정보를 확인하세요!</p>
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
                <section id="notice-type" className="section center gray">
                    <div className="container">
                        <h3 className="section__title">새로운 소식</h3>
                        <p className="section__desc">강의와 관련된 블로그입니다. 다양한 정보를 확인하세요!</p>
                        <div className="notice__inner">
                            <article className="notice">
                                <h4>공지사항</h4>
                                <ul>
                                    <li>
                                        <Link to="/">2</Link>
                                        <span className="time">2022-03-31</span>
                                    </li>
                                    <li>
                                        <Link to="/">1</Link>
                                        <span className="time">2022-03-31</span>
                                    </li>
                                </ul>
                                <Link to="/" className="more">
                                    더 보기
                                </Link>
                            </article>
                            <article className="notice">
                                <h4>댓글</h4>
                                <ul>
                                    <li>
                                        <Link to="/">11</Link>
                                        <span className="time">2022-04-03</span>
                                    </li>
                                    <li>
                                        <Link to="/">dd</Link>
                                        <span className="time">2022-04-03</span>
                                    </li>
                                    <li>
                                        <Link to="/">2</Link>
                                        <span className="time">2022-03-31</span>
                                    </li>
                                </ul>
                                <Link to="/" className="more">
                                    더 보기
                                </Link>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
