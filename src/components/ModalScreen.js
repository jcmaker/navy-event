import React from "react";

function ModalScreen({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-card">
        <div className="modal-header">
          <h1>주의 사항</h1>
          <h5>✶꼭 숙지 하고 참여 할 것을 당부드림✶</h5>
        </div>
        <div className="modal-body">
          <p>- 리그 시작 시간은 꼭 지켜주세요 ( <ins>5분 전 접속</ins> )</p>
          <p>- 서로 친해지기 위함. <ins>매너</ins>는 꼭 지켜주세요.</p>
          <p>
            - 이길때도 질때도 있는법. 승패도 중요하지만 <ins>즐기면서</ins> 게임 하기.
          </p>
          <p>- 센스있게 <ins>양보하기</ins>. 기다리는 사람이 있다는 것을 알아주세요.</p>
          <p>
            - 참가는 못해도 <ins>관전 가능</ins>.
          </p>
          <p>- 아래 <ins>진행 방식</ins> 꼭 읽어주시기를 바랍니다.</p>
        </div>
        <br />
        <div className="inquiry">
          <a
            className="address"
            href="https://open.kakao.com/o/gt4C7LJc"
            target="_blank"
            rel="noreferrer"
          >
            친선문의 ❯❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalScreen;
