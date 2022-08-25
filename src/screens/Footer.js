import React, { useState } from "react";
import ModalScreen from "../components/ModalScreen";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="footer di-fl-col">
      <div className="footer-header">
        <h2>진행 방식 안내</h2>
      </div>
      <div className="footer-body di-fl-col">
        <div className="about">
          <h4>SET 1, 2, 4</h4>
          <div className="rule">
            <div className="rule-container">
              <span className="rule-title">게임 모드</span>
              <span className="rule-text">스피드 팀전 (커스텀 모드)</span>
            </div>
            <div className="rule-container">
              <span className="rule-title">경기 방식</span>
              <span className="rule-text">
                경기는 5라운드 3선승으로 진행되며, 특정 팀이 3승을 선취하는 경우
                종료.
                <br />
                [1라운드]▶︎[2라운드]▶︎[3라운드]▶︎[4라운드]▶︎[5라운드]
                <br />
                라운드 합산 점수가 동률인 경우 1위 팀 해당 라운드 승.
              </span>
            </div>
          </div>
        </div>
        <div className="about">
          <h4>SET 3</h4>
          <div className="rule">
            <div className="rule-container">
              <span className="rule-title">게임 모드</span>
              <span className="rule-text">아이템 팀전 (커스텀 모드)</span>
            </div>
            <div className="rule-container">
              <span className="rule-title">경기 방식</span>
              <p className="rule-text">
                경기는 5라운드 3선승으로 진행되며, 특정 팀이 3승을 선취하는 경우
                종료.
                <br />
                [1라운드]▶︎[2라운드]▶︎[3라운드]▶︎[4라운드]▶︎[5라운드]
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <h4>ACE</h4>
          <div className="rule">
            <div className="rule-container">
              <span className="rule-title">게임 모드</span>
              <span className="rule-text">스피드 개인전 (커스텀 모드)</span>
            </div>
            <div className="rule-container">
              <span className="rule-title">경기 방식</span>
              <span className="rule-text">
                4세트 종료 후 승점이 동률인 경우에만 진행한다. 단판으로
                진행되며, 승리 팀이 최종 우승.
              </span>
            </div>
            <div className="rule-container">
              <span className="rule-title">트랙 선정</span>
              <span className="rule-text">
                4세트 종료 후 추첨으로 맵을 뽑는다.
              </span>
            </div>
          </div>
        </div>
        <div className="about">
          <h4>세팅</h4>
          <div className="rule">
            <div className="rule-container">
              <span className="rule-title">세팅</span>
              <span className="rule-text">공지 참고</span>
            </div>
          </div>
        </div>
        <div className="about">
          <h4>교체 방식</h4>
          <div className="rule">
            <div className="rule-container">
              <span className="rule-title">미사일 선물</span>
              <span className="rule-text">
                선수 교체. 진행자가 지명하는 선수와 후보 교체.
              </span>
            </div>
            <div className="rule-container">
              <span className="rule-title">타이어 선물</span>
              <span className="rule-text">
                선수 팀 교체. 진행자가 지명하는 선수 팀 교체.
              </span>
            </div>
            <div className="rule-container">
              <span className="rule-text">
                모든 클럽원이 플레이를 할수 있기 위함과 팀 밸런스를 맞추기 위한
                목적.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last di-fl-row">
        <div className="di-fl-col">
        <span>
          @Made By{" "}
          <a href="https://open.kakao.com/me/jcmaker" target="_blank" rel="noreferrer" style={{color: "#ffa500"}}>
            Navy_주녕
          </a>
        </span>
        <span>ver1.10.8</span>
        </div>
        <div className="di-fl-col">
          <a className="span-link"  
            href="https://open.kakao.com/o/gt4C7LJc"
            target="_blank"
            rel="noreferrer">친선문의</a>
          <a className="span-link"  
            href="https://navy-kartrider.web.app"
            target="_blank"
            rel="noreferrer">가입문의</a>
        </div>
      </div>
      <div className="openRule">
        {isOpen === true ? (
          <img
            alt="close"
            src="./images/open-mail.png"
            loading="lazy"
            onClick={() => {
              setIsOpen(false);
            }}
            className="clear-mui"
          />
        ) : (
          <img
            alt="show"
            src="./images/email.png"
            onClick={() => {
              setIsOpen(true);
            }}
            className="add-mui"
          />
        )}
      </div>
      <ModalScreen open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Footer;
