// import React from 'react';

import { CiVideoOn } from "react-icons/ci";
import { BsChatLeftText } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
const Timeline_Card = ({ timelineData }) => {
    return (
         <div className="flex items-center gap-4 mt-5 border border-gray-200 bg-white p-4 shadow-sm rounded-lg">
          <div>
            {timelineData.actiontype === "call" && <IoIosCall />}
            {timelineData.actiontype === "video" && <CiVideoOn />}
            {timelineData.actiontype === "text" && <BsChatLeftText />}
          </div>
          <div>
            <p className="font-bold">
              {`${timelineData.actiontype === "call" ? "Call " : timelineData.actiontype === "video" ? "Video" : timelineData.actiontype === "text"? "Text" : ""} `}
              with {timelineData.friend}
            </p>
            <p>{timelineData.timestamp}</p>
          </div>
        </div>
    );
};

export default Timeline_Card;