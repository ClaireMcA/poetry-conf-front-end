import React, { useEffect } from "react";
import Navbar from "../components/Navbar"
import SignIn from "../components/SignIn";
// import { useRouter } from "next/router";
import { Box, Card, Heading, Paragraph  } from "grommet";
// import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react";
// import { GetServerSideProps, GetStaticProps } from "next";
// import { Session } from "../lib/types";
import dbPromise from "../lib/mongo";
import { ObjectId } from "mongodb";
import { SelectablePaper } from "../components/SelectablePaper";

interface Props {
  papers: any[];
  panels: any[];
}

export async function getStaticProps() {
  const db = await dbPromise;
  const session = await db.collection('sessions').findOne({ _id: new ObjectId('63785f35966480e10172ab6b')});
  const panels = await db.collection('panels').find(session ? { sessionId: session._id.toString() } : {}).toArray();
  const papers = await db.collection('papers').find({ "$or": panels.map(panel => ({ panelId: panel._id.toString() })) }).toArray();

  return {
    props: {
      papers: papers.map(paper => ({ ...paper, _id: paper._id.toString(), })),
      panels: panels.map(panel => ({ ...panel, _id: panel._id.toString(), })),
    }
  }
}

const Schedule = ({ papers, panels }: Props) => {
  const { data } = useSession();
  // console.log("Papers")
  // console.log(papers);
  // console.log("Panels")
  // console.log(panels);
  const panelPapers = panels.map(panel => ({
    _id: panel._id,
    title: panel.title,
    papers: papers.filter(paper => paper.panelId === panel._id).sort((a,b) => a.order - b.order)
  }));
  // console.log("panelPapers")
  // console.log(panelPapers)

  return data ? (
    <div>
      <Navbar headerTitle={"Schedule"}/>
      <div style={{ width: '100vw' }}>
        <Box direction="row" fill="horizontal">
          { panelPapers.map(({ title }) => {
            return (
              <Box pad="small" key={title} flex={{grow: 1}} style={{ minWidth: 0, flexBasis: 0 }}>
                <Heading margin="none" level="3" size="small">{ title }</Heading>
              </Box>
            )
          })}
        </Box>
        <Box height="100vh" direction="row" fill="horizontal">
          { panelPapers.map(({ _id, papers }) => {
            return (
              <Box key={_id} direction="column" pad="small" flex={{ grow: 1, shrink: 0}} style={{ flexBasis: 0}}> 
                { papers.map(paper => (
                  <SelectablePaper key={paper._id} paper={paper} selected={false}></SelectablePaper>
                ))}
              </Box>

            )
          })}
        </Box>
      </div>
    </div>
  ) : 
  <SignIn />;
};

export default Schedule;
