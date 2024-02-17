/*
Copyright 2024 Pedro Guijas Bravo, Ángel Miguélez Millos, Elena Sánchez González, Héctor Padín Torrente 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
