import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AppliedUser from "../components/AppliedUser";
import Button from "../components/Button";
import SubGenreLink from "../components/SubGenreLink";
import { jobs } from "../variables/variables";

const Job = () => {

    const { id } = useParams();

    const data = jobs.filter(job => job.id === id)[0];

    useEffect(() => {
        console.log(data);
        window.scrollTo(0, 0);

    }, [data]);

    const users = [
        { name: 'מתן ויס', id: 1 },
        { name: 'יובל חביב', id: 2 },
        { name: 'דוד סטרינסקי', id: 3 },
        { name: 'אביה שוחטמן', id: 4 },
        { name: 'ליאור בירנדורף', id: 5 },
    ];

    const renderSubGenres = () => data.skills.map(subGenre =>
        <SubGenreLink key={subGenre} to={`/sub-genre/${subGenre}`} text={subGenre} />
    )

    const renderAppliedUsers = () => users.map(user =>
        <AppliedUser key={user.id} user={user} />);



    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="lg:text-4xl text-2xl mt-8 mb-4">{data.name}</h1>
                <div className="flex flex-col mb-4 gap-2">
                    <span className="flex gap-2"><LocationMarkerIcon className="w-6 h-6" />{data.location}</span>
                </div>
                <p>{data.details}</p>
                <div className=" my-4 flex gap-4">
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