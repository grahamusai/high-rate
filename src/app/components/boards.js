import React from "react";

const Boards = () => {
  return (
    <div className="md:flex gap-8">
      <div
        className="bg-slate-950 py-4 px-4 w-2/3 rounded-xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/card-bg.png')` }}
      >
        <h2 className="text-white">Todays Rate per USD</h2>
        <span className="text-teal-500 text-4xl">12,000.00</span>
      </div>
      <div className="w-1/3">
        <div
          className=" px-5 py-12 rounded-xl mb-2 text-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/card2-bg.png')` }}
        >
          <h2>Buy USD</h2>
        </div>
        <div className="bg-[#D9D9D9] px-5 py-12 rounded-xl text-slate-900">
          <h2>Buy USD</h2>
        </div>
      </div>
    </div>
  );
};

export default Boards;
