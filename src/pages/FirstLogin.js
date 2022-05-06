import { useState } from "react";
import Button from "../components/Button";
import ToggleButton from "../components/ToggleButton";

const FirstLogin = () => {

    const [genres, setGenres] = useState([
        { name: 'אפשרות 1', isSelected: false },
        { name: 'אפשרות 2', isSelected: false },
        { name: 'אפשרות 3', isSelected: false },
        { name: 'אפשרות 4', isSelected: false },
        { name: 'אפשרות 512', isSelected: false },
        { name: 'אפשרות 421', isSelected: false },
        { name: 'אפשרות 5', isSelected: false },
        { name: 'אפשרות 12', isSelected: false },
        { name: 'אפשרות 412', isSelected: false },
    ])

    const renderGenres = () => genres.map(genre =>
        <ToggleButton name={genre.name} key={genre.name} action={handleGenreClick} text={genre.name} />
    );

    const handleGenreClick = e => {
        const name = e.target.name;
        console.log(name);
        const newGenres = genres.map(genre => genre.name === name ? { ...genre, isSelected: !genre.isSelected } : genre);
        setGenres(newGenres);
    }


    return (
        <div className="mx-4 lg:mx-auto max-w-lg mt-12 lg:mt-24 space-y-6">
            <h1 className="text-2xl text-center lg:text-4xl">ברוך הבא ל- JuniorNoMore!</h1>
            <p>כדי שנוכל למצוא לך פרוייקטים מתאימים, אנא בחר מספר תחומים בהם תוכל לתרום לארגונים:</p>
            <div className="flex gap-2 flex-wrap">
                {renderGenres()}
            </div>
            <div className="lg:text-center">
                <Button text="המשך" additionalClasses="w-full lg:w-36  mt-16" />
            </div>
        </div>

    );
}

export default FirstLogin;