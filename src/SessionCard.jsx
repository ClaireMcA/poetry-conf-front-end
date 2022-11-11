import React from 'react';
import * as Data from './Data'
import { 
    Box,
    Card,
    CardHeader,
    CardBody,
    List,
    CardFooter,
    // Collapsible, 
    // Heading, 
    // Grommet,
    // ResponsiveContext, 
  } from 'grommet';



const SessionCardData = (props) => {

    
    const getSessionTitle = (value) => {
        const title = Data.sessionData[value].title;
        return title;
    }

    const getSessionDesc = (value) => {
        const description = Data.sessionData[value].Desc;
        return description;
    }

    const getSessionStart = (value) => {
        const test = Data.sessionData[value].start;
        const start = Data.start
        console.log(test)
        // const start = new Date(Date.UTC(2022, 12, 5, 1, 0, 0));
        const formattedStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return formattedStart;
    }

    const getSessionEnd = (value) => {
        // const end = Data.sessionData[value].end;
        const end = new Date(Date.UTC(2022, 12, 5, 2, 30));
        console.log(end);
        const formattedEnd = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return formattedEnd;
    }

  return (
        <Card 
            primary
            gridArea={props.grid} 
            height="100%" 
            width="100%" 
            background="blue"
            color="white"
        >
            <Box>{getSessionTitle(props.value)}</Box>
            <Box>{getSessionDesc(props.value)}</Box>
            <Box>{getSessionStart(props.value)} - {getSessionEnd(props.value)}</Box>
                {/* {getSessionEnd(props.value)} */}
                {/* <List
                    primaryKey="name"
                    // data={data}
                    // secondaryKey="percent"
                    // data={[
                    //     { name: 'Alan', percent: 20 },
                    //     { name: 'Bryan', percent: 30 },
                    //     { name: 'Chris', percent: 40 },
                    //     { name: 'Eric', percent: 80 },
                    // ]}
                /> */}
            {/* </CardBody> */}
        </Card>
  );
};

export default SessionCardData;