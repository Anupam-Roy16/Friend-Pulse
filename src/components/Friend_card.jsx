// import React from 'react';

import Image from "next/image";
import Link from "next/link";

const Friend_card = ({ friend }) => {
  return (
    <Link href={`/friend/${friend.id}`} className="block h-full">
      <div className="h-full p-4 flex flex-col items-center bg-base-100 shadow-xl rounded-lg">
        <Image
          src={friend.picture}
          alt="Picture of the author"
          width={80}
          height={80}
          className="rounded-full"
        />
        <p className="font-semibold mt-2">{friend.name}</p>
        <p className="text-sm text-gray-500">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {friend.tags.map((tag) => (
            <div key={tag} className="badge badge-soft badge-primary px-2 py-1">
              {tag}
            </div>
          ))}
        </div>

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
      </div>
    </Link>
  );
};

export default Friend_card;
