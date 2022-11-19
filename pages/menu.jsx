import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';
import { Box, Button, Heading } from 'grommet';
import Link from "next/link";
import { Menu } from 'grommet-icons'
import { useRouter } from "next/router";

const Monday = () => {
    const { data: session } = useSession();
    console.log(session);
    const router = useRouter()
    
    if (session) {
        return (
            <>
                <Box
                    background="dblue"
                    height="100vh"
                >
                    <Box
                        tag='header'
                        direction='row'
                        align='center'
                        justify='between'
                        background='white'
                        pad={{ left: 'large', right: 'small', vertical: 'small' }}
                        elevation='medium'
                        style={{ zIndex: '1', }}
                    >
                        <Box>
                            <Box direction='row' align='center'>
                                <Heading level='2' margin='none'>Out of the Ordinary:</Heading>
                            </Box>
                            <Box direction='row' align='center'>
                                <Heading level='3' margin='none'>On Poetry and the World</Heading>
                            </Box>
                        </Box>
                        <Box pad="medium">
                        <Button onClick={() => router.back()}>{<Menu />}</Button>
                    </Box>
                </Box>
                    <Box
                        align="center"
                        justify="center"
                        height="70vh"

                    >
                        <Link href="/">
                            <Box
                                margin="large"
                            >
                                <Heading margin="none" level="2">My Schedule</Heading>
                            </Box>
                        </Link>
                        <Link href="/maps">
                            <Box
                                margin="large"
                            >
                                <Heading  margin="none" level="2">Maps</Heading>
                            </Box>
                        </Link>
                        <Box>
                            <Box
                                margin="large"
                            >
                                <Button primary color="dblue" label={<Heading  margin="none" level="2">Sign Out</Heading>} onClick={() => signOut()}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        );
    }
    return <SignIn />;
};

export default Monday;



{/* Signed in as {session.user?.email} <br />
<button onClick={() => signOut()}>Sign out</button> */}     