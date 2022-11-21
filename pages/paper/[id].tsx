// import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import SignIn from "../../components/SignIn";
// import { useRouter } from 'next/router';
// import { dataWithDates } from "../../lib/data";
// import { Box, Heading, Paragraph } from 'grommet';
// import NavbarSimple from "../../components/NavbarSimple";
// import dbPromise from "../../lib/mongo";
// import { ObjectId } from "mongodb";


// // interface Props {
// //   papers: any[];
// //   panels: any[];
// // }

// // export async function getStaticProps() {
// //   const db = await dbPromise;
// //   const session = await db.collection('sessions').findOne({ _id: new ObjectId('63785f35966480e10172ab6b')});
// //   const panels = await db.collection('panels').find(session ? { sessionId: session._id.toString() } : {}).toArray();
// //   const papers = await db.collection('papers').find({ "$or": panels.map(panel => ({ panelId: panel._id.toString() })) }).toArray();

// //   return {
// //     props: {
// //       papers: papers.map(paper => ({ ...paper, _id: paper._id.toString(), })),
// //       panels: panels.map(panel => ({ ...panel, _id: panel._id.toString(), })),
// //     }
// //   }
// // }



// const getPaperDisplayTime = (sessionId: string) => {
//   const currentSession = dataWithDates.find(item => item._id === sessionId);
//   if (currentSession !== undefined) {
//     const start = (currentSession.start.getHours() < 13 ? currentSession.start.getHours() : currentSession.start.getHours() - 12) + ":" + (currentSession.start.getMinutes() == 0 ? "00" : currentSession.start.getMinutes());
//     const end = (currentSession.end.getHours() < 13 ? currentSession.end.getHours() : currentSession.end.getHours() - 12) + ":" + (currentSession.end.getMinutes() == 0 ? "00" : currentSession.end.getMinutes());
//     const startTime = currentSession.start.getHours() < 12 ? `${start}am` : `${start}pm`
//     const endTime = currentSession.end.getHours() < 12 ? `${end}am` : `${end}pm`
//     const runTime = startTime + " - " + endTime;
//     return(runTime)
//   }
// }



// const PaperInfo = () => {
//   const { data: session } = useSession();

//   const router = useRouter()
//   const paperId  = router.query
//   const paperData = dataWithDates.find(item => item._id == paperId.id)
//   console.log(paperData)
//   console.log(paperId)


//   if (session) {
//     return (
//       <>
//         <NavbarSimple/>
//         <Box
//           margin="2vw"
//         >
//           <Heading level="1" >
//             {(paperData !== undefined) && paperData.title}
//           </Heading>
//           <Heading level="3" >
//           {(paperData !== undefined) && paperData.speaker}
//           </Heading>
//           <Heading level="3" >
//             {(paperId !== undefined) && getPaperDisplayTime(paperId.toString())}
//           </Heading>
//         </Box>
//       </>
//     );
//   }
//   return <SignIn />;
// };

// export default PaperInfo;



import React, { useEffect, useState } from "react";
// import { dataWithDates, sessionData } from "../lib/data";
import NavbarSimple from "../../components/NavbarSimple";
import { Paragraph, Card, Heading, Box } from 'grommet'
import Link from 'next/link';
import { useRouter } from 'next/router'
import type { Session, Speaker } from "../../lib/types";





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


  const thisSession = papers.map((item: Session) => ({
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
                        {(thisSession.title !== "") && 
                            <Heading level="1" margin={{top: "6vh", bottom:"none"}}>{thisSession.title}</Heading>
                        }
                        {thisSession.speaker[0].firstName && <Heading level="2" margin={{top: "0.5rem"}} weight="normal">{getSpeakers(thisSession)}</Heading>}
                        {thisSession.description && <Heading level="2" margin={{top: "7vh", bottom: "none"}}>Abstract</Heading>}
                        {(thisSession.description !== undefined) && 
                            <Paragraph  margin={{top:"none"}}>{thisSession.description}</Paragraph>
                        }
                        {thisSession.speaker[0].firstName && <Heading level="2" margin={{top: "7vh", bottom: "none"}}>Speakers</Heading>}
                        {thisSession.speaker[0].firstName && (thisSession.speaker.map((speaker: Speaker) => {
                            const speakerName = speaker.firstName + " " + speaker.lastName;
                            console.log(speakerName);
                            return (
                            <>
                                <Heading level="2" margin={{top: "0.5rem", bottom:"none"}} weight="normal">{speakerName}</Heading>
                                <Heading level="3" margin="none">{speaker.affiliation}</Heading>
                                <Paragraph  margin={{top:"none"}}>{speaker.bio}</Paragraph>
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


const getSpeakers = (currentSession: Session) => {
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

