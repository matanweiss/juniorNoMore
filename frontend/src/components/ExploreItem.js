import { PencilIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import LinkAsButton from "./LinkAsButton";

const ExploreItem = (props) => {
    return (
        <div className=" bg-gray-200 rounded-xl p-4 shadow-lg">
            <h4 className="text-center"> מודעה </h4>
            <p>הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה </p>
            <div className="space-x-2">
                <span className="bg-gray-400/50 rounded-md px-2 py-1">CSS</span>
                <span className="bg-gray-400/50 rounded-md px-2 py-1">HTML</span>
                <span className="bg-gray-400/50 rounded-md px-2 py-1">JAVASCRIPT</span>
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