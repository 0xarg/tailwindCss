import React from "react";

const Responsive = () => {
  return (
    <div className="flex flex-col md:flex-row 3xl:bg-red-900 items-center gap-10">
      <div className="size-40 rounded-2xl bg-neutral-200" />
      <div className="size-40 rounded-2xl bg-red-200" />
      <div className="size-40 rounded-2xl bg-blue-200" />
    </div>
  );
};

export default Responsive;
