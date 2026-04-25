"use client";

import { useEffect, useRef, useState } from "react";
import HandleFile from "@/utils/readfile";


function ProceedIfReady(followersList, followingList){
    if( !followersList || !followingList){
        return
    }
    const followersArray = followersList;
    const followingArray = followingList.relationships_following;

    const followers = followersArray.map((item) => {
        return item.string_list_data?.[0]?.value;
    });
    const following = followingArray.map((item) => {return item?.title});

    const values = findFreeFalkers(followers, following);
    return values;
        
}

function findFreeFalkers(followers, following) {
    const set = new Set(followers);
    const names = following.filter((f) => !set.has(f));
     console.log(names);
     return names;
}
   
export default function MiddleComponent(){

    const follwersRef = useRef(null);
    const followingRef = useRef(null);

    const [followersList, setFollowersList] = useState(null);
    const [followingList, setFollowingList] = useState(null);

    const handleClickFollwers = async (val) => {
        try{
            const data =  await HandleFile(val);
            console.log("Follwers:", data); 
            setFollowersList(data);
        } catch(err){
            console.error('Somthing went wrong', err.message);
        }
        ProceedIfReady();
    }
    const handleClickFollwing = async (val) => {
        try{
            const data =  await HandleFile(val);
            console.log("following:", data); 
            setFollowingList(data);
        } catch(err){
            console.error('Somthing went wrong', err.message);
        }
        ProceedIfReady();
    }

    useEffect(() => {
        ProceedIfReady(followersList, followingList);
    }, [followersList, followingList]);


    
    return (
         <div className="pointer-events-auto w-[90%] max-w-lg p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white">

        <h1 className="text-2xl font-semibold mb-4">
          Find Who dont Follow You back
        </h1>

        <div className="flex justify-center gap-6">

          <div
          onClick={() => follwersRef.current.click()}
          onDragOver={(e) => e.preventDefault()} 
          onDrop={(e)=> {
            e.preventDefault();
            handleClickFollwers(e.dataTransfer.files[0])
          }}
          className="border-2 border-dashed border-white/40 rounded-xl w-1/2 p-6 text-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer">
            <input 
            ref={follwersRef}
            className="hidden"
            type="file"
            accept=".json"
            onChange={(e) => handleClickFollwers(e.target.files[0])}
             />
            <p className="font-medium">Followers</p>
            <p className="text-sm opacity-70 mt-2">
              Drop followers.json here
            </p>
          </div>

          <div className="border-2 border-dashed border-white/40 rounded-xl w-1/2 p-6 text-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
          onClick={() => followingRef.current.click()}
          onDrop={(e) => {
            e.preventDefault();
            handleClickFollwing(e.dataTransfer.files[0])
          }}
          onDragOver={(e) => e.preventDefault()}>
            <p className="font-medium">Following</p>
            <p className="text-sm opacity-70 mt-2">
              Drop following.json here
            </p>
            <input ref={followingRef}
            className="hidden"
            type="file"
            accept=".json"
            onChange={(e) => handleClickFollwing(e.target.files[0])}/>
          </div>

        </div>
      </div>


    )
}