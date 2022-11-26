import React, { useEffect, useState } from "react";
// import { dataWithDates, sessionData } from "../lib/data";
import NavbarSimple from "../../components/NavbarSimple";
import { Paragraph, Card, Heading, Box, Button } from 'grommet';
import Link from 'next/link';
import { useRouter } from 'next/router'
import type { Sessions, Speaker } from "../../lib/types";
import { Menu, LinkPrevious } from "grommet-icons";





const SessionInfo = () => {
  
  const [session, setSession] = useState([]);
  const router = useRouter();
  const currentSessionId  = router.query.id;


  useEffect(() => {
      (async () => {
          const results = await fetch("/api/session").then(response => response.json());
          setSession(results);
      })();
  }, []);


const thisSession = session.map((item: Sessions) => ({
    ...item,
    startTime: new Date(item.startTime),
    endTime: new Date(item.endTime)
  })).find(
    item => item._id === currentSessionId)

console.log(thisSession)
console.log(currentSessionId)
  return (
    <>
        <NavbarSimple/>    
        <div
        style={{
            display: "flex",
            // justifyContent: "left",
            flexDirection: "row",
            width: "100%",
        }}
        >
            <div
                style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginLeft: "2vw",
                marginRight: "2vw",
                }}
            >
                {thisSession !== undefined &&(
                    // Render cards for each session 
                    <Box
                        margin="2vw"
                    >
                        <Button margin={{top: "3vh", bottom:"none"}} onClick={() => router.back()}>{<LinkPrevious />}</Button>
                        {(thisSession.title !== "") && 
                            <Heading level="1" size="small" weight="normal" margin={{top: "3vh", bottom:"none"}}>{thisSession.title}</Heading>
                        }
                        {thisSession.speaker[0].firstName && <Heading level="2" size="large" margin={{top: "0.5rem"}} weight="normal">{getSpeakers(thisSession)}</Heading>}
                        {(thisSession !== undefined) && 
                            <Heading level="3" margin="none">{getSessionDisplayTime(thisSession)}</Heading>
                        }
                        {(thisSession.location !== "") && 
                            // <Link style={{textDecoration: 'underline'}} href={ "/maps/" + thisSession.location}>
                                thisSession.location
                            // </Link> 
                        }
                        {thisSession.description && <Heading level="2" margin={{top: "7vh", bottom: "none"}}>Description</Heading>}
                        {(thisSession.description !== undefined) && 
                            <Paragraph  size="small" margin={{top:"1vh"}}>{thisSession.description}</Paragraph>
                        }
                        {thisSession.speaker[0].firstName && <Heading level="2" margin={{top: "7vh", bottom: "none"}}>Speakers</Heading>}
                        {thisSession.speaker[0].firstName && (thisSession.speaker.map((speaker: Speaker) => {
                            const speakerName = speaker.firstName + " " + speaker.lastName;
                            console.log(speakerName);
                            return (
                            <>
                                <Heading level="2" margin={{top: "0.5rem", bottom:"none"}} weight="normal">{speakerName}</Heading>
                                <Heading level="3" margin="none">{speaker.affiliation}</Heading>
                                <Paragraph  size="small" margin={{top:"none"}}>{speaker.bio}</Paragraph>
                            </>
                            )
                        }))}

                    </Box>
                )
                }
            </div>
        </div>
    </>
  );
};

export default SessionInfo;


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

const getSessionDisplayTime = (session: Sessions) => {
    const start = (session.startTime.getHours() < 13 ? session.startTime.getHours() : session.startTime.getHours() - 12) + ":" + (session.startTime.getMinutes() == 0 ? "00" : session.startTime.getMinutes());
    const end = (session.endTime.getHours() < 13 ? session.endTime.getHours() : session.endTime.getHours() - 12) + ":" + (session.endTime.getMinutes() == 0 ? "00" : session.endTime.getMinutes());
    const startTime = session.startTime.getHours() < 12 ? `${start}am` : `${start}pm`
    const endTime = session.endTime.getHours() < 12 ? `${end}am` : `${end}pm`
    const runTime = startTime + " - " + endTime;

    return runTime;

}