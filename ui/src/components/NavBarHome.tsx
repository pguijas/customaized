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

import Link from "next/link";
import Logo from "../../public/Logo.png";

export default async function NavBar() {

    return (
        <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between">
            <div className="flex gap-2 h-full w-28">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo.src} alt="CustomAIzed Logo" className="h-auto max-w-full" />
                </a>
            </div>

            <div className="flex gap-4 lg:ml-auto">
                <Link href="/login">
                    <button
                        className="flex-shrink-0 border-transparent border-4 bg-gray-50 hover:bg-gray-100 text-sm py-1 px-2 rounded"
                        type="button"
                    >
                        Login
                    </button>
                </Link>
                <Link href="/models">
                    <button
                        className="flex-shrink-0 border-transparent border-4 bg-gray-100 hover:bg-gray-100 text-sm py-1 px-2 rounded"
                        type="button"
                    >
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
}