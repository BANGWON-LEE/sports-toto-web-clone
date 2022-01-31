import React from "react";
import Slider from 'react-slick';
import {Link} from "react-router-dom"
import '../../style/body.scss';
import "../../style/slick.css";
import "../../style/slick-theme.css";


const BodyForm = ({arrows, onArrows, offArrows }) => {




    function SampleNextArrow(props) {
        const { className,  onClick } = props;
        return (
            arrows === true ?
            <div
                className={className}
                style={{   display: "block", backgroundImage:"url('https://www.sportstoto.co.kr/images/main/banner_arrow.png')", transform:'rotate(180deg)', height:'30px', top:'33px' }}
                onClick={onClick}
            />

            :<div/>
        );
    }
    
    function SamplePrevArrow(props) {
        const { className,  onClick } = props;
        return (
            arrows === true ?
          <div
            className={className}
            style={{ display: "block", backgroundImage:"url('	https://www.sportstoto.co.kr/images/main/banner_arrow.png')", height:'30px' }}
            onClick={onClick}
          />

          :<div/>
        
        );
      }

    const settings = {
        dots: true,  // 슬라이드 밑에 점 보이게
        infinite: true,  // 무한으로 반복
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,  // 넘어가는 속도
        slidesToShow: 1,  // 4장씩 보이게
        slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
        centerMode: true,
        centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
        arrows: false
    };

    const settings2 = {
        dots: false,  // 슬라이드 밑에 점 보이게
        infinite: true,  // 무한으로 반복
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,  // 넘어가는 속도
        slidesToShow: 4,  // 4장씩 보이게
        slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
        centerMode: true,
        centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="bodyTotal">
            <div className="bodyBack">
                <Slider {...settings} dotsClass="test-css" >
                    <div className="bodyImgBack">
                        <div className="introImg1"/>
                    </div>
                    <div className="bodyImgBack">
                        <div className="introImg2"/>
                    </div>
                </Slider>
            </div>
            <div className="bodyMiddleBack">
                <div className="middleIconBack">
                    <div className="middleIcon">
                        <Link className="iconLink" to="#">
                            <div className="iconBtn">
                                <img src="https://www.sportstoto.co.kr/images/main/calendar.jpg" className="iconImg" />
                            </div>
                            <span className="iconText">
                                게임일정
                            </span>
                        </Link>
                    </div>
                    <div className="middleIcon">
                        <Link className="iconLink" to="#">    
                            <div className="iconBtn">
                                <img src="	https://www.sportstoto.co.kr/images/main/result.png" className="iconImg"/>
                            </div>
                            <span className="iconText">
                                게임결과
                            </span>
                        </Link>
                    </div>
                    <div className="middleIcon">
                        <Link className="iconLink" to="#">
                            <div className="iconBtn">
                                <img src="https://www.sportstoto.co.kr/images/main/rate.jpg" className="iconImg" />
                            </div>
                            <span className="iconText">
                                배당률 보기
                            </span>
                        </Link>
                    </div>
                    <div className="middleIcon">
                        <Link className="iconLink" to="#">
                            <div className="iconBtn">
                                <img src="https://www.sportstoto.co.kr/images/main/lookup.png" className="iconImg" />
                            </div>
                            <span className="iconText">
                                적중확인
                            </span>
                        </Link>
                    </div>
                    <div className="middleIcon">
                        <Link className="iconLink" to="#">
                            <div className="iconBtn">
                                <img src="https://www.sportstoto.co.kr/images/main/location.png" className="iconImg" />
                            </div>
                            <span className="iconText">
                                판매점 찾기
                            </span>
                        </Link>
                    </div>
                    <div className="middleIcon">
                        <Link className="iconLink" to="#">
                            <div className="iconBtn">
                                <img src="https://www.sportstoto.co.kr/images/main/online.jpg" className="iconImg" />
                            </div>
                            <span className="iconText">
                                온라인 구매
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="middleContentBack">
                    <div className="middleNoticeBack">
                        <div className="middleNoticeInner">
                            <div className="noticeName">
                                <h3 className="notice">
                                    공지사항
                                </h3>
                                <Link className="noticeMore" to="#">
                                    더보기+
                                </Link>
                            </div>
                            <ul className="contentUl">
                                <li className="contentLi">
                                    <Link className="noticeContent" to="#">
                                    · [2021년] 고정배당률 투표권 연간 발매액 및 통합 환급률 공지
                                    </Link>
                                    <span className="noticeDate">
                                        2022.01.03
                                    </span>
                                </li>
                                <li className="contentLi">
                                    <Link className="noticeContent" to="#">
                                    · [2021년] 고정배당률 투표권 연간 발매액 및 통합 환급률 공지
                                    </Link>
                                    <span className="noticeDate">
                                        2022.01.03
                                    </span>
                                </li>
                                <li className="contentLi">
                                    <Link className="noticeContent" to="#">
                                    · [2021년] 고정배당률 투표권 연간 발매액 및 통합 환급률 공지
                                    </Link>
                                    <span className="noticeDate">
                                        2022.01.03
                                    </span>
                                </li>
                                <li className="contentLi">
                                    <Link className="noticeContent" to="#">
                                    · [2021년] 고정배당률 투표권 연간 발매액 및 통합 환급률 공지
                                    </Link>
                                    <span className="noticeDate">
                                        2022.01.03
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="cleanSportsNotice" to='#'>
                        <div className="cleanInner">
                            <div className="claenMainTitle">
                                <p className="cleanTitle01">
                                    불법 스포츠도박사이트
                                </p>
                                <p className="cleanTitle02">
                                    신고 바로가기
                                </p>
                            </div>
                            <div className="cleanContent">
                                <div className="cleanMore">
                                    자세히보기 
                                </div>
                                <div className="cleanImg">
                                    <img src="https://www.sportstoto.co.kr/images/main/report.png"  className="cleanImgIcon" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className="guideNotice" to='#'>
                        <div className="guideInner">
                            <div className="guideTitle">
                                <p className="guideTitle01">
                                    토토가이드
                                </p>
                                <p className="guideTitle02">
                                    한 번에 보는 체육진흥투표권 발매정보
                                </p>
                            </div>
                            <div className="guideContent">
                                <div className="guideMore">
                                    자세히보기  
                                </div>
                                <div className="guideImg">
                                    <img src="https://www.sportstoto.co.kr/images/main/box_toto.png" className="guideImgIcon" />
                                </div>
                            </div>
                        </div>    
                    </Link>
                </div>
            </div>
            <div className="noticeSliderTotal">
                <div className="noticeSliderBack">
                    <div className="slideImgBack" onMouseLeave={offArrows} onMouseEnter={onArrows}>
                        <Slider {...settings2}   >
                            <Link to="#" className="slideImgLink">
                                <img src="https://www.sportstoto.co.kr/images/bbs/popup/1620705837_PC.jpg" className="slideImg" />
                            </Link>
                    
                            <Link to="#" className="slideImgLink">
                                <img src="https://www.sportstoto.co.kr/images/main/help_new.jpg" className="slideImg" />
                            </Link>
                        
                            <Link to="#" className="slideImgLink">
                                <img src="	https://www.sportstoto.co.kr/images/main/wla_new.png" className="slideImg" />
                            </Link>
                        
                            <Link to="#" className="slideImgLink">
                                <img src="https://www.sportstoto.co.kr/images/main/singo.png" className="slideImg" />
                            </Link>
                            <Link to="#"className="slideImgLink">
                                <img src="https://www.sportstoto.co.kr/images/bbs/popup/1620705837_PC.jpg" className="slideImg" />
                            </Link>
                        
                            <Link to="#" className="slideImgLink">
                                <img src="https://www.sportstoto.co.kr/images/main/help_new.jpg" className="slideImg" />
                            </Link>
                            <Link to="#" className="slideImgLink">
                                <img src="https://www.sportstoto.co.kr/images/main/refund_new.png" className="slideImg" />
                            </Link>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default BodyForm
