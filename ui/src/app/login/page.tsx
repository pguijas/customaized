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

import Link from 'next/link';
import React, { Suspense } from 'react';
import NavBarHome from "@/components/NavBarHome";


export default async function Login() {
    return (
        <div><section>
        <Suspense
            fallback={
                <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }>
            <NavBarHome />
        </Suspense>
        </section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <center>
        <div className="w-full max-w-xl mt-16 p-8 bg-gray-50 rounded-lg space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
                Sign in to CustomAIzed
            </h2>
            <form className="mt-8 space-y-6" action="#">
                <center>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
                        email</label>
                    <input type="email" name="email" id="email"
                           className="border text-gray-900 py-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com" defaultValue="admin@customaized.com" required/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 py-2 text-sm font-medium text-gray-900">Your
                        password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           defaultValue="cAHJ_18$iOIA9" required/>
                </div>
                <div className="flex items-start">
                    <div className="flex py-10 items-center h-5">
                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                               className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                               required/>
                    </div>
                    <div className="flex py-10 px-2 items-center h-5">
                        <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this
                            device</label>
                    </div>
                </div>
                </center>
                <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
                <Link href="/models">
                    <button type="button"
                            className="text-white bg-gradient-to-r bg-blue-500 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Login
                    </button>
                </Link>
                </div>
            </form>
        </div>
        </center>
        </div></div>
    )
        ;

}