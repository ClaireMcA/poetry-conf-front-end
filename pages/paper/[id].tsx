import React, { useEffect, useState } from "react";
// import { dataWithDates, sessionData } from "../lib/data";
import NavbarSimple from "../../components/NavbarSimple";
import { Paragraph, Card, Heading, Box, Button } from 'grommet'
import { LinkPrevious } from "grommet-icons";
import Link from 'next/link';
import { useRouter } from 'next/router'
import type { Sessions, Speaker } from "../../lib/types";
import { AppProps } from "next/app";





const PaperInfo = () => {
  
  const [papers, setPapers] = useState([]);
  const router = useRouter();
  const currentSessionId  = router.query.id;


  useEffect(() => {
      (async () => {
          const results = await fetch("/api/papers").then(response => response.json());
          setPapers(results);
      })();
  }, []);


  const thisPaper = papers.map((item: Sessions) => ({
      ...item,
      startTime: new Date(item.startTime),
      endTime: new Date(item.endTime)
    })).find(
      item => item._id === currentSessionId)


  return (
    <>
        <NavbarSimple/>    
        <div
        style={{
            display: "flex",
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
                {thisPaper !== undefined &&(
                    
                    <Box
                        margin="2vw"
                    >
                        <Button margin={{top: "3vh", bottom:"none"}} onClick={() => router.back()}>{<LinkPrevious />}</Button>
                        {(thisPaper.title !== "") && 
                            <Heading level="1" margin={{top: "3vh", bottom:"none"}}>{thisPaper.title}</Heading>
                        }
                        {thisPaper.speaker[0].firstName && <Heading level="2" margin={{top: "0.5rem", bottom: "none"}} weight="normal">{getSpeakers(thisPaper)}</Heading>}
                        {thisPaper.description && <Heading level="2" margin={{top: "6vh", bottom: "none"}}>Abstract</Heading>}
                        {(thisPaper.description !== undefined) && 
                            <Paragraph  size="small" margin={{top:"none"}}>{thisPaper.description}</Paragraph>
                        }
                        {thisPaper.speaker[0].firstName && <Heading level="2" margin={{top: "7vh", bottom: "none"}}>Speakers</Heading>}
                        {thisPaper.speaker[0].firstName && (thisPaper.speaker.map((speaker: Speaker) => {
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

export default PaperInfo;


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

