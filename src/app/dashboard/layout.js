"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({children}){
    const path = usePathname();
    return(
        <div>
            <h1>Dash</h1>
            <nav >
                <Link className={`p-2 m-2 ${path == '/dashboard/settings'? 'bg-blue-600': 'bg-yellow-300'}`} href="/dashboard/settings">settings</Link>
                <Link className={`p-2 m-2 ${path == '/dashboard/settings'? 'bg-blue-600': 'bg-yellow-300'}`} href="/dashboard/activity">Activity</Link>
             </nav>
            <div>{children}</div>
    </div>
    )
}