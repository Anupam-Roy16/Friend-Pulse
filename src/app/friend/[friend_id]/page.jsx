// import React from 'react';
"use client";
import { MdDelete } from "react-icons/md";
import { FaArchive } from "react-icons/fa";
import { MdOutlineSnooze } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { BsChatLeftText } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";

import friends from "@/../public/friends.json";
import Image from "next/image";

import { useContext, useEffect, use } from "react";
import { TimelineContext } from "@/Context/TimelineContext";

const Page = ({ params }) => {
  const resolveparams = use(params);
  const friend_id  = resolveparams.friend_id;
  const friend = friends.find((f) => f.id === parseInt(friend_id));
  const { handleSendData } = useContext(TimelineContext);

  return (
    <div className="mx-20 mt-20 mb-20 grid grid-cols-5 grid-rows-8 gap-3">
      <div className="flex flex-col items-center justify-center gap-3 border border-gray-200 bg-white p-6 shadow-sm col-span-2 row-span-5 text-center">
        <Image
          src={friend.picture}
          alt="Picture of the author"
          width={80}
          height={80}
          className=" rounded-full"
        />
        <h1>{friend.name}</h1>
        <p
          className={`mt-2 px-3 py-1 rounded-full font-semibold text-sm ${
            friend.status === "almost due"
              ? "badge badge-secondary"
              : friend.status === "overdue"
                ? "badge badge-accent"
                : "badge badge-info"
          }`}
        >
          {friend.status}
        </p>
        <div>
          {friend.tags.map((tag) => (
            <div key={tag} className="badge badge-soft badge-primary px-2 py-1">
              {tag}
            </div>
          ))}
        </div>
        <p className="italic">{`"{friend.bio}"`}</p>
        <p className="opacity-70">preferred: {friend.email}</p>
      </div>
      <div className="flex gap-5 flex-col items-center justify-center border border-gray-200 bg-white p-6 shadow-sm col-span-1 row-span-3">
        <p className="text-4xl font-semibold">{friend.days_since_contact}</p>
        <p className="opacity-70">Days Since Contact</p>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center border border-gray-200 bg-white p-6 shadow-sm col-span-1 row-span-3">
        <p className="text-4xl font-semibold">{friend.goal}</p>
        <p className="opacity-70">Goal Days</p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center border border-gray-200 bg-white p-6 shadow-sm col-span-1 row-span-3">
        <p className="text-3xl font-semibold">{friend.next_due_date}</p>
        <p className="opacity-70">Next Due</p>
      </div>

      <div className=" flex flex-col gap-3 border border-gray-200 bg-white p-6 shadow-sm col-span-3 row-span-2">
        <div className="text-lg flex justify-between gap-2">
          <p>Relationship Goal</p>
          <button className="btn text-lg">Edit</button>
        </div>
        <p className="text-lg ">
          Connect Every <span className="font-bold">{friend.goal} Days</span>
        </p>
      </div>
      <div className=" border-gray-200 bg-white p-6 shadow-sm justify-center flex items-center gap-4 border col-span-2 row-span-1">
        <MdOutlineSnooze />
        <p>Snooze two weeks</p>
      </div>
      <div className="col-span-3 row-span-3 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold mb-5">Quick Check-In</p>
        <div className="grid grid-cols-3 gap-4">
          <button onClick={()=>handleSendData("call",friend.name)} className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-slate-50 text-sm text-slate-700 transition hover:border-blue-200 hover:bg-white hover:shadow-md">
            <div className="text-2xl">
              <IoIosCall />
            </div>
            <span className="font-medium">Call</span>
          </button>

          <button onClick={()=>handleSendData("text",friend.name)} className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-slate-50 text-sm text-slate-700 transition hover:border-blue-200 hover:bg-white hover:shadow-md">
            <div className="text-2xl">
              <BsChatLeftText />
            </div>
            <span className="font-medium">Text</span>
          </button>
          <button onClick={()=>handleSendData("video",friend.name)} className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-slate-50 text-sm text-slate-700 transition hover:border-blue-200 hover:bg-white hover:shadow-md">
            <div className="text-2xl">
              <CiVideoOn />
            </div>
            <span className="font-medium">Video</span>
          </button>
        </div>
      </div>
      <div className="border-gray-200 bg-white p-6 shadow-sm justify-center flex items-center gap-4 border col-span-2 row-span-1">
        <FaArchive />
        <p>Archive</p>
      </div>
      <div className="border-gray-200 bg-white p-6 shadow-sm justify-center flex items-center gap-4 border col-span-2 row-span-1">
        <div className="text-red-500">
          {" "}
          <MdDelete />
        </div>

        <p className="text-red-500 font-semibold">Delete</p>
      </div>
    </div>
  );
};

export default Page;
