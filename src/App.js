import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Collapsible, 
  Heading, 
  Grommet,
  // ResponsiveContext, 
} from 'grommet';
import { Menu } from 'grommet-icons';
import SessionCardData from './SessionCard';

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





function App() {
  const [showSidebar, setShowSidebar] = useState(false);


  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
          <Button 
            icon={<Menu />}  
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        <Box 
          direction='row' 
          flex
          overflow={{ horizontal: 'hidden' }}
        >
          <Box 
            flex 
            align='center' 
            justify='center'
          >
          <h1>app body</h1>      
          <SessionCardData 
            value={1}
          />
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
              align='center'
              justify='center'
            >
              <ul>
                <li>
                  <Button 
                    primary 
                    color='blue' 
                    label="Timetable"
                    onClick={() => {}}
                  />
                </li>
                <li>
                  <Button 
                    primary 
                    color='blue' 
                    label="Campus Maps"
                    onClick={() => {}}
                  />
                </li>
              </ul>
            </Box>
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
