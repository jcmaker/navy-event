import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/NoMatch.css"


function NoMatchScreen() {
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="no-match">
      <img alt="404" src="./images/nopage.png" />
      <h3>다음 주소의 페이지는 존재하지 않습니다.</h3>
      <h2>There Is No Match For</h2>
      <br />
      <code>{location.pathname}</code>
      <br />
      <br />
      <span
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        홈 화면으로 돌아가기
      </span>
    </div>
  );
}

export default NoMatchScreen;
