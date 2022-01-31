import React from "react";
import  {Link}  from "react-router-dom"
import '../style/header.scss'

const HeaderForm = () => {
    return(
        <div className="totalHeader">
            <div className="headerBack">
                <div className="headerTop">
                    <div className="headerImg">
                        <img className="headerIcon" src="https://www.sportstoto.co.kr/images/main/toto_logo.png" />
                    </div>
                    <div className="headerMenu">
                        <ul className="headerUl">
                            <li className="headerLi">
                                <Link className="menuTitle" to="#" >
                                    사업소개
                                </Link>
                            </li>
                            <li className="headerLi">
                                <Link className="menuTitle" to="#" >
                                    수탁업체소개
                                </Link>
                            </li>
                            <li className="headerLi">
                                <Link className="menuTitle" to="#" >
                                    투표건센터
                                </Link>
                            </li>
                            <li className="headerLi">
                                <Link   Link className="menuTitle" to="#" >
                                    스포츠단
                                </Link>
                            </li>
                            <li className="headerLi">
                                <Link   Link className="menuTitle" to="#" >
                                    홍보센터
                                </Link>
                            </li>
                            <li className="headerLi">
                                <Link className="menuTitle" to="#" >
                                    고객센터
                                </Link>
                            </li>
                            <li className="headerLi">
                                <Link className="menuTitle" to="#" >
                                    <span className="menuLan">
                                        <img className="lanImg" src="https://www.sportstoto.co.kr/images/main/earth.png"/>
                                        <span className="lanKor">
                                            KOREA
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <div className="dropMenu" >
                            <div className="dropMenuBigBox1">
                                <div className="firstBox">
                                    <div className="boxText1">
                                        <a href="#" className="text">
                                            체육진흥투표권
                                        </a>
                                    </div>
                                    <div className="boxText2">
                                        <a href="#" className="text">
                                            BI소개
                                        </a>
                                    </div>
                                </div>
                                <div className="firstBox">
                                    <div className="boxText1">
                                        <a href="#" className="text">
                                            법령 & 약관
                                        </a>
                                        <div className="subTextBox">
                                            <p className="subText" style={{marginTop:'10px'}}>
                                                -관련법령
                                            </p>
                                            <p className="subText">
                                                -체육진흥투표권
                                            </p>
                                            <p className="subText">
                                                -고정배당률 투표권
                                            </p>
                                        </div>
                                    </div>
                                    <div className="boxText2">
                                        <a href="#" className="text">
                                            관련단체
                                        </a>
                                    </div>
                                </div>
                                <div className="firstBox">
                                    <div className="boxText1">
                                        <a href="#" className="text">
                                            공익기금 사용내역
                                        </a>
                                    </div>
                                    <div className="boxText2">
                                        <a href="#" className="text">
                                            업계 동향
                                        </a>
                                    </div>
                                </div>
                                <div className="firstBox">
                                    <div className="boxText1">
                                        <a href="#" className="text">
                                            사업연혁
                                        </a>
                                    </div>
                                    <p className="boxText2">
                                    
                                    </p>
                                </div>
                            </div>
                            <div className="dropMenuBigBox2">
                                <div className="firstBox">
                                    <div className="boxText1">
                                        <a href="text1">
                                            스포츠토토코리아 소개
                                        </a>
                                    </div>
                                    <div className="boxText2">
                                        <a href="text2">
                                            부조리 신고 센터
                                        </a>
                                    </div>
                                </div>
                                <div className="second">
                                    <div className="boxText1">
                                        <a href="text1">
                                            CI소개
                                        </a>
                                    </div>
                                    <div className="boxText2">
                                        <a href="text2">
                                            입찰공고
                                        </a>
                                    </div>
                                </div>
                                <div className="third">
                                    <div className="boxText1">
                                        <a href="text1">
                                            찾아오시는 길
                                        </a>
                                    </div>
                                    <div className="boxText2">
                                        <a href="text2">
                                            
                                        </a>
                                    </div>
                                </div>
                                <div className="fourth">
                                    <div className="boxText1">
                                        <a href="text1">
                                            채용공고
                                        </a>
                                    </div>
                                    <p className="boxText2">
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderForm;