import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-5" >
      <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
      <p className="opacity-70 max-w-xl text-center ">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <br />
      <button className="btn btn-primary">+Add a friend</button>
    </div>
  );
};

export default Banner;
