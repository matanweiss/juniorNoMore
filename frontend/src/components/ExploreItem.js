import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import Button from "../components/Button";
import LinkAsButton from "./LinkAsButton";
import SubGenreLink from "./SubGenreLink";

const ExploreItem = (props) => {

    const data = {
        id: '4',
        title: 'כותרת',
        location: 'מיקום המשרה',
        hours: 'שעות המשרה',
        details: 'פרטים פרטים פרטים פרטים פרטים פרטים פרטים פרטים פרטים פרטים פרטים פרטים פרטים פרטים פרטים   ',
        subGenres: ['HTML', 'CSS', 'JAVASCRIPT'],
    }

    const renderSubGenres = () => data.subGenres.map(subGenre =>
        <SubGenreLink key={subGenre} to={`/sub-genre/${subGenre}`} text={subGenre} />
    )

    return (
        <div className=" bg-gray-200 rounded-xl p-4 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-center">{data.title}</h4>
            <div className="flex flex-col my-2 gap-2">
                <span className="flex gap-2"><LocationMarkerIcon className="w-6 h-6" />{data.location}</span>
                <span className="flex gap-2"><ClockIcon className="w-6 h-6" />{data.hours}</span>
            </div>
            <p className="mb-4">{data.details}</p>
            <div className="space-x-2">
                {renderSubGenres()}
            </div>
            <div className="mt-8 flex gap-4 lg:flex-row flex-col justify-between relative">
                <LinkAsButton to="/job/4" text={"פרטים נוספים"} />
                {props.applicable && <Button text="הגשת מועמדות" />}
            </div>
        </div>
    );
}

export default ExploreItem;