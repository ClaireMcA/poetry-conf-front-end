import React from 'react';
import sessionData from './Data'
import { 
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



const SessionCardData = () => {

    
    const getSessionTitle = (id) => {
        const title = sessionData[id].title;
        console.log(title);
        return title;
    }

    const getSessionDesc = (id) => {
        const description = sessionData[id].Desc;
        console.log(description);
        return description;
    }

    const getSessionStart = (id) => {
        // const start = sessionData[id].start;
        const start = new Date(Date.UTC(2012, 11, 20, 1, 0, 0));
        console.log(start);
        // console.log(test);
        const formattedStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return formattedStart;
    }

    // const getSessionEnd = (id) => {
    //     const end = sessionData[id].end;
    //     console.log(end);
    //     const formattedEnd = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    //     return formattedEnd;
    // }


  return (
    <div className="Data">
        <Card  height="medium" width="medium" background="light-1">
            <CardHeader pad="medium">{getSessionTitle(this.props.value)}</CardHeader>
            <CardBody pad="medium">
                <p>{getSessionDesc(this.props.value)}</p>
                <p>{getSessionStart(this.props.value)}</p>
                {/* {getSessionEnd(2)} */}
                <List
                    primaryKey="name"
                    // data={data}
                    // secondaryKey="percent"
                    // data={[
                    //     { name: 'Alan', percent: 20 },
                    //     { name: 'Bryan', percent: 30 },
                    //     { name: 'Chris', percent: 40 },
                    //     { name: 'Eric', percent: 80 },
                    // ]}
                />
            </CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-2">

            </CardFooter>
        </Card>

    </div>
  );
};

export default SessionCardData;