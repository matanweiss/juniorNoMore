import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <nav className={`h-16 ${isScrolled ? 'text-white bg-slate-700' : null} sticky top-0 transition px-8 flex items-center`}>
            <Link to="/" className="text-2xl font-bold flex flex-col items-center">
                <p className="tracking-wider font-extrabold">
                    Junior
                </p>
                <p className="text-sm -translate-y-1.5 tracking-wide">
                    NoMore
                </p>
            </Link>
            <div className="mr-auto flex gap-6">

                <Link to="/login" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'}`}>התחברות</Link>
                <Link to="/register" className={`${isScrolled ? 'hover:text-slate-300' : 'hover:text-slate-600'}`}>הרשמה</Link>
            </div>
        </nav>
    );
}

export default NavBar;