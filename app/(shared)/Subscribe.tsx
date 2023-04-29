import React from 'react';

const Subscribe = () => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <h4 className="font-semibold text-base">
        <p className="text-wh-500 my-3 w-5/6 mx-auto">
          Enter email address to get top news and great deals
        </p>
        <input
          className="text-center w-5/6 min-w[100px] px-5 py-2 border-2"
          placeholder="Enter Email Address"
        />
        <button className="bg-accent-red text-white-10 font-semibold w-5/6 min-w-[100px] px-5 py-2">
          SUBSCRIBE
        </button>
      </h4>
    </div>
  );
};

export default Subscribe;
