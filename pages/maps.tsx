import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';
import Timetable from "../components/TimeTable";

const Monday = () => {
    const { data: session } = useSession();
    console.log(session);
    
    if (session) {
        return (
            <>
                <Navbar headerTitle={"Maps"} />
                
            </>
        );
    }
    return <SignIn />;
};

export default Monday;
