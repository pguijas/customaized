import Link from "next/link";
import Logo from "../../public/Logo.png";

export default async function NavBar() {

    return (
        <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between">
            <div className="flex gap-2 h-full w-28">
                <a href="/ui/public" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                <Link href="/signup">
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