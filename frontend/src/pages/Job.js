import { PencilIcon } from "@heroicons/react/solid";
import Button from "../components/Button";

const Job = (props) => {
    return (
        <div className="px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="lg:text-4xl text-2xl my-8">כותרת המשרה</h1>
                <p>הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה </p>
                <div className="mt-8 flex justify-between">
                    {props.editable && <Button text={<div className="flex">עריכה<PencilIcon className="w-6 h-6" /></div>} />}
                    {props.applicable && <Button text={"הגשת מועמדות"} />}
                </div>
            </div>
        </div>
    );
}

export default Job;