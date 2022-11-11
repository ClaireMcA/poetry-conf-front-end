import React from 'react';
import { 
    Grommit,
    Grid,
    Box,
    Card,
    CardHeader,
} from 'grommet';
import * as GridData from './Data';
import SessionCardData from './SessionCard';

const getTimeAreas = () => {
    const timetableViewAreas = [{
        name:'time', 
        start: [1, 1], 
        end:[2, 8],
    }];
    // const gridValue = 0;
    // const value = 0;

    for (let i = 0; i < 14; i++) {
        const time = "t" +  (i + 1 );
        // console.log(time)
        const start = GridData.timeAreaValue[i];
        const end = GridData.timeAreaValue[i + 1];
        // console.log(end);
        // const value = n;
        // const gridValue = value + 3;
        timetableViewAreas.push({
            name:time, 
            start: [0, start], 
            end:[0, end],
        });
        
    };

    // for (let i = 0; i < 1; i++) {
    //     // const time = "t" +  (i + 1 );
    //     // console.log(time)
    //     const title = GridData.sessionData[i].title
    //     // const title = data.title
    //     // const startTime = "09:00"
    //     // const endTime = "10:00"

    //     // const start = i + 1;
    //     // const end = i + 2;
    //     // console.log(end);
    //     // const value = n;
    //     // const gridValue = value + 3;
    //     timetableViewAreas.push({
    //         name:title, 
    //         start: [2, 1], 
    //         end:[2, 2],
    //     });
        
    // }



    console.log(timetableViewAreas)


    return timetableViewAreas;

        // { name: 't1', start: [0, 0], end: [0, 3] },
        // { name: 't2', start: [0, 3], end: [0, 7] },
        // { name: 't3', start: [0, 7], end: [0, 11] },

}


const renderBoxes = () => {
    const elements = [];

    for (let i = 0; i < 14; i++) {
    //   const suburb = Constants.suburbs[i].id;
        const time = "t" +  (i + 1 );
        // console.log(time)
        const valueDisplay = GridData.timeValueDisplay[i]
        elements.push(
            <Box 
            gridArea={time} 
            background="white"
            border="true"
            id = {i}
            >
                {valueDisplay}
                
            </Box>
        );
    }
    console.log(elements)
    return <React.Fragment>
        {elements}
      </React.Fragment>;
    
  }

  const renderCards = () => {
    const elements = [];

    for (let i = 0; i < 14; i++) {
    //   const suburb = Constants.suburbs[i].id;
        const time = "t" +  (i + 1 );
        // console.log(time)
        const valueDisplay = GridData.timeValueDisplay[i]
        elements.push(
            <Box 
            gridArea={time} 
            background="white"
            border="true"
            id = {i}
            >
                {valueDisplay}
                
            </Box>
        );
    }
    return <React.Fragment>
        {elements}
      </React.Fragment>;
    
  }






const TimetableView = () => {

    return (
        <Grid
            rows={GridData.TimetableViewRows}
            columns={['1fr', '2.5fr', '2.5fr']}
            gap="none"
            areas={getTimeAreas()}
            width="100vw"
            pad = {{
                vertical: "none",
                horizontal: "small"}}
            responsive='true'
        >
            {renderBoxes()}

{/* 
            <Box
                gridArea="time" 
                background="green"
                // border="true"
            >
                Test
            </Box> */}

            <SessionCardData grid='time' value="2" />

            {/* <Card gridArea="time" background="brand">
                <CardHeader>Title</CardHeader>
            </Card> */}
            {/* <Card gridArea="" background="green">
                <CardHeader>Test</CardHeader>
            </Card>
            <Card gridArea="" background="dgreen">
                <CardHeader>Test</CardHeader>
            </Card> */}

        </Grid>

    );
}

export default TimetableView;