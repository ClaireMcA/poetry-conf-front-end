import React from 'react';
import { 
    Grommit,
    Grid,
    Box,
    Card,
    CardHeader,
} from 'grommet';
import * as GridData from '../Data';
import SessionCardData from '../SessionCard';
import { Link } from 'react-router-dom';


const getTimeAreas = () => {
    const timetableViewAreas = [{
        name:'time', 
        start: [1, 1], 
        end:[2, 3],
    }];

    for (let i = 0; i < 14; i++) {
        const name = "t" +  (i + 1 );
        const start = GridData.timeAreaValue[i];
        const end = GridData.timeAreaValue[i + 1];

        timetableViewAreas.push({
            name:name, 
            start: [0, start], 
            end:[0, end],
        });
        
    };

    for (let i = 0; i < 14; i++) {
        const name = "t" +  (i + 1 );
        const start = GridData.timeAreaValue[i];
        const end = GridData.timeAreaValue[i + 1];

        timetableViewAreas.push({
            name:name, 
            start: [0, start], 
            end:[0, end],
        });
        
    };



    return timetableViewAreas;

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
            border={[
                {
                    size: "xsmall",
                    color: "light-5",
                    side: "top",
                    style: "outset"
                },
                {
                    size: "xsmall",
                    color: "light-3",
                    side: "right",
                    style: "outset"
                },
            ]}
            id = {i}
            >
                {valueDisplay}
            </Box>
        );
    }
    // console.log(elements)
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






const Timetable = () => {

    return (
        <Grid
            rows={GridData.TimetableViewRows}
            columns={['xxsmall', '1fr', '1fr']}
            gap="none"
            areas={getTimeAreas()}
            width="100vw"
            pad = {{
                vertical: "none",
                horizontal: "small"}}
            responsive='true'
        >
            {renderBoxes()}

            {/* <Link to='session/1'> */}
                <SessionCardData grid='time' value="1" />
            {/* </Link> */}


        </Grid>

    );
}

export default Timetable;