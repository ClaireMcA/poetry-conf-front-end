import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Grommet } from "grommet";
import '../styles/globals.css';
import '../styles/Home.module.css';
import '../styles/fonts.css';
import { Session } from "next-auth";


export default function App({Component, pageProps,}: AppProps<{session: Session;}>) {
  
  const theme = {
    global: {
      font: {
        family: 'kodchasan',
        size: '18px',
        height: '20px',
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        green: '#4F7B55',
        dgreen: '#3D6045',
        blue: '#628BD5',
        dblue: '#132174',
        lblue: '#A3C6D6',
        misc: "#E2AE47",
        meal: "#FFFFFF",
        session: "#132174",
        keynote: '#3D6045',
        extra: "#D2E3EB"
      }
    },
  };

    return (
      <SessionProvider session={pageProps.session}>
        {/* <Navbar /> */}
        <Grommet theme={theme}>
          <Component {...pageProps} />
        </Grommet>
      </SessionProvider>
    );
}



