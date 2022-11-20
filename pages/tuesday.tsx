import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import Timetable from "../components/TimeTable";

const Tuesday = () => {
    const { data: session } = useSession();
    console.log(session);
  
    if (session) {
        return (
            <>
                <Navbar headerTitle={"Tuesday"} headerRight={"wednesday"} headerLeft={"monday"}/>
                <Timetable day={6}/>
            </>
        );
    }
    return <SignIn />;
};

export default Tuesday;
