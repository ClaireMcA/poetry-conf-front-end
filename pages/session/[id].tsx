import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import SignIn from "../../components/SignIn";
import { useRouter } from 'next/router';
import { dataWithDates } from "../../lib/data";
import { Box, Heading, Paragraph } from 'grommet';
import NavbarSimple from "../../components/NavbarSimple";
import Link from "next/link";
import dbPromise from "../../lib/mongo";
import { ObjectId } from "mongodb";


interface Props {
//   papers: any[];
//   panels: any[];
  sessions: any[];
}

// export async function getServerSideProps() {
//   const db = await dbPromise;
//   const session = await db.collection('sessions').find({ _id: new ObjectId('63785f35966480e10172ab6b')});
// //   const panels = await db.collection('panels').find(session ? { sessionId: session._id.toString() } : {}).toArray();
// //   const papers = await db.collection('papers').find({ "$or": panels.map(panel => ({ panelId: panel._id.toString() })) }).toArray();

//   return {
//     props: {
//         sessions: session
//     }
//   }
// }



const getSessionDisplayTime = (session: object) => {
    // const sessionData = dataWithDates.find(item => item._id == sessionId.id)
    const sessionData = session
    // console.log(sessionData)
    const start = (sessionData.start.getHours() < 13 ? sessionData.start.getHours() : sessionData.start.getHours() - 12) + ":" + (sessionData.start.getMinutes() == 0 ? "00" : sessionData.start.getMinutes());
    const end = (sessionData.end.getHours() < 13 ? sessionData.end.getHours() : sessionData.end.getHours() - 12) + ":" + (sessionData.end.getMinutes() == 0 ? "00" : sessionData.end.getMinutes());
    const startTime = sessionData.start.getHours() < 12 ? `${start}am` : `${start}pm`
    const endTime = sessionData.end.getHours() < 12 ? `${end}am` : `${end}pm`
    const runTime = startTime + " - " + endTime;

    return(runTime)

}



const SessionInfo = ( {sessions}: Props) => {
  const { data: session } = useSession();

  const router = useRouter()
  const sessionId  = router.query
//   const sessionData = dataWithDates.find(item => item._id == sessionId.id)
//   console.log(sessions)
//   console.log(sessionId)


  if (session) {
    return (
      <>
        <NavbarSimple/>
        <Box
          margin="5vw"
        >
            <Heading margin="none" level="1" >
                {/* {thisSession} */}
            </Heading>


        </Box>
      </>
    );
  }
  return <SignIn />;
};

export default SessionInfo;
