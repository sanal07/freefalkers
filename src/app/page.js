import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full bg-amber-400 h-100">
     <Link href="/dashboard"><h1>Main Layout</h1></Link>
    </div>
    
  );
}
