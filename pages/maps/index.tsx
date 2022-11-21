import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from '../../components/Navbar';
import SignIn from '../../components/SignIn';
import { Paragraph, Heading } from 'grommet';
import Link from "next/link";

const Maps = () => {
    const { data: session } = useSession();
    console.log(session);
    
    if (session) {
        return (
            <>
                <Navbar headerTitle={"Maps"} />





                <Paragraph>For more info got to <Link color="dblue" style={{ textDecoration:"underline" }} href="https://www.canberra.edu.au/maps">University of Canberra Maps</Link></Paragraph>
                
            </>
        );
    }
    return <SignIn />;
};

export default Maps;
