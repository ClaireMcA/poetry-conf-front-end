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
        const object = Data.sessionData[value].start;
        const start = new Date(object[0], object[1], object[2], object[3], object[4]);
        const formattedStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return formattedStart;
    }

    const getSessionEnd = (value) => {
        const object = Data.sessionData[value].end;
        const end = new Date(object[0], object[1], object[2], object[3], object[4]);
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
                <Paragraph
                    color="white"
                    // maxLines="3"
                    size="xlarge"
                    margin="xsmall"
                >
                    {getSessionTitle(props.value)}
                </Paragraph>
                <Paragraph
                    color="white"
                    size="xsmall"
                    margin="xsmall"
                >
                    {getSessionLocation(props.value)}
                </Paragraph>
                {/* <Paragraph
                    color="white"
                >
                    {getSessionDesc(props.value)}
                </Paragraph> */}
                <Paragraph
                    color="white"
                    margin="xsmall"
                >
                    {getSessionStart(props.value)} - {getSessionEnd(props.value)}
                </Paragraph>
            {/* <Box>
                <Paragraph
                    color="white"
                    maxLines="3"
                    size="large"
                    
                >
                    {getSessionTitle(props.value)}
                </Paragraph>
            </Box>
            <Box>
                <Paragraph
                    color="white"
                >
                    {getSessionLocation(props.value)}
                </Paragraph>
            </Box>
            <Box>
                <Paragraph
                    color="white"
                >
                    {getSessionDesc(props.value)}
                </Paragraph>
            </Box>
            <Box>
                <Paragraph
                    color="white"
                >
                    {getSessionStart(props.value)} - {getSessionEnd(props.value)}
                </Paragraph>
            </Box> */}
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