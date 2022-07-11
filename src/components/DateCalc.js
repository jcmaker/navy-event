import db from "../fbManager";

function DateCalc({ date, timetime, id }) {
  return (
    <div className="date-calc">
      <div className="date-calc-time">
        {date}
        {"/"}
        {timetime}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          db.collection("eventDate").doc(id).delete();
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default DateCalc;
