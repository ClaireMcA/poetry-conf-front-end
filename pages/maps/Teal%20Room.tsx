import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from '../../components/Navbar';
import SignIn from '../../components/SignIn';
import { Heading } from 'grommet';


const Building2 = () => {
    const { data: session } = useSession();
    console.log(session);
    
    if (session) {
        return (
            <>
                <Navbar headerTitle={"Maps"} />
                <Heading>This is the Teal Room!</Heading>
            </>
        );
    }
    return <SignIn />;
};

export default Building2;
