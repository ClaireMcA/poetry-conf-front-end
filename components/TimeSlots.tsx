import { FC } from "react";

const as12HourTime = (time: number) => {
  if (time < 12) return `${time}am`;
  else if (time === 12) return `12pm`;
  else return `${time - 12}pm`;
};

interface TimeSlots {
  timeSlots: number[];
}

const TimeSlots: FC<TimeSlots> = (props) => {
  return (
    <div style={{ width: "10vh" }}>
      {props.timeSlots.map((time) => {
        const hour = as12HourTime(time + 8);

        return (
          <div
            key={hour}
            style={{
              height: "150px",
              border: "1px solid black",
              padding: 10,
            }}
          >
            {hour}
          </div>
        );
      })}
    </div>
  );
};

export default TimeSlots;
