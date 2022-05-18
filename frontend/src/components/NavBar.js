import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../assets/logoBlack.png"
import logoWhite from "../assets/logoWhite.png"

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkScrollPosition = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    return (
        <nav className={` ${isScrolled ? 'text-white bg-slate-700 lg:pt-4 lg:-translate-y-4' : "lg:max-h-24"} h-16 lg:h-24 z-10 sticky top-0 transition-all px-8 flex items-center`}>
            <Link to="/" className="text-2xl font-bold flex flex-col items-center">
                <div className="translate-x-8 lg:translate-x-0">
                    {isScrolled
                        ? <img src={logoWhite} className={`w-44 transition ${isScrolled ? 'opacity-100' : 'opacity-0'}`} alt="" />
                        : <img src={logoBlack} className={`w-44 transition ${isScrolled ? 'opacity-0' : 'lg:scale-125 opacity-100'}`} alt="" />
                    }
                </div>
            </Link>
            <Link to="/" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'} hidden lg:inline mr-16 ml-8`}>דף הבית</Link>
            <Link to="/explore" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'} hidden lg:inline ml-8`}>משרות</Link>
            <Link to="/login" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'} hidden lg:inline ml-8`}>צור קשר</Link>
            <Link to="/login" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'} hidden lg:inline `}>שאלות ותשובות</Link>

            <div className="mr-auto flex gap-6">

                <Link to="/login" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'}`}>התחברות</Link>
                <Link to="/register" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'}`}>הרשמה</Link>
            </div>
        </nav>
    );
}

export default NavBar;