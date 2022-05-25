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
          <p>✭ 내전, 친선 시작 시간은 꼭 지켜주세요 ( 5분 전 접속 )</p>
          <p>✭ 내전, 친선은 친해지기 위함. 매너는 꼭 지켜주세요.</p>
          <p>
            ✭ 이길때도 질때도 있는법. 승패도 중요하지만 즐기면서 게임 합시다.
          </p>
          <p>✭ 센스있게 양보하기. 기다리는 사람이 있다는 것을 알아주세요.</p>
          <p>
            ✭ 참가는 못해도 관전은 가능. 먼저 온 사람이 있으니 개입은
            삼가해주세요.
          </p>
          <p>✭ 아래 진행 방식 꼭 읽어주시기를 바랍니다.</p>
        </div>
      </div>
    </div>
  );
}

export default ModalScreen;
