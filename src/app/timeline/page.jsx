"use client";

import { useContext } from "react";
import { TimelineContext } from "@/Context/TimelineContext";
import Timeline_Card from "@/components/Timeline_Card";
const TimelinePage = () => {
  const { timelineData } = useContext(TimelineContext);
console.log("timelineData:", timelineData);
 if (timelineData.length === 0) {
  return(
        <p className="mt-5 text-lg font-semibold">No timeline data found</p>
      )
    }
  return (
    <div className="mx-20 mt-20 mb-20">
      <h1 className="text-4xl font-bold">Timeline</h1>
      {timelineData.map((data, index) => (
          <Timeline_Card key={index} timelineData={data} />
        ))}
    </div>
  );
};

export default TimelinePage;
