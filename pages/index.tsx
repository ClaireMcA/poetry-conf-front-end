import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import Timetable from "../components/TimeTable";

const HomePage = () => {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Timetable />;
      </>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
};

export default HomePage;
