import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button";
import GenreToggle from "../components/GenreToggle";
import SubGenreToggle from "../components/SubGenreToggle";

const FirstLogin = () => {

    const subGenresRef = useRef();

    const [currentGenre, setCurrentGenre] = useState('');

    const genres = [
        'טכנולוגי',
        'עסקי',
        'חינוכי',
    ];

    const techSubGenres = [
        'פיתוח אפליקציות (IOS / Android)',
        'פיתוח WEB',
        'חווית משתמש',
        'QA',
        'עיצוב גרפי',
        'אבטחת מידע',
        'Devops',
    ];

    const businessSubGenres = [
        'בניית תוכנית עסקית',
        'מיתוג',
        'שיווק',
        'דוברות',
        'כתיבת תוכן',
        'שיווק דיגיטלי',
        'צילום מקצועי',
        'עריכת תוכן גרפי',
        'ייעול כוח אדמה',
    ];

    const educationSubGenres = [
        'השתלבות באוכלוסייה מיוחדת',
        'חניכה אצל מורה ותיק (תעודת הוראה)',
    ];

    const renderGenres = () => genres.map(genre =>
        <GenreToggle currentGenre={currentGenre} name={genre} action={handleGenreToggle} key={genre} />
    );

    const handleGenreToggle = e => {
        const name = e.target.name;
        setCurrentGenre(name);
    };

    const logSubGenres = () => {
        const selectedSubGenres = [];
        const children = subGenresRef.current.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i].firstChild;
            if (child.checked) {
                selectedSubGenres.push(child.name);
            }
        }
        if (selectedSubGenres.length === 0) {
            toast.warn('יש לבחור לפחות תחום אחד')
        }
    };

    const renderSubGenres = () => {
        switch (currentGenre) {
            case 'טכנולוגי':
                return techSubGenres.map(genre =>
                    <SubGenreToggle name={genre} key={genre} />
                );
            case 'עסקי':
                return businessSubGenres.map(genre =>
                    <SubGenreToggle name={genre} key={genre} />
                );
            case 'חינוכי':
                return educationSubGenres.map(genre =>
                    <SubGenreToggle name={genre} key={genre} />
                );
        }
    }

    return (
        <div className="mx-4 lg:mx-auto max-w-2xl mt-12 lg:mt-24 space-y-6">
            <h1 className="text-2xl text-center lg:text-4xl">ברוך הבא ל- JuniorNoMore!</h1>
            <p>באיזה תחום הנך מתמקצע?</p>
            <div className="flex gap-2 flex-wrap">
                {renderGenres()}
            </div>
            {currentGenre && <p className="pt-8">כדי שנוכל למצוא לך פרוייקטים מתאימים, אנא בחר מספר תחומים בהם תוכל לתרום לארגונים:</p>}
            <div ref={subGenresRef} className="flex gap-2 flex-wrap">
                {currentGenre && renderSubGenres()}
            </div>
            <div className="lg:text-center">
                <Button action={logSubGenres} text="המשך" additionalClasses="w-full max-w-md lg:w-44  mt-16" />
            </div>
        </div>

    );
}

export default FirstLogin;