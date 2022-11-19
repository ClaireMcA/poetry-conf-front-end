import React from "react";
import { sessionData } from "../lib/data";
import TimeSlots from "./TimeSlots";
import { Paragraph } from 'grommet'

interface timetableProps {
  day: string;
}

const Timetable = ({ day }:timetableProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        width: "100%",
      }}
    >

      <Paragraph>Today is {day}</Paragraph>
      <TimeSlots timeSlots={Array.from({ length: 14 }, (_, i) => i)} />
      <div style={{ display: "grid" }}>
        {sessionData.map((session) => {
          return <div key={session._id}></div>;
        })}
      </div>
    </div>
  );
};

export default Timetable;