import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
import AppliedUser from "../components/AppliedUser";
import Button from "../components/Button";
import SubGenreLink from "../components/SubGenreLink";

const Job = () => {

    const { id } = useParams();

    const users = [
        { name: 'שלמה כהן', id: 5215 },
        { name: 'שלמה כהן', id: 52121 },
        { name: 'שלמה כהן', id: 521124 },
        { name: 'שלמה כהן', id: 521512 },
    ];

    const data = {
        id: id,
        title: 'כותרת',
        location: 'מיקום המשרה',
        hours: 'שעות המשרה',
        details: 'פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה פרטי המשרה ',
        editable: true,
        applicable: true,
        subGenres: ['CSS', 'HTML', 'JAVASCRIPT'],
        applied: users,
    }

    const renderSubGenres = () => data.subGenres.map(subGenre =>
        <SubGenreLink key={subGenre} to={`/sub-genre/${subGenre}`} text={subGenre} />
    )

    const renderAppliedUsers = () => data.applied.map(user =>
        <AppliedUser key={user.id} user={user} />);





    return (
        <div className="px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="lg:text-4xl text-2xl mt-8 mb-4">{data.title}</h1>
                <div className="flex flex-col mb-4 gap-2">
                    <span className="flex gap-2"><LocationMarkerIcon className="w-6 h-6" />{data.location}</span>
                    <span className="flex gap-2"><ClockIcon className="w-6 h-6" />{data.hours}</span>
                </div>
                <p>{data.details}</p>
                <div className="space-x-2 my-4">
                    {renderSubGenres()}
                </div>
                <div className="mt-8 flex justify-between">
                    {data.editable && <Button text={<div className="flex">עריכה<PencilIcon className="w-6 h-6" /></div>} />}
                    {data.applicable && <Button text={"הגשת מועמדות"} />}
                </div>
                <div className="mb-16">
                    <h2 className="lg:text-3xl text-xl text-right mt-24 mb-4">הגישו מועמדות:</h2>
                    <div className="border-2 divide-y-2 divide-gray-300 rounded-xl border-gray-300">
                        {renderAppliedUsers()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Job;