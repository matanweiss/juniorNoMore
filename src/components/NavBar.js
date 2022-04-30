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
        <nav className={`h-16 ${isScrolled ? 'text-white bg-slate-700' : null} z-10 sticky top-0 transition px-8 flex items-center`}>
            <Link to="/" className="text-2xl font-bold flex flex-col items-center">
                {isScrolled
                    ? <img src={logoWhite} className="w-44" alt="" />
                    : <img src={logoBlack} className="w-44" alt="" />
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