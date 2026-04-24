"use client"
import { useRouter } from "next/navigation";

export default function Activity(){

    const router = useRouter();

    return (<div>
    <h1>Activity</h1>
    <button 
    className="rounded bg-blue-700" 
    onClick={() => router.push("/")}>Go Home</button>
    </div>
    )
}