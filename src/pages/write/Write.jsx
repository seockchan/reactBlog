import React from 'react';
import './write.css';

export default function Write() {
    return (
        <>
            <main id="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>
                <section id="blog-type" className="section center mb100">
                    <div className="container">
                        <h3 className="section__title">게시글 작성하기</h3>
                        <p className="section__desc">강의와 관련된 블로그를 작성해주세요!</p>
                        <div className="blog__inner">
                            <div className="blog__write">
                                <form
                                    action="blogWriteSave.php"
                                    name="blogWrite"
                                    method="post"
                                    encType="multipart/form-data"
                                >
                                    <fieldset>
                                        <legend className="ir_so">블로그 게시글 작성 영역</legend>
                                        <div>
                                            <label htmlFor="blogCategory">카테고리</label>
                                            <select name="blogCategory" id="blogCategory">
                                                <option value="javascript">javascript</option>
                                                <option value="jquery">jquery</option>
                                                <option value="html">html</option>
                                                <option value="css">css</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="blogTitle">제목</label>
                                            <input
                                                type="text"
                                                name="blogTitle"
                                                id="blogTitle"
                                                placeholder="제목을 입력해주세요!"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="blogContents">내용</label>
                                            <textarea
                                                name="blogContents"
                                                id="blogContents"
                                                placeholder="내용을 입력해주세요!"
                                                required
                                            ></textarea>
                                        </div>
                                        <div>
                                            <label htmlFor="blogFile">파일</label>
                                            <input
                                                type="file"
                                                name="blogFile"
                                                id="blogFile"
                                                accept=".jpg,.jpeg,.png,.gif"
                                                placeholder="사진을 넣어주세요! 사진은 jpg, gif, png 파일만 지원이 됩니다."
                                            ></input>
                                        </div>
                                        <div className="blog__btn">
                                            <button type="submit" value="저장하기">
                                                저장하기
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
