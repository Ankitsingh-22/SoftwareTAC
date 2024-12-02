import React from "react";

function Cards() {
  return (
    <>
     <h1 className="text-[4vw] tracking-tighter ml-16 "> Clients’ reviews</h1>
    <div className="w-ful h-screen  px-[4vw]  items-center flex gap-[2vw] bg-zinc-900">
      
      <div className="cardcontainer h-[55vh] w-1/2">
        <div
          className="card relative h-full w-full  bg-[#004d43] rounded-lg
        flex items-center justify-center"
        >
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute border-[#CDEA68] text-[#CDEA68]  rounded-full py-0.5 px-1.5 border-2 left-[1.5VW] bottom-[1.5VW]  text-[1.1vw]  tracking-tighter">
            ©2019-2022
          </button>
        </div>
      </div>

      <div className="CardContainer  flex  gap-3 h-[55vh] w-1/2">
        <div
          className="card relative h-full   w-1/2  bg-[#212121] rounded-lg
        flex items-center justify-center"
        >
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute border-[#c7c5c5] text-[#c7c5c5]  rounded-full py-0.5 px-1.5 border-2 left-[1.5VW] bottom-[1.5VW]  text-[1.1vw]  tracking-tighter">
            RATING 5.0 ON CLUTHCH
          </button>
        </div>
        <div
          className="card relative h-full w-1/2  bg-[#212121] rounded-lg
          flex items-center justify-center"
          >
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute border-[#c7c5c5] text-[#c7c5c5]  rounded-full py-0.5 px-1.5 border-2 left-[1.5VW] bottom-[1.5VW]  text-[1.1vw]  tracking-tighter">
            BUSINESS BOOTCAMP ALUMMI
          </button>
        </div>
      </div>
    </div>
      <div className="w-full border-t-[1px] mt-8 border-[#747768] flex gap-5"></div>
          </>
  );
}

export default Cards;