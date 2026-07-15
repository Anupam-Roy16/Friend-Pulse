"use client";

"use client";
import { useContext } from "react";
import { TimelineContext } from "@/Context/TimelineContext";

import React from "react";
import { Pie, PieChart } from "recharts";

const StatPage = () => {
  const { clickCounts } = useContext(TimelineContext);
  const data = [
    { name: "Group A", value: clickCounts.call, fill: "#0088FE" },
    { name: "Group B", value: clickCounts.text, fill: "#00C49F" },
    { name: "Group C", value: clickCounts.video, fill: "#FFBB28" },
  ];
  return (
    <div className="m-10">
      <p className="text-5xl font-bold">Friendship Analytics</p>
      <div className="bg-gray-100 mt-5">
        <p className="p-5">By Interaction Type</p>
        <PieChart
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            margin: "0 auto",
            width: "20%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            //   isAnimationActive={isAnimationActive}
          />
          {/* <RechartsDevtools /> */}
        </PieChart>
        <div className="flex justify-center gap-10 mt-5">
          <div className="flex gap-2 items-center"  >
            <div className="w-3 h-3 rounded-full bg-[#00C49F]"></div>
            <p>Text</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#0088FE]"></div>
            <p>Call</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFBB28]"></div>
            <p>Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatPage;
