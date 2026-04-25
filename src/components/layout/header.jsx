import Link from "next/link";

export default function HeaderCompoenent(){
    return (
        <header className="absolute p-20 z-50 w-full bg-[#d8ccc700]">
            <nav className="w-full">
                <ul className="flex font-sans justify-around w-full p-0">
                   <Link className="text-[20px] font-semibold text-white" href="/"><li>Home</li></Link> 
                    <li className="text-[20px] font-semibold text-white">About</li>
                    <li className="text-[20px] font-semibold text-white">Dashborad</li>
                    <li className="text-[20px] font-semibold text-white">User</li>
                </ul>
            </nav>
        </header>
    )
}