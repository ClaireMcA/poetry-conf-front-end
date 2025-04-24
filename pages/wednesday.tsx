import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import Timetable from "../components/TimeTable";

const Wednesday = () => {
    const { data: session } = useSession();
    console.log(session);
  
    if (session) {
        return (
            <>
                <Navbar headerTitle={"Wednesday"} headerLeft={"tuesday"}/>
                <Timetable day={7}/>
            </>
        );
    }
    return <SignIn />;
};

export default Wednesday;


