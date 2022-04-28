import React from 'react';
import './footer.css';
import '../../App.css';

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="container">
                    <h2 className="ir_so">푸터 바로가기 메뉴</h2>
                    <div className="footer-menu">
                        <div>
                            <h3>레이아웃 영역</h3>
                            <ul>
                                <li>
                                    <a href="#">레이아웃 유형01</a>
                                </li>
                                <li>
                                    <a href="#">레이아웃 유형02</a>
                                </li>
                                <li>
                                    <a href="#">레이아웃 유형03</a>
                                </li>
                                <li>
                                    <a href="#">레이아웃 유형04</a>
                                </li>
                                <li>
                                    <a href="#">레이아웃 유형05</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>메뉴 영역</h3>
                            <ul>
                                <li>
                                    <a href="#">메뉴 유형01</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>메인 영역</h3>
                            <ul>
                                <li>
                                    <a href="#">이미지 유형01</a>
                                </li>
                                <li>
                                    <a href="#">동영상 유형02</a>
                                </li>
                                <li>
                                    <a href="#">슬라이드 유형03</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>컨텐츠 영역</h3>
                            <ul>
                                <li>
                                    <a href="#">텍스트 유형01</a>
                                </li>
                                <li>
                                    <a href="#">이미지 유형02</a>
                                </li>
                                <li>
                                    <a href="#">이미지/텍스트 03</a>
                                </li>
                                <li>
                                    <a href="#">카드 유형 04</a>
                                </li>
                                <li>
                                    <a href="#">배너 유형 05</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>게시판 영역</h3>
                            <ul>
                                <li>
                                    <a href="#">게시판</a>
                                </li>
                                <li>
                                    <a href="#">게시판 보기</a>
                                </li>
                                <li>
                                    <a href="#">게시판 수정</a>
                                </li>
                                <li>
                                    <a href="#">게시판 쓰기</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>사이트</h3>
                            <ul>
                                <li>
                                    <a href="#">웹 표준 사이트</a>
                                </li>
                                <li>
                                    <a href="#">반응형 사이트</a>
                                </li>
                                <li>
                                    <a href="#">패럴랙스 사이트</a>
                                </li>
                                <li>
                                    <a href="#">포트폴리오 사이트</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <address className="footer-rights">
                        &copy; 2022 seockchan
                        <div className="footer-sns">
                            <ul>
                                <li>
                                    <a href="#" className="ir_pm">
                                        페이스북
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="ir_pm">
                                        인스타그램
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="ir_pm">
                                        카카오톡
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="ir_pm">
                                        유튜브
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </address>
                </div>
            </footer>
        </>
    );
}
