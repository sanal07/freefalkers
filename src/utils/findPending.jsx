export default function FindPending(val){

    if(!val) return 

    const requestArray = val.relationships_follow_requests_sent;

    if(!requestArray) return

    const names = requestArray.map((item) => {
        return item.string_list_data?.[0]?.value;
    }).filter(Boolean);

    if(!names){
        return
    }

    return names
}