import { PencilIcon } from "@heroicons/react/solid";
import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import LinkAsButton from "./LinkAsButton";
import SubGenreLink from "./SubGenreLink";

const ExploreItem = (props) => {
    return (
        <div className=" bg-gray-200 rounded-xl p-4 shadow-lg max-w-4xl mx-auto">
            <h4 className="text-center"> מודעה </h4>
            <div className="flex flex-col my-2 gap-2">
                <span className="flex"><LocationMarkerIcon className="w-6 h-6" />מיקום המשרה</span>
                <span className="flex"><ClockIcon className="w-6 h-6" />שעות המשרה</span>
            </div>
            <p>הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה </p>
            <div className="space-x-2">
                <SubGenreLink to="/sub-genre/css" text="CSS" />
                <SubGenreLink to="/sub-genre/HTML" text="HTML" />
                <SubGenreLink to="/sub-genre/JAVASCRIPT" text="JAVASCRIPT" />
            </div>
            <div className="mt-8 flex justify-between relative">
                {props.editable && <Button text={<div className="flex">עריכה<PencilIcon className="w-6 h-6" /></div>} />}
                <div className="absolute inset-x-0 text-center">
                    <LinkAsButton to="/job/4" text={"פרטים נוספים"} />
                </div>
                <Button text={"הגשת מועמדות"} additionalClasses={`${props.applicable ? '' : 'opacity-0'}`} />
            </div>
        </div>
    );
}

export default ExploreItem;