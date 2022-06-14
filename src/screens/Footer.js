import React, { useState } from "react";
import ModalScreen from "../components/ModalScreen";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="footer">
      <div className="footer-header">
        <h2>진행 방식 안내</h2>
      </div>
      <div className="footer-body">
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
            <div className="rule-container">
              <span className="rule-title">트랙 선정</span>
              <span className="rule-text">
                경기 시작 30분 전 진행된 밴픽에 따라 진행
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
              <span className="rule-text">
                경기는 5라운드 3선승으로 진행되며, 특정 팀이 3승을 선취하는 경우
                종료.
                <br />
                [1라운드]▶︎[2라운드]▶︎[3라운드]▶︎[4라운드]▶︎[5라운드]
              </span>
            </div>
            <div className="rule-container">
              <span className="rule-title">트랙 선정</span>
              <span className="rule-text">
                경기 시작 30분 전 진행된 밴픽에 따라 진행
              </span>
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
        <div className="about">
          <h4>맵 밴픽</h4>
          <div className="rule">
            <div className="rule-container">
              <span className="rule-title">스피드 전</span>
              <span className="rule-text">
                [고정맵] ▶︎ [1팀 픽] ▶︎ [2팀 밴] ▶︎ [1팀 밴] ▶︎ [2팀 픽] ▶︎ [1팀
                픽] ▶︎ [2팀 픽]
              </span>
            </div>
            <div className="rule-container">
              <span className="rule-title">아이템 전</span>
              <span className="rule-text">
                [고정맵] ▶︎ [1팀 픽] ▶︎ [2팀 밴] ▶︎ [1팀 밴] ▶︎ [2팀 픽] ▶︎ [1팀
                픽] ▶︎ [2팀 픽]
              </span>
            </div>
            <div className="rule-container">
              <span className="rule-text">
                각 팀에서 대표를 뽑아 내전 진행 30분 전까지 밴픽 진행.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last">
        <br />
        <span>
          @Made By{" "}
          <a href="https://github.com/jcmaker" target="_blank">
            Navy_주녕
          </a>
        </span>
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
            loading="lazy"
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
