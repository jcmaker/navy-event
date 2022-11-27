import React from "react";

function SingleFooter() {
  return (
    <div className="sg-footer di-fl-col">
      <div className="sg-footer-header">
        <h2>진행 방식 안내</h2>
      </div>
      <div className="sg-footer-body di-fl-col">
        <div className="sg-about">
          <h4>스피드전</h4>
          <div className="sg-rule">
            <div className="sg-rule-container">
              <span className="sg-rule-title">게임 모드</span>
              <span className="sg-rule-text">스피드 개인전 (커스텀 모드)</span>
            </div>
            <div className="sg-rule-container">
              <span className="sg-rule-title">경기 방식</span>
              <span className="sg-rule-text">
                경기는 점수제로 진행되며, 특정 선수가 50점을 선취하는 경우 종료.
                <br />
                점수는 커스텀 모드가 자동으로 합산.
                <br />
                <br />
                만일,
                <br />
                인원이 8명 초과 일경우 대기가 아닌 조를 2개로 나누어 리그
                방식으로 진행됩니다.
              </span>
            </div>
            <div className="sg-rule-container">
              <span className="sg-rule-title">점수 방식</span>
              <p className="sg-rule-text">
                1등[10] <br />
                2등[7] <br />
                3등[5] <br />
                4등[4] <br />
                5등[3] <br />
                6등[1] <br />
                7등[0] <br />
                8등[-1] <br />
                <br />
                리타이어[-5]
              </p>
            </div>
          </div>
        </div>
        <div className="sg-about">
          <h4>아이템전</h4>
          <div className="sg-rule">
            <div className="sg-rule-container">
              <span className="sg-rule-title">게임 모드</span>
              <span className="sg-rule-text">아이템 개인전 (일반 모드)</span>
            </div>
            <div className="sg-rule-container">
              <span className="sg-rule-title">경기 방식</span>
              <span className="sg-rule-text">
                경기는 점수제로 진행되며, 특정 선수가 30점을 선취하는 경우 종료.
                <br />
                <br />
                만일,
                <br />
                인원이 8명 초과 일경우 대기가 아닌 조를 2개로 나누어 리그
                방식으로 진행됩니다.
              </span>
            </div>
            <div className="sg-rule-container">
              <span className="sg-rule-title">점수 방식</span>
              <p className="sg-rule-text">
                1등[10] <br />
                2등[7] <br />
                3등[5] <br />
                4등[4] <br />
                5등[3] <br />
                6등[1] <br />
                7등[0] <br />
                8등[-1] <br />
                <br />
                리타이어[-5]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFooter;
