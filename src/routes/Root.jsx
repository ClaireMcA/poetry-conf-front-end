import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Collapsible, 
  Heading, 
  Grommet,
  NavBar,
  Paragraph,
  MaskedInput
  // ResponsiveContext, 
} from 'grommet';
import { FormNext, Menu } from 'grommet-icons';
import { Outlet, Link } from "react-router-dom";
import { Header } from '../Header';
import { withRouter } from "react-router-dom";
// import SelectorView from './Selector';


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

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='white'
    pad={{ left: 'large', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);



// const testState = [{
//     testUser: {
//         s1: 2,
//         s2: 2,
//         s3: 2,
//         s4: 2,
//         s5: 2,
//         s6: 2,
//         s7: 2,
//         s8: 2,
//     },
//     testUser2: {
//         s1: 4,
//         s2: 3,
//         s3: 6,
//         s4: 1,
//         s5: 5,
//         s6: 2,
//         s7: 3,
//         s8: 4,
//     }
// }]

// const updateState = {
//     testUser2: {
//         s6: 3,
//     }
// }

function Root(props) {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [userPreferences, setUserPreferences] = useState(testState)

//   console.log(userPreferences)
//   setUserPreferences({...userPreferences,     testUser2: {
//     s6: 3,
// }})
//   console.log(userPreferences)
  
  return (
    <Grommet theme={theme} full>
{/* 
        <NavBar>
            <Heading level='3'>Grommet Tutorial</Heading>
            <Button icon={<Menu />} onClick={() => {}} />
        </NavBar>
        <Box flex align='center' justify='center'>
            app body
        </Box> */}
        


        <Box fill>
            <Header isAuth="true" />
            <Box 
                direction='row' 
                flex
                overflow={{ horizontal: 'hidden' }}
                margin={{ top: 'small' }}
            >
                <Box 
                    flex 
                    align='center' 
                    justify='top'
                >
                    <Paragraph>
                    </Paragraph>
                    <Outlet />
            </Box>
            <Collapsible
                direction="horizontal"
                // open={showSidebar}
            >
                <Box
                    flex
                    width='100vw'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='top'
                    alignContent='space-between'
                    pad='large'
                    // direction="vertical"
                >
                    <Paragraph
                        // onClick={() => setShowSidebar(!showSidebar)}
                        hoverIndicator='true'
                    >
                        <Link to={`schedule`}>Schedule</Link>
                    </Paragraph>

                    <Paragraph
                        // onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <Link to={`session/1`}>Selection</Link>
                    </Paragraph>
                    {/* </Box> */}
                </Box>
            </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Root;
