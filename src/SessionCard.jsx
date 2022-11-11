import React from 'react';
import * as Data from './Data'
import { 
    Box,
    Card,
    CardHeader,
    CardBody,
    List,
    CardFooter,
    Paragraph,
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

    const getSessionLocation = (value) => {
        const location = Data.sessionData[value].location;
        return location;
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
            gridArea={props.grid} 
            height="100%" 
            width="100%" 
            background="blue"
            color="white"
            pad="small"
            // onClick={}
        >
            <Box><Paragraph>{getSessionTitle(props.value)}</Paragraph></Box>
            <Box><Paragraph>{getSessionLocation(props.value)}</Paragraph></Box>
            <Box><Paragraph>{getSessionDesc(props.value)}</Paragraph></Box>
            <Box><Paragraph>{getSessionStart(props.value)} - {getSessionEnd(props.value)}</Paragraph></Box>
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