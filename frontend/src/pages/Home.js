import { Link } from "react-router-dom";
import LinkAsButton from "../components/LinkAsButton";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";

const Home = () => {
    return (
        <>
            <div className="lg:flex">
                <div className="lg:w-[50%] bg-slate-700 text-white text-center p-12 space-y-4">
                    <h1 className="lg:text-4xl text-2xl">ג'וניורים</h1>
                    <p>בואו להיות <b>מתמחים</b> ותתחילו את הקריירה עכשיו</p>
                    <LinkAsButton to="/login" text="התחילו כאן" color="light" />
                </div>
                <div className="lg:w-[50%] bg-slate-300 text-center p-12 space-y-4">
                    <h1 className="lg:text-4xl text-2xl">מעסיקים</h1>
                    <p>הצטרפו למאגר <b>הארגונים החונכים</b> ותנו הזדמנות לדור העתיד</p>
                    <LinkAsButton to="/login" text="התחילו כאן" additional="px-8" />
                </div>
            </div>
            <div className="text-center space-y-8 p-12 max-w-4xl mx-auto">
                <h1 className="lg:text-4xl text-2xl">מי אנחנו?</h1>
                <p className="text-right tracking-wide leading-7">שוק התעסוקה התחרותי של היום זה כבר ידוע, לצעירים חסרי ניסיון תעסוקתי קשה למצוא עבודה
                    תואמת השכלה. הקושי מתעצם עבור צעירים המגיעים מהפריפריה החברתית או הגאוגרפית של
                    ישראל.
                    אנחנו בפלטפורמה יוצרים גשרים בין עולם האקדמיה לעולם התעסוקה. בנינו פלטפורמה, שהיא כלי
                    המשרת בצורה יעילה ופשוטה המסייעים לסטודנטים לצבור ניסיון עוד במהלך לימודיהם באמצעות
                    פרוייקטים ממוקדים ויד ביד המאפשרת צמיחה לקידום עסקים קטנים ובינונים.</p>

            </div>
            <div className="lg:pb-32 px-4 bg-slate-100 overflow-hidden">
                <h2 className="text-center text-2xl p-12">המוסדות שעובדים איתנו</h2>
                <div className="hidden lg:flex justify-evenly">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                </div>
                <div className="flex gap-8 lg:hidden animate-scroll ">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo1} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-y-16 place-items-center mt-24 pb-16 lg:hidden">
                    <Link to="/" className=''>דף הבית</Link>
                    <Link to="/explore" className=''>משרות</Link>
                    <Link to="/" className=''>שאלות ותשובות</Link>
                    <Link to="/" className=''>צור קשר</Link>
                </div>
            </div>
        </>
    );
}

export default Home;