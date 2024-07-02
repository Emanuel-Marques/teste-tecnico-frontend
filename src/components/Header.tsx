import logoBe from '../assets/logo/Logo Be.png';

export default function Header() {
    return (
        <nav className="bg-white border-gray-200 shadow-md">
            <div className="max-w-screen-xl p-4 pl-9">
                <a href="/" className="flex items-center space-x-3 pl-0 ml-0">
                    <img src={logoBe} className="h-8" alt="Logo Be Mobile" />
                </a>
            </div>
        </nav>
    )
}