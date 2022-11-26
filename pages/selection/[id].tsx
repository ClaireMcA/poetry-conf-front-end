// import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar"
// import SignIn from "../../components/SignIn";
// // import { useRouter } from "next/router";
// import { Box, Card, Heading, Paragraph  } from "grommet";
// // import Link from 'next/link'
// import { useSession, signIn, signOut } from "next-auth/react";
// // import { GetServerSideProps, GetStaticProps } from "next";
// // import { Session } from "../lib/types";
// import dbPromise from "../../lib/mongo";
// import { ObjectId } from "mongodb";

// interface Props {
//   papers: any[];
//   panels: any[];
// }

// export async function getServerSideProps() {
//   const db = await dbPromise;
//   const session = await db.collection('sessions').findOne({ _id: new ObjectId('63785f35966480e10172ab6b')});
//   const panels = await db.collection('panels').find(session ? { sessionId: session._id.toString() } : {}).toArray();
//   const papers = await db.collection('papers').find({ "$or": panels.map(panel => ({ panelId: panel._id.toString() })) }).toArray();

//   return {
//     props: {
//       papers: papers.map(paper => ({ ...paper, _id: paper._id.toString(), })),
//       panels: panels.map(panel => ({ ...panel, _id: panel._id.toString(), })),
//     }
//   }
// }

// const Selection = ({ papers, panels }: Props) => {
//   const { data } = useSession();
//   console.log("Papers")
//   console.log(papers);
//   console.log("Panels")
//   console.log(panels);
//   const panelPapers = panels.map(panel => ({
//     _id: panel._id,
//     title: panel.title,
//     papers: papers.filter(paper => paper.panelId === panel._id).sort((a,b) => a.order - b.order)
//   }));
//   console.log("panelPapers")
//   console.log(panelPapers)

//   return data ? (
//     <div>
//       <Navbar headerTitle={"Schedule"}/>
//       <div style={{ width: '100vw' }}>
//         <Box direction="row" fill="horizontal">
//           { panelPapers.map(({ title }) => {
//             return (
//               <Box pad="small" key={title} flex={{grow: 1}} style={{ minWidth: 0, flexBasis: 0 }}>
//                 <Heading margin="none" level="3" size="small">{ title }</Heading>
//               </Box>
//             )
//           })}
//         </Box>
//         <Box height="80vh" direction="row" fill="horizontal">
//           { panelPapers.map(({ _id, papers }) => {
//             return (
//               <Box key={_id} direction="column" pad="small" flex={{grow: 1}} style={{ minWidth: 0, flexBasis: 0 }}>
//                 { papers.map(paper => (
//                   <Card pad="medium" key={paper._id} flex={{grow: 1, shrink: 0}} style={{ minWidth: 0, flexBasis: 0 }} >
//                     <Heading level="3" size="small">{ paper.title }</Heading>
//                     <Paragraph>{ paper.speaker.map((speaker: string) => (
//                         speaker + "/"
//                     ))}
//                      </Paragraph>
                    


//                   </Card>
//                 ))}
//               </Box>

//             )
//           })}
//         </Box>
//       </div>
//     </div>
//   ) : 
//   <SignIn />;
// };

// export default Selection;




import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar"
import SignIn from "../../components/SignIn";
import { useRouter } from "next/router";
import { Box, Card, Heading, Paragraph, Button  } from "grommet";
import { LinkPrevious } from "grommet-icons";
import type { Panels, Papers, Sessions, Speaker } from '../../lib/types'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react";


const Selection = () => {
  const { data: session } = useSession();
  const [panels, setPanels] = useState([]);
  const [papers, setPapers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const router = useRouter();
  const currentSessionId  = router.query.id;


  useEffect(() => {
      (async () => {
          const results = await fetch("/api/panel").then(response => response.json());
          setPanels(results);
      })();
      (async () => {
        const results = await fetch("/api/papers").then(response => response.json());
        setPapers(results);
      })();
      (async () => {
        const results = await fetch("/api/session").then(response => response.json());
        setSessions(results);
      })();
  }, []);


  const thisSession = sessions.map((item: Sessions) => ({
    ...item,
    startTime: new Date(item.startTime),
    endTime: new Date(item.endTime)
  })).find(
    item => item._id === currentSessionId)


  const sessionHeader = () => {
    if (thisSession !== undefined) {
      const time = getSessionDisplayTime(thisSession)
      const date = thisSession.startTime.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })
      const day = date.substring(0, 3);
      const heading = day + " " + time

      return heading
    }
  }

  const headerText = sessionHeader()

  // console.log("Session Header")
  // console.log(sessionHeader.title)

  const sessionPanels = panels.filter((panel: Panels) => panel.sessionId === currentSessionId)

  const panelPapers = sessionPanels.map((panel: Panels) => ({
    _id: panel._id,
    title: panel.title,
    papers: papers.filter((paper: Papers) => paper.panelId === panel._id).sort((a: Papers ,b: Papers) =>  a.order - b.order),
    location: panel.location
  }));





  const paperNumber = amountOfPapers(panelPapers)



  // console.log("panelPapers")
  console.log(paperNumber)

  if (session) {
  return (
    <>
      <Navbar headerTitle={headerText}/>
      <Box key={1} background="dblue" style={{ width: '100vw', height: 'max-content' }}>
        <Box direction="row" fill="horizontal">

          { panelPapers.map(({ title, location, _id }) => {
            return (
              <Box background="dblue" height="17vh" className="panelHeader" justify="center" pad="small" key={title} flex={{grow: 1}} style={{ minWidth: 0, flexBasis: 0 }}>
                <Heading textAlign="center" key={1} weight="bold" margin="none" level="3" size="1rem">{ title }</Heading>
                {/* <Link href={"../maps/" + location } style={{ textDecoration:"underline" }}> */}
                  <Heading textAlign="center" key={2} weight="normal"  margin={{left:"none", right:"none", top:"0.5rem", bottom:"none"}} level="2" size="0.8rem">{ location }</Heading>
                {/* </Link> */}
              </Box>
            )
          })}
        </Box>
        <Box className="panelsContainer" key={2} height="100vh" direction="row" fill="horizontal">
          { panelPapers.map(({ _id, papers }) => {
            return (
              <>

                <Box height="auto" background="dblue" key={_id} direction="column" margin={{horizontal:"2px"}} flex={{grow: 1}} style={{ minWidth: 0, flexBasis: 0 }}>
                  { papers.map((paper: Papers) => (
                    
                    <Card margin="xsmall" justify="center" className="panelCard" background="white" pad="small" key={paper._id} flex={{grow: 1, shrink: 0}} style={{ minWidth: 0, flexBasis: 0 }} >
                      <Link key={paper._id} style={{height:"100%"}} href={"/paper/" + paper._id}>
                        <Box key={1} justify="center">
                        <Paragraph key={2} margin={{horizontal:"none", top: "3px", bottom:"none"}} maxLines={8} size="small">{ paper.title }</Paragraph>
                        <Heading key={3} size="small" level="4" margin="none">{ getSpeakers(paper)} </Heading>
                        </Box>
                      </Link>
                    </Card>
                    
                  ))}
                </Box>
              </>
            )
          })}
        </Box>
      </Box>
    </>
  )}
  return <SignIn />;
};

export default Selection;


const getSpeakers = (currentPaper: Papers) => {
  if (currentPaper !== undefined) {
      if (currentPaper.speaker[1] === undefined ) {
          const singleSpeaker = currentPaper.speaker[0].firstName + " " + currentPaper.speaker[0].lastName
          return singleSpeaker;
      } else if (currentPaper.speaker[1].firstName.length === 0 ) {
        const singleSpeaker = " "
        return singleSpeaker;
      } else {
      const speakers: Array<string> = []
      {currentPaper.speaker.forEach((speaker: Speaker) => {
          speakers.push(
              speaker.lastName
          )
      })}
      const multiSpeakers = speakers.join(' / ');

      return multiSpeakers;
      }
  }
  return <div></div>
}


const getSessionDisplayTime = (session: Sessions) => {
  if (session !== undefined) {
  const start = (session.startTime.getHours() < 13 ? session.startTime.getHours() : session.startTime.getHours() - 12) + ":" + (session.startTime.getMinutes() == 0 ? "00" : session.startTime.getMinutes());
  const end = (session.endTime.getHours() < 13 ? session.endTime.getHours() : session.endTime.getHours() - 12) + ":" + (session.endTime.getMinutes() == 0 ? "00" : session.endTime.getMinutes());
  const startTime = session.startTime.getHours() < 12 ? `${start}am` : `${start}pm`
  const endTime = session.endTime.getHours() < 12 ? `${end}am` : `${end}pm`
  const runTime = startTime + " - " + endTime;

  return runTime;
  }


}

const amountOfPapers = (panels: Array<Panels>) => {
  // console.log(panels[0].papers.length)
  if ( panels !== undefined) {
    const panel1 = panels[0]?.papers?.length
    const panel2 = panels[1]?.papers?.length
    const panel3 = panels[2]?.papers?.length
    if (panel1 !== undefined && panel2 !== undefined && panel3 !== undefined) {
      const paperAmount = Math.max(panel1, panel2, panel3)
      return paperAmount
    }
  }
}


const heightFromPapers = (height: number) => {
  if (height === 1) {
    return "70vh"
  } else if (height === 2) {
    return "75vh"
  } else {
    return "115vh"
  }
}