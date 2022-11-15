import React, { useState } from 'react';
import { 
  Box, 
  Grommet,
  Paragraph
  // ResponsiveContext, 
} from 'grommet';
import { Menu } from 'grommet-icons';
import { Link } from "react-router-dom";


const theme = {
  global: {
    font: {
      family: 'kodchasan',
      size: '18px',
      height: '20px',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      green: '#4F7B55',
      dgreen: '#3D6045',
      blue: '#628BD5',
      dblue: '#132174',
      // purple: '#7620DF',
    }
  },
};




export const NavMenu = () => {

  return (
    <Grommet theme={theme} full>
        {/* <Box 
          direction='row' 
          flex
          overflow={{ horizontal: 'hidden' }}
          margin={{ top: 'small' }}
        > */}
            <Box
              flex
              width='100vw'
              background='light-2'
              elevation='small'
              align='center'
              justify='start'
              alignContent='space-between'
              pad='large'
              // direction="vertical"
            >
                {/* <Paragraph
                    onClick={() => setShowSidebar(!showSidebar)}
                    hoverIndicator='true'
                > */}
                    <Link to={`../schedule`}>Schedule</Link>
                {/* </Paragraph>

                <Paragraph
                    onClick={() => setShowSidebar(!showSidebar)}
                > */}
                    <Link to={`../session/1`}>Selection</Link>
                    <Link to={`../admin`}>Admin</Link>
                {/* </Paragraph> */}
            </Box>
      {/* </Box> */}
    </Grommet>
  );
}

export default NavMenu;
