// 'use client';
// import React from 'react';
import friends from "@/../public/friends.json";
import Friend_card from "@/components/Friend_card";

const Frinds_Section = () => {
  console.log("Anupam", friends);
  return (
    <div className="grid grid-cols-4 gap-8 ml-20 mr-20 mt-10 pb-15 items-stretch">
      {friends.map((friend) => (
        <Friend_card key={friend.id} friend={friend}></Friend_card>
      ))}
    </div>
  );
};

export default Frinds_Section;
