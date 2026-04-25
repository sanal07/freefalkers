export default async function HandleFile(file){
   
     if(!file) throw new Error("No file is Uploaded")
     if(!file.name.endsWith('.json')) throw new Error('Only json files are allowed') 

     const res = await file.text();
     const data  =  JSON.parse(res)
     return data;
};