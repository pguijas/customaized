'use client'

import Link from "next/link";
import Logo from "../../public/Logo.png";
import { usePathname } from "next/navigation";

export default async function NavBarApp() {

    const pathname = usePathname()
    
    return (
        <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between">
            <div className="flex gap-2 w-28 h-full">
                <Link href="/">
                <img src={Logo.src} alt="CustomAIzed Logo" className="h-auto max-w-full" />
                </Link>
            </div>
 
            <div className="flex gap-4 lg:ml-auto">
                <Link href="/models">
                    <button 
                        className={"border-transparent border-4 hover:bg-gray-200 text-sm py-1 px-2 rounded" + (pathname === '/models' ? ' bg-gray-100' : '')}
                    >   
                        Model
                    </button>
                </Link>
                <Link href="/models/inference">
                    <button 
                        className={"border-transparent border-4 hover:bg-gray-200 text-sm py-1 px-2 rounded" + (pathname === '/inference' ? ' bg-gray-100' : '')}
                    >   
                        Inference
                    </button>                
                </Link>
         
            </div>
        </div>
    );
}
