// 'use client';
// ১. লোকাল স্টোরেজ থেকে ক্লিক কাউন্টের অবজেক্ট নিয়ে আসা
const getClickCountsFromLocalDB = () => {
  if (typeof window === "undefined") {
    return { call: 0, text: 0, video: 0 };
  }
  const counts = localStorage.getItem("clickCounts");
  return counts ? JSON.parse(counts) : { call: 0, text: 0, video: 0 };
};

// ২. লোকাল স্টোরেজে নতুন কাউন্ট অবজেক্ট সেভ করা
const addClickCountsToLocalDB = (counts) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("clickCounts", JSON.stringify(counts));
};

const getAllTimelineListFromLocalDB = () => {
  if (typeof window === "undefined") {
    return;
  }
  const AllTimelineList = localStorage.getItem("TimelineList");
  if (AllTimelineList) {
    return JSON.parse(AllTimelineList);
  } else {
    return [];
  }
};

const addTimelineListToLocalDB = (book) => {
  if (typeof window === "undefined") {
    return;
  }
  const allList = getAllTimelineListFromLocalDB();
  allList.push(book);
  localStorage.setItem("TimelineList", JSON.stringify(allList));
};

export { getAllTimelineListFromLocalDB, addTimelineListToLocalDB, getClickCountsFromLocalDB, addClickCountsToLocalDB };
