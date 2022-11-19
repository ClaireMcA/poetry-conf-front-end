import React from "react";
import Selector from "../components/Selector";
import Navbar from "../components/Navbar"
import SignIn from "../components/SignIn";
import { useRouter } from "next/router";
import { Heading } from "grommet";
import { FormNext } from "grommet-icons";
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react";


const Schedule = () => {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
  return (
    <>
      <Navbar headerTitle={"Schedule"}/>
      <Selector sessionSelection={"34124cdc-df79-49c6-9404-c2712b725605"} />
    </>
  );
  }
  return <SignIn />;};

export default Schedule;
