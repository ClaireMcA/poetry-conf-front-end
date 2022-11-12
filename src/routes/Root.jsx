import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Collapsible, 
  Heading, 
  Grommet,
  // ResponsiveContext, 
} from 'grommet';
import { FormNext, Menu } from 'grommet-icons';
// import TimetableView from './Timetable';
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





function Root() {
  const [showSidebar, setShowSidebar] = useState(false);


  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Box>
            <Heading level='3' margin='none'>Out of the Ordinary</Heading>
            <Box
              direction='row'
              align='center'
            >
              <Heading level='2' margin='none'>Testing</Heading>
              <Button 
                icon={<FormNext />}  
              />
            </Box>
          </Box>
          <Button 
            icon={<Menu />}  
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
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
          </Box>
          <Collapsible
            direction="horizontal"
            open={showSidebar}
          >
            <Box
              flex
              width='medium'
              background='white'
              elevation='small'
              // align='center'
              justify='center'
              alignContent='space-between'
              // direction="vertical"
            >
              <Button 
                primary 
                color='light-1' 
                label="Timetable"
                onClick={() => {}}
                fill="horizontal"
              />
              <Button 
                primary 
                color='light-1' 
                label="Campus Maps"
                onClick={() => {}}
                fill="horizontal"
              />
            </Box>
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Root;
