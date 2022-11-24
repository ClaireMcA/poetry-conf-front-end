import React, { useEffect, useState } from "react";
// import { dataWithDates, sessionData } from "../lib/data";
import TimeSlots from "./TimeSlots";
import { Paragraph, Card, Heading, Box } from 'grommet'
import Link from 'next/link';
import type { Sessions, Speaker, props } from '../lib/types'


const Timetable = ({ day }: props,) => {
  
  const [session, setSession] = useState([]);

  useEffect(() => {
      (async () => {
          const results = await fetch("/api/session").then(response => response.json());
          setSession(results);
      })();
  }, []);

  const filteredDay = session.map((item: Sessions) => ({
    ...item,
    startTime: new Date(item.startTime),
    endTime: new Date(item.endTime)
  })).filter(
    item => item.startTime.getDate() === day
  )


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <TimeSlots timeSlots={Array.from({ length: 13 }, (_, i) => i)} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "2vw",
          marginRight: "2vw",
        }}
      >

        {/* Render cards for each session */}
        {filteredDay.map((session) => {
          return (

            <Link key={session._id} href={(session.isMulti) ? "/selection/" + session._id : "/session/" + session._id}>
              <Card 
                width={"80vw"} 
                key={session._id}
                background={session.category}
                border={{ color: 'blue', size: 'xsmall'}}
                pad={{top: "10px", horizontal: "10px", bottom:"10px"}}
                height={getHeightFromTime( session )}
                margin={getMarginFromTime(day, session)}
                style={{position: "absolute"}}
              >
                <Heading level='3' margin='none'>{session.title}</Heading>
                <Paragraph size="small" margin={{horizontal: "none", top:"none", bottom:"7px"}}>{getSessionDisplayTime(session)}</Paragraph>
                {!session.isMulti && <Paragraph size="small" margin={{horizontal: "none", top:"7px", bottom:"7px"}} color={"bldgreenue"}>
                  {/* <Link style={{textDecoration: 'underline'}} href={ "/maps/" + session.location}> */}
                    {session.location}
                  {/* </Link> */}
                </Paragraph>}
                {/* {session.speaker[0].firstName && <Heading weight="normal" level="3" margin={{horizontal: "none", top:"10px", bottom:"10px"}}>{getSpeakers(session)}</Heading>} */}
              </Card>
            </Link>
          
          );
        })}

      </div>
    </div>
  );
};

export default Timetable;

const getSpeakers = (currentSession: Sessions) => {
  if (currentSession !== undefined) {
    if (currentSession.speaker[1] === undefined ) {
      const singleSpeaker = currentSession.speaker[0].firstName + " " + currentSession.speaker[0].lastName
      return singleSpeaker;
    } else {
    const speakers: Array<string> = []
    {currentSession.speaker.forEach((speaker: Speaker) => {
      speakers.push(
          speaker.lastName
      )
    })}
    const multiSpeakers = speakers.join(' / ');

    return multiSpeakers;
    }
  }
  return <div>Sorry not a vaild Session</div>
}



const getMarginFromTime = ( day: number, currentSession: Sessions) => {
  if (currentSession !== undefined) {
    const dayStart = new Date(2022, 11, day, 9, 0)
    const diffMs = currentSession.startTime.getTime() - dayStart.getTime();
    const diffMins = diffMs / 60000
    const value = (diffMins / 15) * 50
    const margin = {top: (value + "px")}

    return margin
  }
}

const getHeightFromTime = (currentSession: Sessions) => {
  if (currentSession !== undefined) {
    const diffMs = currentSession.endTime.getTime() - currentSession.startTime.getTime();
    const diffMins = diffMs / 60000
    const value = (diffMins / 15) * 50
    const height = value + "px"

    return height
  }
}


const getSessionDisplayTime = (session: Sessions) => {
  const start = (session.startTime.getHours() < 13 ? session.startTime.getHours() : session.startTime.getHours() - 12) + ":" + (session.startTime.getMinutes() == 0 ? "00" : session.startTime.getMinutes());
  const end = (session.endTime.getHours() < 13 ? session.endTime.getHours() : session.endTime.getHours() - 12) + ":" + (session.endTime.getMinutes() == 0 ? "00" : session.endTime.getMinutes());
  const startTime = session.startTime.getHours() < 12 ? `${start}am` : `${start}pm`
  const endTime = session.endTime.getHours() < 12 ? `${end}am` : `${end}pm`
  const runTime = startTime + " - " + endTime;

  return runTime;

}
