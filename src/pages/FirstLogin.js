import { useRef, useState } from "react";
import Button from "../components/Button";
import GenreToggle from "../components/GenreToggle";

const FirstLogin = () => {

    const genresRef = useRef();

    const genres = [
        'אפשרות 13',
        'אפשרות 12',
        'אפשרות 19',
        'אפשרות 9',
        'אפשרות 8',
        'אפשרות 7',
        'אפשרות 6',
        'אפשרות 5',
        'אפשרות 4',
        'אפשרות 3',
        'אפשרות 2',
    ];

    const renderGenres = () => genres.map(genre =>
        <GenreToggle name={genre} key={genre} text={genre} />
    );

    const logGenres = () => {
        const children = genresRef.current.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i].firstChild;
            console.log(child.checked, child.name);
        }
    }

    return (
        <div className="mx-4 lg:mx-auto max-w-lg mt-12 lg:mt-24 space-y-6">
            <h1 className="text-2xl text-center lg:text-4xl">ברוך הבא ל- JuniorNoMore!</h1>
            <p>כדי שנוכל למצוא לך פרוייקטים מתאימים, אנא בחר מספר תחומים בהם תוכל לתרום לארגונים:</p>
            <div ref={genresRef} className="flex gap-2 flex-wrap">
                {renderGenres()}
            </div>
            <div className="lg:text-center">
                <Button action={logGenres} text="המשך" additionalClasses="w-full lg:w-36  mt-16" />
            </div>
        </div>

    );
}

export default FirstLogin;