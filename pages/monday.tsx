import React, { useEffect, useState} from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn';
import Timetable from "../components/TimeTable";

const Monday = () => {
    const { data: session } = useSession();

    const [sessionData, setSessionData] = useState([]);
  
    useEffect(() => {
      (async () => {
          const results = await fetch("/api/session").then(response => response.json());
          setSessionData(results);
          console.log(sessionData)
      })();
    }, []);
    
    if (session) {

        return (
            <>
                <Navbar headerTitle={"Monday"} headerRight={"tuesday"}/>
                {sessionData.map(session => (
                    <h1>{session.title}Test</h1>
                ))}
                <Timetable day={5}/>
                
            </>
        );
    }
    return <SignIn />;
};

export default Monday;
