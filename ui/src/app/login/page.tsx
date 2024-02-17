import Link from 'next/link';

export default async function Login() {
    return (
        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl bg-gray-150 items-center">
            <h2 className="text-2xl font-bold text-gray-900">
                Sign in to CustomAIzed
            </h2>
            <form className="mt-8 space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your
                        email</label>
                    <input type="email" name="email" id="email"
                           className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@company.com" defaultValue="admin@customaized.com" required/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your
                        password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           defaultValue="cAHJ_18$iOIA9" required/>
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                               className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                               required/>
                    </div>
                    <div className="ms-3 text-sm">
                        <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this
                            device</label>
                    </div>
                </div>
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
    )
        ;

}