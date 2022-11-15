import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Collapsible, 
  Heading, 
  Grommet,
  NavBar,
  Paragraph
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





function Root(props) {
  const [showSidebar, setShowSidebar] = useState(false);


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
        {/* <AppBar>
          <Box>
            <Heading level='3' margin='none'>Out of the Ordinary</Heading>
            <Box direction='row' align='center'>
              <Heading level='2' margin='none'>Testing</Heading>
              <Button icon={<FormNext />} />
            </Box>
          </Box>
          <Button icon={<Menu />} onClick={() => setShowSidebar(!showSidebar)} />
        </AppBar> */}
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
                {/* {this.props.location} */}
            </Paragraph>
            <Outlet />
          </Box>
          <Collapsible
            direction="horizontal"
            open={showSidebar}
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
                    onClick={() => setShowSidebar(!showSidebar)}
                    hoverIndicator='true'
                >
                    <Link to={`schedule`}>Schedule</Link>
                </Paragraph>

                <Paragraph
                    onClick={() => setShowSidebar(!showSidebar)}
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
