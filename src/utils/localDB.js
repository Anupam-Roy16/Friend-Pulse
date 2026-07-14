// 'use client';
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

export { getAllTimelineListFromLocalDB, addTimelineListToLocalDB };
