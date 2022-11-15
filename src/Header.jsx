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
import { Link, useNavigate } from "react-router-dom";






export const Header = (props) => {



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

    const navigate = useNavigate();

    // const [showSidebar, setShowSidebar] = useState(false);

    return (
        <AppBar>
            <Box>
                <Heading level='3' margin='none'>Out of the Ordinary</Heading>
                <Box direction='row' align='center'>
                    <Heading level='2' margin='none'>Testing</Heading>
                    <Button icon={<FormNext />} />
                </Box>
            </Box>
            <Paragraph
                    // onClick={() => setShowSidebar(!showSidebar)}
                >
                    {props.isAuth === "true" &&
                        <React.Fragment>
                            <button onClick={() => navigate(-1)}>Go back</button>
                            <Link to={`menu`}>{<Menu />}</Link>
                        </React.Fragment>
                    }   
                </Paragraph>
            {/* <Button icon={<Menu />} onClick={() => setShowSidebar(!showSidebar)} /> */}
        </AppBar>
    )
}