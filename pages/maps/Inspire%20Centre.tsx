import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from '../../components/Navbar';
import SignIn from '../../components/SignIn';
import { Heading } from 'grommet';

const InspireCenter = () => {
    const { data: session } = useSession();
    console.log(session);
    
    if (session) {
        return (
            <>
                <Navbar headerTitle={"Maps"} />
                <Heading>This is the Inspire Center!</Heading>
                
            </>
        );
    }
    return <SignIn />;
};

export default InspireCenter;
