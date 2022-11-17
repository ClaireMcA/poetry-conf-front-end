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
import { FormNext, FormPrevious, Menu } from 'grommet-icons';
import { Link, useNavigate, Route, Routes, useParams } from "react-router-dom";






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

    let { sessionId } = useParams();
    console.log(sessionId)

    // const [showSidebar, setShowSidebar] = useState(false);

    return (
        <AppBar>
            <Box>
                <Link to="./home" ><Heading level='3' margin='none'>Out of the Ordinary</Heading></Link>
                <Box direction='row' align='center'>
                    {/* <Heading level='2' margin='none'>Testing</Heading>
                    <Button icon={<FormNext />} /> */}
                    <Routes> 
                        <Route
                            path="/Menu"
                            element={
                                <React.Fragment>
                                    <Heading level='2' margin='none'>Menu</Heading>
                                    {/* <Button /> */}
                                </React.Fragment>
                            }
                        />
                        <Route
                            path="/Monday"
                            element={
                                <React.Fragment>
                                    {/* <Link to={`/Wednesday`}>{<FormPrevious />}</Link> */}
                                    <Heading level='2' margin='none'>Monday</Heading>
                                    <Link to={`../Tuesday`}>{<FormNext />}</Link>
                                </React.Fragment>
                            }
                        />
                        <Route
                            path="/Tuesday"
                            element={
                                <React.Fragment>
                                    <Link to={`/Monday`}>{<FormPrevious />}</Link>
                                    <Heading level='2' margin='none'>Tuesday</Heading>
                                    <Link to={`../Wednesday`}>{<FormNext />}</Link>
                                </React.Fragment>
                            }
                        />
                        <Route
                            path="/Wednesday"
                            element={
                                <React.Fragment>
                                    <Link to={`/Tuesday`}>{<FormPrevious />}</Link>
                                    <Heading level='2' margin='none'>Wednesday</Heading>
                                    {/* <Link to={`../Monday`}>{<FormNext />}</Link> */}
                                </React.Fragment>
                            }
                        />
                        <Route
                            path="/session/:sessionId"
                            element={
                                <Heading level='2' margin='none'>{ sessionId }</Heading>
                            }
                        />
                        <Route
                            path="/schedule"
                            element={
                                <React.Fragment>
                                    <Link to={`/Tuesday`}>{<FormPrevious />}</Link>
                                    <Heading level='2' margin='none'>Wednesday</Heading>
                                    {/* <Link to={`../Monday`}>{<FormNext />}</Link> */}
                                </React.Fragment>
                            }
                        />
                        <Route
                            path="/admin"
                            element={
                                <React.Fragment>
                                    {/* <Link to={`/Tuesday`}>{<FormPrevious />}</Link> */}
                                    <Heading level='2' margin='none'>Admin Portal</Heading>
                                    {/* <Link to={`../Monday`}>{<FormNext />}</Link> */}
                                </React.Fragment>
                            }
                        />
                    </Routes>
                </Box>
            </Box>
            <Box>
            {/* <Paragraph */}
                    {/* // onClick={() => setShowSidebar(!showSidebar)} */}
                {/* // > */}
                    {/* {props.isAuth === "true" && */}
                        {/* <React.Fragment> */}
                            <Routes> 
                                <Route
                                    path="Menu"
                                    element={
                                        // <Box pad="medium">
                                        <Box pad="medium" onClick={() => navigate(-1)}>{<Menu />}</Box>
   
                                    }
                                />
                                <Route
                                    path="/"
                                    element={
                                        <Box pad="medium">
                                            <Link to={`menu`}>{<Menu />}</Link>
                                        </Box>
                                    }
                                />
                                <Route
                                    path="/schedule"
                                    element={
                                        <Box pad="medium">
                                            <Link to={`../menu`}>{<Menu />}</Link>
                                        </Box>
                                    }
                                />
                                <Route
                                    path="/session/:sessionId"
                                    element={
                                        <Box pad="medium">
                                            <Link to={`../menu`}>{<Menu />}</Link>
                                        </Box>
                                    }
                                />
                                <Route
                                    path="/admin"
                                    element={
                                        <Box pad="medium">
                                            <Link to={`../menu`}>{<Menu />}</Link>
                                        </Box>
                                    }
                                />
                            </Routes>
                            

                            {/* <Link to={`menu`}>{<Menu />}</Link> */}
                        {/* </React.Fragment> */}
                    {/* }    */}
                {/* </Paragraph> */}
            </Box>
        </AppBar>
    )
}