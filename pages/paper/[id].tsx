import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import SignIn from "../../components/SignIn";
import { useRouter } from 'next/router';
import { dataWithDates } from "../../lib/data";
import { Box, Heading, Paragraph } from 'grommet';
import NavbarSimple from "../../components/NavbarSimple";
import dbPromise from "../../lib/mongo";
import { ObjectId } from "mongodb";


// interface Props {
//   papers: any[];
//   panels: any[];
// }

// export async function getStaticProps() {
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



const getPaperDisplayTime = (sessionId: string) => {
  const currentSession = dataWithDates.find(item => item._id === sessionId);
  if (currentSession !== undefined) {
    const start = (currentSession.start.getHours() < 13 ? currentSession.start.getHours() : currentSession.start.getHours() - 12) + ":" + (currentSession.start.getMinutes() == 0 ? "00" : currentSession.start.getMinutes());
    const end = (currentSession.end.getHours() < 13 ? currentSession.end.getHours() : currentSession.end.getHours() - 12) + ":" + (currentSession.end.getMinutes() == 0 ? "00" : currentSession.end.getMinutes());
    const startTime = currentSession.start.getHours() < 12 ? `${start}am` : `${start}pm`
    const endTime = currentSession.end.getHours() < 12 ? `${end}am` : `${end}pm`
    const runTime = startTime + " - " + endTime;
    return(runTime)
  }
}



const PaperInfo = () => {
  const { data: session } = useSession();

  const router = useRouter()
  const paperId  = router.query
  const paperData = dataWithDates.find(item => item._id == paperId.id)
  console.log(paperData)
  console.log(paperId)


  if (session) {
    return (
      <>
        <NavbarSimple/>
        <Box
          margin="2vw"
        >
          <Heading level="1" >
            {(paperData !== undefined) && paperData.title}
          </Heading>
          <Heading level="3" >
          {(paperData !== undefined) && paperData.speaker}
          </Heading>
          <Heading level="3" >
            {(paperId !== undefined) && getPaperDisplayTime(paperId.toString())}
          </Heading>
        </Box>
      </>
    );
  }
  return <SignIn />;
};

export default PaperInfo;
