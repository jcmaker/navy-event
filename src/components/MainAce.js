import React, { useEffect, useState } from 'react'
import db from '../fbManager';

function MainAce() {
    const [getAceMap, setGetAceMap] = useState([]);
    const [aceOpen, setAceOpen] = useState(false);
    useEffect(() => {
        db.collection("aceMap")
          .orderBy("timestamp", "asc")
          .onSnapshot((snapshot) => {
            setGetAceMap(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                mapId: doc.mapId,
                optionClassAce: doc.optionClassAce,
                ...doc.data(),
              }))
            );
          });
      }, []);

  return (
<div className="main-set-one">
      <h2>ACE</h2>
      <br />
      <div className="main-ace bdr-rds">
      <div className="back-closeAce bdr-rds">To Be Announced</div>
        {getAceMap.map((doc) => (
          <div
            className={`ace-set bdr-rds main-set-one-list ${
              doc.optionClassAce === ""
                ? "main-none-option"
                : "main-" + doc.optionClassAce
            }`}
          >
            
            <div onClick={(e) => {
              e.preventDefault();
              setAceOpen(true);
            }} className={aceOpen === true ? "revealAce bdr-rds" : "closeAce bdr-rds"}>눌러서 확인</div>
            <span className="fix">{doc.mapId}</span>
          </div>
))}
      </div>
      <br />
      <div className="cross"></div>
    </div>
  )
}

export default MainAce