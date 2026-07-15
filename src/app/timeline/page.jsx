"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useContext, useState } from "react";
import { TimelineContext } from "@/Context/TimelineContext";
import Timeline_Card from "@/components/Timeline_Card";

const TimelinePage = () => {
  const [filteredtype, setFilteredType] = useState("all");
  const { timelineData } = useContext(TimelineContext);

  const filteredData = timelineData?.filter((item) => {
    if (filteredtype === "all") return true;
    return item.actiontype === filteredtype;
  });

  if (filteredData.length === 0) {
    return <p className="mt-5 text-lg font-semibold">No timeline data found</p>;
  }
  return (
    <div className="mx-20 mt-20 mb-20">
      <h1 className="text-4xl font-bold">Timeline</h1>
      <div className="dropdown dropdown-start flex justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Click ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => setFilteredType("call")}>
            <a>Call</a>
          </li>
          <li onClick={() => setFilteredType("video")}>
            <a>Video</a>
          </li>
          <li onClick={() => setFilteredType("text")}>
            <a>Text</a>
          </li>
        </ul>
      </div>
      {filteredData.map((data, index) => (
        <Timeline_Card key={index} timelineData={data} />
      ))}
    </div>
  );
};

export default TimelinePage;
