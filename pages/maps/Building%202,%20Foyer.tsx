import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from '../../components/Navbar';
import SignIn from '../../components/SignIn';
import Timetable from "../../components/TimeTable";
import { Heading } from 'grommet';


const Building2 = () => {
    const { data: session } = useSession();
    console.log(session);
    
    if (session) {
        return (
            <>
                <Navbar headerTitle={"Maps"} />
                <Heading>This is Building 2, Foyer!</Heading>
            </>
        );
    }
    return <SignIn />;
};

export default Building2;
