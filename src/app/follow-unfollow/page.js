"use client";

import { useRef, useState, useMemo } from "react";
import HandleFile from "@/utils/readfile";
import ProceedIfReady from "@/utils/check";

export default function MiddleComponent() {
  const follwersRef = useRef(null);
  const followingRef = useRef(null);

  const [followersList, setFollowersList] = useState(null);
  const [followingList, setFollowingList] = useState(null);

  const nonFollowers = useMemo(() => {
    return ProceedIfReady(followersList, followingList) ?? null;
  }, [followersList, followingList]);

  const handleClickFollwers = async (val) => {
    try {
      const data = await HandleFile(val);
      setFollowersList(data);
    } catch (err) {
      console.error("Something Went Wrong", err.message);
    }
  };

  const handleClickFollwing = async (val) => {
    try {
      const data = await HandleFile(val);
      setFollowingList(data);
    } catch (err) {
      console.error("Something went wrong", err.message);
    }
  };

  return (
    <div className="pointer-events-auto w-[90%] max-w-lg p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white">
      <h1 className="text-2xl font-semibold mb-4">
        Find Who Don&apos;t Follow You Back
      </h1>

      <div className="flex justify-center gap-6">
        <div
          onClick={() => follwersRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleClickFollwers(e.dataTransfer.files[0]);
          }}
          className="border-2 border-dashed border-white/40 rounded-xl w-1/2 p-6 text-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
        >
          <input
            ref={follwersRef}
            className="hidden"
            type="file"
            accept=".json"
            onChange={(e) => handleClickFollwers(e.target.files[0])}
          />
          <p className="font-medium">Followers</p>
          <p className="text-sm opacity-70 mt-2">Drop followers.json here</p>
          {followersList && (
            <p className="text-green-400 text-xs mt-1">✓ Loaded</p>
          )}
        </div>

        <div
          onClick={() => followingRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleClickFollwing(e.dataTransfer.files[0]);
          }}
          className="border-2 border-dashed border-white/40 rounded-xl w-1/2 p-6 text-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
        >
          <input
            ref={followingRef}
            className="hidden"
            type="file"
            accept=".json"
            onChange={(e) => handleClickFollwing(e.target.files[0])}
          />
          <p className="font-medium">Following</p>
          <p className="text-sm opacity-70 mt-2">Drop following.json here</p>
          {followingList && (
            <p className="text-green-400 text-xs mt-1">✓ Loaded</p>
          )}
        </div>
      </div>

      {nonFollowers && (
        <div className="mt-6 w-full">
          <p className="text-sm opacity-70 mb-2">
            {nonFollowers.length}{" "}
            {nonFollowers.length !== 1 ? "accounts" : "account"} don&apos;t
            follow you back
          </p>
          <ul className="max-h-64 overflow-y-auto flex flex-col gap-2">
            {nonFollowers.map((name, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2 text-sm"
              >
                <span>{name}</span>
                <a
                  href={`https://instagram.com/${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 text-xs underline"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}