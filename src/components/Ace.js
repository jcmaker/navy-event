import React, { useEffect, useState } from 'react'
import db from '../fbManager';

function Ace() {
    const [getAceMap, setGetAceMap] = useState([]);

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
<div className="set-one">
      <h4>set Ace</h4>
      {getAceMap.map((doc) => (
        <div className="set-list" id={doc.id}>
          <span
            className={doc.optionClassAce}
          >
            {doc.mapId}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Ace