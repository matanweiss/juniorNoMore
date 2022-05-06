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
        <nav className={` ${isScrolled ? 'text-white bg-slate-700 max-h-16' : "max-h-24"} h-24 z-10 sticky top-0 transition-all px-8 flex items-center`}>
            <Link to="/" className="text-2xl font-bold flex flex-col items-center">
                {isScrolled
                    ? <img src={logoWhite} className={`w-44 transition duration-200 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} alt="" />
                    : <img src={logoBlack} className={`w-44 transition duration-200 ${isScrolled ? 'opacity-0' : 'scale-125 opacity-100'}`} alt="" />
                }
            </Link>
            <div className="mr-auto flex gap-6">

                <Link to="/login" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'}`}>התחברות</Link>
                <Link to="/register" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'}`}>הרשמה</Link>
            </div>
        </nav>
    );
}

export default NavBar;