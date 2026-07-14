"use client";
import { toast } from "react-toastify";
import {
  getAllTimelineListFromLocalDB,
  addTimelineListToLocalDB,
} from "../utils/localDB";

import { createContext, useState, useEffect } from "react";

// ১. কনটেক্সট তৈরি
export const TimelineContext = createContext();

// ২. প্রোভাইডার তৈরি যা ডাটা ধরে রাখবে এবং শেয়ার করবে
export function TimelineProvider({ children }) {
  const [timelineData, setTimelineData] = useState([]);
  useEffect(() => {
    const savedData = getAllTimelineListFromLocalDB();
    setTimelineData(savedData);
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
  };
  // এখানে আপনার শেয়ার্ড ডাটা থাকবে
  const data = { timelineData, setTimelineData, handleSendData };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
}
