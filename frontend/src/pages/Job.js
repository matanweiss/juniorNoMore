import { ClockIcon, LocationMarkerIcon, UserIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import AppliedUser from "../components/AppliedUser";
import Button from "../components/Button";
import SubGenreLink from "../components/SubGenreLink";

const Job = () => {

    const data = {
        editable: true,
        applicable: true,
        subGenres: ['CSS', 'HTML', 'JAVASCRIPT'],
        applied: ['523950239'],
    }

    const renderSubGenres = () => data.subGenres.map(subGenre =>
        <SubGenreLink key={subGenre} to={`/sub-genre/${subGenre}`} text={subGenre} />
    )


    return (
        <div className="px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="lg:text-4xl text-2xl mt-8 mb-4">כותרת המשרה</h1>
                <div className="flex flex-col mb-4 gap-2">
                    <span className="flex"><LocationMarkerIcon className="w-6 h-6" />מיקום המשרה</span>
                    <span className="flex"><ClockIcon className="w-6 h-6" />שעות המשרה</span>
                </div>
                <p>הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה הסבר על המודעה </p>
                <div className="space-x-2 my-4">
                    {renderSubGenres()}
                </div>
                <div className="mt-8 flex justify-between">
                    {data.editable && <Button text={<div className="flex">עריכה<PencilIcon className="w-6 h-6" /></div>} />}
                    {data.applicable && <Button text={"הגשת מועמדות"} />}
                </div>
                <div className="mb-16">
                    <h2 className="lg:text-3xl text-xl text-right mt-24 mb-4">הגישו מועמדות:</h2>
                    <div className="space-y-4">
                        <AppliedUser text="שלמה כהן" />
                        <AppliedUser text="יוסי כהן" />
                        <AppliedUser text="שלמה כהן" />
                        <AppliedUser text="שלמה כהן" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Job;