import React from "react";

const ModalLayout = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" md:min-w-[446px] bg-white rounded-xl">
        <div className="flex-row flex items-center justify-between px-4 py-4 bg-red w-full rounded-t-xl text-white">
          <div className="flex flex-row gap-2">
            <img src=".././Logo.svg"></img>
            <h1 className="font-black text-[32px]">Reserveat</h1>
          </div>

          <button className="font-black text-2xl" onClick={closeModal}>
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
