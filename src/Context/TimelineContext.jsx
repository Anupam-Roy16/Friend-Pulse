"use client";
import { toast } from "react-toastify";
import {
  getAllTimelineListFromLocalDB,
  addTimelineListToLocalDB,
  getClickCountsFromLocalDB,
  addClickCountsToLocalDB,
} from "../utils/localDB";

import { createContext, useState, useEffect } from "react";

// ১. কনটেক্সট তৈরি
export const TimelineContext = createContext();

// ২. প্রোভাইডার তৈরি যা ডাটা ধরে রাখবে এবং শেয়ার করবে
export function TimelineProvider({ children }) {
  const [timelineData, setTimelineData] = useState([]);
  const [clickCounts, setClickCounts] = useState({
    call: 0,
    text: 0,
    video: 0,
  });

  useEffect(() => {
    const savedTimeline = getAllTimelineListFromLocalDB();
    const savedCounts = getClickCountsFromLocalDB();

    // রেন্ডারিং কনফ্লিক্ট এড়াতে setTimeout ব্যবহার করা হলো
    const timer = setTimeout(() => {
      setTimelineData(savedTimeline);
      setClickCounts(savedCounts);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSendData = (type, name) => {
    const dataToSend = {
      actiontype: type,
      friend: name,
      // message: "Hello from friend detail page!",
      timestamp: new Date().toLocaleTimeString(),
    };
    addTimelineListToLocalDB(dataToSend); // লোকাল স্টোরেজে ডাটা সেভ হলো
    setTimelineData([...timelineData, dataToSend]); // কনটেক্সটে ডাটা সেভ হলো
    toast.success("Data added successfully", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });

    if (type === "call" || type === "text" || type === "video") {
      const updatedCounts = {
        ...clickCounts,
        [type]: clickCounts[type] + 1,
      };
      setClickCounts(updatedCounts);
      addClickCountsToLocalDB(updatedCounts); // লোকাল স্টোরেজে সেভ হলো
    }
  };
  // এখানে আপনার শেয়ারড ডাটা থাকবে
  const data = { clickCounts, timelineData, setTimelineData, handleSendData };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
}
