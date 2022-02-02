import React from "react";
import { Link } from "react-router-dom";
import '../style/footer.scss'

const FooterForm = () => {

    return(
        <div className="footerTotal">
            <div className="footerBack">
                <div className="footerTop">
                    <div className="topList">
                        <ul className="totoFootUl">
                            <Link className="footLink" to="#" style={{paddingLeft:'0px'}}>
                                <li className="totoFootLi">
                                    이용약관
                                </li>
                            </Link>
                            ·
                            <Link className="footLink" to="#">
                                <li className="totoFootLi">
                                    개인정보처리방침
                                </li>
                            </Link>
                            ·
                            <Link className="footLink" to="#">
                                <li className="totoFootLi">
                                    부조리신고센터
                                </li>
                            </Link>
                            ·
                            <Link className="footLink" to="#">
                                <li className="totoFootLi">
                                    판매점 커뮤니티
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="totoSns">
                        <Link className="snsIcon" to="#">
                            <img className="snsImg" src="https://www.sportstoto.co.kr/images/main/ico_facebook.gif"/>
                        </Link>
                        <Link className="snsIcon" to="#">
                            <img className="snsImg" src="https://www.sportstoto.co.kr/images/main/ico_blog.gif"/>
                        </Link>
                        <Link className="snsIcon" to="#">
                            <img className="snsImg" src="	https://www.sportstoto.co.kr/images/main/ico_youtube.gif"/>
                        </Link>
                        <Link className="snsIcon" to="#">
                            <img className="snsImg" src="https://www.sportstoto.co.kr/images/main/ico_insta.png"/>
                        </Link>
                    </div>
                </div>
                <div className="footerMiddle">
                    <div className="middleFirst">
                        <div className="middleImgBack1">
                            <img className="middleImg1" src="https://www.sportstoto.co.kr/images/main/toto_logo.png"/>
                        </div>
                        <div className="middleImgBack2">
                            <span className="middleImgSpan">
                                <img className="middleImg2" src="https://www.sportstoto.co.kr/images/main/toto_icon.png"/>
                            </span>
                            <span className="middleImgSpan">
                                <img className="middleImg2" src="https://www.sportstoto.co.kr/images/main/proto_icon.png"/>
                            </span>
                        </div>
                    </div>
                    <div className="middleSecond">
                        <p className="footerContent">
                            즐거운 스포츠, 즐거운 토토, 소액으로 건전하게 즐기세요
                        </p>
                        <p className="footerContent">
                            회차당 1인 10만원까지 구매하실 수 있습니다. 청소년 및 발행대상 운동경기 관계자의 투표권 구매는 불법으<br/>로 어떠한 경우에도 투표권을 구매하거나 환급금을 수령할 수 없습니다.
                        </p>
                        <p className="footerContent">
                            체육진흥투표권(토토, 프로토)의 공식 온라인 발매사이트는 베트맨(www.betman.co.kr)입니다.<br/>
                            이외의 사이트를 통한 투표권발행 유사행위는 법으로 금지되어 있습니다.<br/>
                            체육진흥투표권 적중금 지급기한은 지급개시일로 부터 1년간 입니다.
                        </p>
                    </div>
                    <div className="middleThird">
                        <div className="footMiddleBox">
                            <img className="boxImg" src="	https://www.sportstoto.co.kr/images/main/wla_0108.png"/>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="bottomBack">
                        <div className="bottomFirst">
                            <img className="bottomImg" src="	https://www.sportstoto.co.kr/images/sub/stk_en.png" />
                        </div>
                        <div className="bottomSecond">
                            <div className="bottomContent">
                                <p className="contentDetail">
                                    (주)스포츠토토코리아 ㅣ 대표자명 송영웅 ㅣ 사업자등록번호 442-81-01726     서울특별시 중구 세종대로12길 12 해남2빌딩 4~5층      고객센터 1588-4900
                                </p>
                                <p className="contentDetail">
                                    COPYRIGHTⓒ sportstotokorea CO.,LTD ALL RIGHT RESERVED
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )


}

export default FooterForm