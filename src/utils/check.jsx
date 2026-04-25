export function findNonFollowbacks(followersList, followingList) {
    if (!followersList || !followingList) return null;

    const followers = followersList.map((item) => item.string_list_data?.[0]?.value);
    const following = followingList.relationships_following.map((item) => item?.title);

    const set = new Set(followers);
    const nonFollowbacks = following.filter((f) => !set.has(f));

    return nonFollowbacks;
}