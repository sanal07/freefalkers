"use client";

import FindPending from "@/utils/findPending";
import { useRef, useState } from "react"

export default function PendingRequestsComponent(){

    const [names, setNames] = useState(null);

    const requestref = useRef(null);

    async function handleClick(val){
        const data = await val.text()
        const json = JSON.parse(data);
        try{
            const values = await FindPending(json);
            setNames(values);
        }
        catch(err){
            throw new Error("Somthing went wrong", err.message);
        } 
        
    }

    return(
        <div className="pointer-events-auto w-[95%] sm:w-[85%] max-w-lg p-5 sm:p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white">

            <h1 className="text-lg sm:text-2xl font-semibold mb-4 leading-snug">
            Find pending requests send by you
            </h1>
            <div className="flex justify-center gap-3 sm:gap-6">

        <div
          onClick={() => requestref.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleClick(e.dataTransfer.files[0]);
          }}
          className="border-2 border-dashed border-white/40 rounded-xl w-full p-4 sm:p-6 text-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
        >
          <input
            ref={requestref}
            className="hidden"
            type="file"
            accept=".json"
            onChange={(e) => handleClick(e.target.files[0])}
          />
          <p className="font-medium text-sm sm:text-base">Following</p>
          <p className="text-xs sm:text-sm opacity-70 mt-1 sm:mt-2">
            Drop pending_follow_requests.json here
          </p>

          {names && (
            <p className="text-green-400 text-xs mt-1">✓ Loaded</p>
          )}

        </div>

      </div>
      {names && (
        <div className="mt-5 sm:mt-6 w-full">
            <p className="text-xs sm:text-sm opacity-70 mb-2">You have {names.length} pending Requests</p>
            <ul className="max-h-52 sm:max-h-64 overflow-y-auto flex flex-col gap-1.5 sm:gap-2">
            {names.map((name, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white/10 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm"
              >
                <span className="truncate mr-2">{name}</span>
                <a
                  href={`https://instagram.com/${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 text-xs underline shrink-0"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}


        </div>
    )
}