import React from "react";
import TimeSlots from "../components/TimeSlots";
import { useRouter } from "next/router";

const Selector = () => {
  const router = useRouter();

  const { sessionId } = router.query;
  console.log(sessionId);

  return <TimeSlots timeSlots={[8, 9, 10]} />;
};

export default Selector;
