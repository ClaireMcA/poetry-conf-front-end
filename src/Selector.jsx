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
import reportWebVitals from './reportWebVitals';

const getTimeAreas = () => {
    const timeViewAreas = [];
    // const gridValue = 0;
    // const value = 0;

    for (let i = 0; i < 3; i++) {
        const time = "t" +  (i + 1 );
        // console.log(time)
        const start = GridData.timeAreaValue[i];
        const end = GridData.timeAreaValue[i + 1];
        console.log(end);
        // const value = n;
        // const gridValue = value + 3;
        timeViewAreas.push({
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
    console.log(timeViewAreas)
    return timeViewAreas;

}


// const renderBoxes = () => {
//     const elements = [];

//     for (let i = 0; i < 14; i++) {
//     //   const suburb = Constants.suburbs[i].id;
//         const time = "t" +  (i + 1 );
//         // console.log(time)
//         const valueDisplay = GridData.timeValueDisplay[i]
//         elements.push(
//             <Box 
//             gridArea={time} 
//             background="white"
//             border="true"
//             id = {i}
//             >
//                 {valueDisplay}
                
//             </Box>
//         );
//     }
//     console.log(elements)
//     return <React.Fragment>
//         {elements}
//       </React.Fragment>;
    
// }

const renderCards = () => {
    const elements = [];

    for (let i = 0; i < 3; i++) {
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






const SelectorView = (props) => {

    const sessionID = props.sessionID


    return (
        <Grid
            rows={['xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall']}
                // ['xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall', 'xxsmall']}
            columns={['xxsmall', '1fr', '1fr', '1fr']}
            gap="none"
            areas={getTimeAreas()}
                // { name: 'time', start: [1, 0], end: [1, 2] },
                // { name: 'nav', start: [0, 1], end: [0, 2] },
                // { name: 'main', start: [0, 1], end: [1, 2] },
            
            width="100vw"
            pad = {{
                vertical: "none",
                horizontal: "small"}}
            responsive='true'
        >
            {renderCards()}

            {/* <SessionCardData grid='t1' value="2" /> */}

        </Grid>

    );
}

export default SelectorView;