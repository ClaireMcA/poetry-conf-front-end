// import React from "react";
import TimeSlots from "./TimeSlots";
import { useRouter } from "next/router";


interface Selection {
    sessionSelection : string;
}

const Selector = ({ sessionSelection }:Selection) => {
  const router = useRouter();

  const { sessionId } = router.query;
  console.log(sessionId);


  return (
    <div>
        {sessionSelection}
        <TimeSlots timeSlots={[1, 2, 3]} />
    </div>
  );
};

export default Selector;
