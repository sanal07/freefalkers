export default function ProceedIfReady(followersList, followingList){

  if( !followersList || !followingList){
      return
  }

  const followersArray = followersList;
  const followingArray = followingList.relationships_following;

   const followers = followersArray.map((item) => {
      return item.string_list_data?.[0]?.value;
  });
  const following = followingArray.map((item) => {return item?.title}); 
  
    const set = new Set(followers);
    const names = following.filter((f) => !set.has(f));
    
    return names
       
} 

