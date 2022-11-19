import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Grommet } from 'grommet';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';

import Timetable from "../components/TimeTable";

const HomePage = () => {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <Navbar headerTitle={"Monday"} headerRight={"tuesday"}/>
        <Timetable day="Monday"/>;
      </>
    );
  }
  return <SignIn />;
};

export default HomePage;
