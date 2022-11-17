import React from "react";
import { sessionData } from "../lib/data";
import TimeSlots from "./TimeSlots";

const Timetable = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <TimeSlots timeSlots={Array.from({ length: 14 }, (_, i) => i)} />
      <div style={{ display: "grid" }}>
        {sessionData.map((session) => {
          return <div key={session.id}></div>;
        })}
      </div>
    </div>
  );
};

export default Timetable;
