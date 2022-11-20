import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import SignIn from '../components/SignIn';
import Monday from "./monday";
import Tuesday from "./tuesday";
import Wednesday from "./wednesday";

const HomePage = () => {
  const { data: session } = useSession();


  const today = new Date().getDate();

  if (session) {
    return (
      <>
        {today === 5 &&
            <Monday />
        }
        {today === 6 &&
            <Tuesday />
        }
        {today === 7 &&
            <Wednesday />
        }
        {((today !== 5) ||  (today !== 6) || (today !== 7)) &&
            <Monday />
        }

      </>
    );
  }
  return <SignIn />;
};

export default HomePage;
