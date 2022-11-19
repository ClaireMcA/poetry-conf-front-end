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
    <div style={{ width: "8vh" }}>
      {props.timeSlots.map((time) => {
        const hour = as12HourTime(time + 8);
        const styles = {
          height: "50px",
          border: "0.5px solid lightGrey",
          padding: 5,
          justifySelf: "center",
        }

        return (
          <>
            <div
              key={hour}
              style={styles}
            >
              {hour}
            </div>
            <div
              key={hour + "(1)"}
              style={styles}
            >
            </div>
            <div
              key={hour + "(2)"}
              style={styles}
            >
            </div>
            <div
              key={hour + "(3)"}
              style={styles}
            >
            </div>
          </>          
        );
      })}
    </div>
  );
};

export default TimeSlots;
