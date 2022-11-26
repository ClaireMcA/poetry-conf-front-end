import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { 
  Box, 
  Heading, 
  Button,
} from 'grommet';
import { FormNext, FormPrevious, Menu, LinkPrevious } from 'grommet-icons';
import Link from 'next/link'
import { useRouter } from "next/router";

import Timetable from "../components/TimeTable";

interface HeaderProps {
  headerTitle: any;
  headerRight?: string;
  headerLeft?: string;
}

const Navbar = ({ headerTitle, headerLeft, headerRight }:HeaderProps) => {
  const { data: session } = useSession();
  // console.log(session);


  const router = useRouter()
 



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
        style={{ zIndex: '1', position: "fixed", }}
        width="100vw"
      >
        <Box>
          <Link href="/" >
            <Heading level='3' margin='none'>Out of the Ordinary</Heading>
          </Link>
          <Box direction='row' align='center'>
            {headerLeft !== undefined && <Link href={"/" + headerLeft }>{<FormPrevious />}</Link>}
            <Heading level='2' margin='none'>{headerTitle}</Heading>
            {headerRight !== undefined && <Link href={"/" + headerRight}>
              <Box
                justify="end"
                margin={{
                  top: "8px"

                }}
              >
                <FormNext size='medium'/>
              </Box>
            </Link>}
          </Box>
        </Box>
        <Box pad="medium">
            <Link href="/menu">{<Menu />}</Link>
        </Box>
      </Box>
      <Box className="navBarFormat"
        pad={{ left: 'large', right: 'small', top: '70px' }}
      >
      </Box>
    </>
  );
};

export default Navbar;