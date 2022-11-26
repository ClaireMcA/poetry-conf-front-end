import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from '../../components/Navbar';
import SignIn from '../../components/SignIn';
import { Heading, Box } from 'grommet';


const Building2 = () => {
    const { data: session } = useSession();
    console.log(session);
    
    if (session) {
        return (
            <>
                <Navbar headerTitle={"Maps"} />
                <Box>
                <Heading>This is Studio 1!</Heading>
                </Box>
            </>
        );
    }
    return <SignIn />;
};

export default Building2;
