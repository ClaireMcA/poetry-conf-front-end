import React from "react";
import { dataWithDates, sessionData } from "../lib/data";
import TimeSlots from "./TimeSlots";
import { Paragraph, Card, Heading, Box } from 'grommet'
import Link from 'next/link'

 interface props {
   day: number;
 }


// const getSessionDisplayTime = (sessionId: string) => {
//   const currentSession = dataWithDates.find(item => item._id === sessionId);
//   const start = (currentSession.start.getHours() < 13 ? currentSession.start.getHours() : currentSession.start.getHours() - 12) + ":" + (currentSession.start.getMinutes() == 0 ? "00" : currentSession.start.getMinutes());
//   const end = (currentSession.end.getHours() < 13 ? currentSession.end.getHours() : currentSession.end.getHours() - 12) + ":" + (currentSession.end.getMinutes() == 0 ? "00" : currentSession.end.getMinutes());
//   const startTime = currentSession.start.getHours() < 12 ? `${start}am` : `${start}pm`
//   const endTime = currentSession.end.getHours() < 12 ? `${end}am` : `${end}pm`
//   const runTime = startTime + " - " + endTime;
//   return(runTime)
// }

const getMarginFromTime = (sessionId: string, day: number) => {
  const currentSession = dataWithDates.find(item => item._id === sessionId);
  const dayStart = new Date(2022, 11, day, 9, 0)
  const diffMs = currentSession.start - dayStart;
  const diffMins = diffMs / 60000
  const value = (diffMins / 15) * 50
  const margin = {top: (value + "px")}

  return margin
}

const getHeightFromTime = (sessionId: string) => {
  const currentSession = dataWithDates.find(item => item._id === sessionId);
  const diffMs = currentSession.end - currentSession.start;
  const diffMins = diffMs / 60000
  const value = (diffMins / 15) * 50
  const height = value + "px"

  return height
}

const Timetable = ({ day }: props) => {
  
  const filteredDay = dataWithDates.filter(item => item.start.getDate() === day)
  const filteredSessions = filteredDay.filter(item => item.isMulti === false)
  const filteredMultiSessions = filteredDay.filter(item => item.isMulti === true)

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "left",
        flexDirection: "row",
        width: "100%",
      }}
    >
      {/* <Paragraph>Today is {day}</Paragraph> */}
      <TimeSlots timeSlots={Array.from({ length: 13 }, (_, i) => i)} />
      <div
        style={{
          display: "flex",
          // justifyContent: "left",
          flexDirection: "column",
          width: "100%",
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >
        {/* Render cards for sessions that are not multi-stream */}
        {filteredSessions.map((session) => {
          return (
            <Link href={"/session/" + session._id}>
              <Card 
                width={"80vw"} 
                key={session._id}
                background="lblue"
                border={{ color: 'blue', size: 'xsmall'}}
                pad={{top: "4px", horizontal: "10px", bottom:"10px"}}
                height={getHeightFromTime(session._id)}
                margin={getMarginFromTime(session._id, day)}
                style={{position: "absolute"}}
                justify="center"
              >
                <Heading level='3' margin='none'>{session.title}</Heading>
                <Paragraph size="medium" margin='none'>{session.speaker} </Paragraph>
                <Paragraph size="small" margin='none' color={"bldgreenue"}>
                  <Link style={{textDecoration: 'underline'}} href={ "/maps/" + session.location}>
                    {session.location}
                  </Link>
                </Paragraph>
              </Card>
            </Link>
          
          );
        })}

        {/* Render cards for sessions that are multi-stream */}
        {/* {filteredMultiSessions.map((session) => {
          return (
            <Link href={"/tuesday"}>
              <Card 
                width={"80vw"} //adjusts the width of the session
                key={session._id}
                background="dblue" . //changes the colour of the session
                border={{ color: 'blue', size: 'xsmall'}}
                pad={{top: "4px", horizontal: "10px", bottom:"10px"}}
                height={getHeightFromTime(session._id)} 
                margin={getMarginFromTime(session._id, day)} //renders the session relative to the time
                style={{position: "absolute"}}
                justify="center"
              >
                <Heading level='3' margin='none'>{session.title}</Heading>
                <Paragraph size="medium" margin='none'>{session.speaker} </Paragraph>
                <Paragraph size="small" margin='none'>{getSessionDisplayTime(session._id)}</Paragraph>
              </Card>
            </Link>
          
          );
        })} */}
      </div>
    </div>
  );
};

export default Timetable;
