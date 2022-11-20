import React from "react";
import { useSession } from "next-auth/react";
import { 
  Box, 
  Heading, 
} from 'grommet';
import { Menu } from 'grommet-icons';
import Link from 'next/link'
import { useRouter } from "next/router";




const NavbarSimple = () => {

  return (
    <>
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
                <Link href="/" >
                    <Heading level='2' margin='none'>Out of the Ordinary:</Heading>
                </Link>
                <Box direction='row' align='center'>
                    <Heading level='3' margin='none'>On Poetry and the World</Heading>
                </Box>
            </Box>
            <Box pad="medium">
                <Link href="/menu">{<Menu />}</Link>
            </Box>
        </Box>
    </>
  );
};

export default NavbarSimple;