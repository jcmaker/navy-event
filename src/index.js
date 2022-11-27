import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.clear();
console.log(
  "%c잠깐!! 여기엔 아무것도 없습니다.",
  "background: #ff0000; color: white; font-size: 30px;"
);
console.log("%c창을 닫아 주시길 바랍니다.", "color: #ff0000; font-size: 18px;");
console.log(
  "%c조금이라도 서버에 요청을 보낼시 위협으로 간주하여 신고처리 하겠습니다.",
  "color: #ff0000; font-size: 18px;"
);
console.log(
  `%cNNNNNNNN        NNNNNNNN               AAA   VVVVVVVV           VVVVVVVVYYYYYYY       YYYYYYY
N:::::::N       N::::::N              A:::A  V::::::V           V::::::VY:::::Y       Y:::::Y
N::::::::N      N::::::N             A:::::A V::::::V           V::::::VY:::::Y       Y:::::Y
N:::::::::N     N::::::N            A:::::::AV::::::V           V::::::VY::::::Y     Y::::::Y
N::::::::::N    N::::::N           A:::::::::AV:::::V           V:::::V YYY:::::Y   Y:::::YYY
N:::::::::::N   N::::::N          A:::::A:::::AV:::::V         V:::::V     Y:::::Y Y:::::Y   
N:::::::N::::N  N::::::N         A:::::A A:::::AV:::::V       V:::::V       Y:::::Y:::::Y    
N::::::N N::::N N::::::N        A:::::A   A:::::AV:::::V     V:::::V         Y:::::::::Y     
N::::::N  N::::N:::::::N       A:::::A     A:::::AV:::::V   V:::::V           Y:::::::Y      
N::::::N   N:::::::::::N      A:::::AAAAAAAAA:::::AV:::::V V:::::V             Y:::::Y       
N::::::N    N::::::::::N     A:::::::::::::::::::::AV:::::V:::::V              Y:::::Y       
N::::::N     N:::::::::N    A:::::AAAAAAAAAAAAA:::::AV:::::::::V               Y:::::Y       
N::::::N      N::::::::N   A:::::A             A:::::AV:::::::V                Y:::::Y       
N::::::N       N:::::::N  A:::::A               A:::::AV:::::V              YYYY:::::YYYY    
N::::::N        N::::::N A:::::A                 A:::::AV:::V               Y:::::::::::Y    
NNNNNNNN         NNNNNNNAAAAAAA                   AAAAAAAVVV                YYYYYYYYYYYYY    `,
  `color: #3586ff;`
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
