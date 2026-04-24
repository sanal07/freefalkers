import Link from "next/link";

export default function HeaderCompoenent(){
    return (
        <header className="w-full bg-amber-950">
            <nav className="w-full">
                <ul className="flex justify-around w-full p-0">
                   <Link href="/"><li>Home</li></Link> 
                    <li>About</li>
                    <li>Dashborad</li>
                    <li>User</li>
                </ul>
            </nav>
        </header>
    )
}