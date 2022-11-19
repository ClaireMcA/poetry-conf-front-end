import { signIn } from "next-auth/react";
import { Box, Button, Heading, Paragraph, Image } from 'grommet';
import Link from "next/link";

const SignIn = () => {

    return (
        <>
            <Box
                tag='header'
                align='center'
                justify='between'
                background='white'
                pad={{ left: 'small', right: 'small', vertical: 'large' }}
                // elevation='medium'
                // style={{ zIndex: '1' }}
            >
                <Link href="/" >
                    <Heading level='2' margin='none'>Out of the Ordinary:</Heading>
                </Link>
                <Box direction='row' align='center'>
                    <Heading level='3' margin='none'>On Poetry and the World</Heading>
                </Box>
            </Box>
            <Box
                pad="large"
                justify="center"
                height="70vh"
                align="center"
            >
                <Heading level='4' textAlign="center" margin="none">Hello! Welcome to the Out of the Ordinary Programme.</Heading>
                <br/>
                <Box 
                    height="small" 
                    width="small"
                    alignSelf="center"
                >
                    <Image
                        fit="cover"
                        src="https://static.wixstatic.com/media/b0942c_83801cabfdec4d0ab454dc6122caf7c8~mv2.jpg/v1/fill/w_1722,h_1566,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/_%20Robert_Delaunay%2C_1938%2C_Rythme_n%C2%B01%2C_Decoration_for_the_Salon_des_Tuileries%2C_oil_on_canvas.jpg"
                    />
                </Box>
                <br/>
                <br/>
                <Paragraph textAlign="center" margin="none">Sign in below to view and customise your schedule.</Paragraph>
                <br/>
                <Button 
                    primary 
                    label="Sign In" 
                    onClick={() => signIn("auth0")}
                    alignSelf="center"
                />
            </Box>
        </>
    );
};
  
export default SignIn;
  