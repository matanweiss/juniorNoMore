import { UserIcon } from "@heroicons/react/outline";
import { CheckIcon, PencilIcon, XIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import SubGenreLink from "../components/SubGenreLink";
import { useEffect, useRef, useState } from "react";
import EditableText from "../components/EditableText";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const User = () => {

    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);



    const { isLoading, data } = useQuery('user', () =>
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/get-user',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}` },
                body: JSON.stringify({ id: localStorage.getItem('id') }),
            }
        ).then(res => res.json().then(res => {

        }))
    );

    useEffect(() => {
        if (data) {
            const realData = data[0];
            title.current = realData.firstName + " " + realData.lastName;
            about.current = realData.personalNote;
        }
    }, [data]);



    const demeData = {
        name: 'שלמה כהן',
        about: ' הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש',
        id: id,
        subGenres: ['HTML', 'CSS', 'JAVASCRIPT'],
    }

    const title = useRef(demeData.name);
    const about = useRef(demeData.about);

    const renderSubGenres = () => demeData.subGenres.map(subGenre =>
        <SubGenreLink key={subGenre} to={`/sub-genre/${subGenre}`} text={subGenre} />
    )

    return (
        <div className="px-4">
            <div className="text-right space-y-8 max-w-3xl mx-auto mt-8">
                <div className="flex items-center gap-8">
                    <div className="rounded-full border-2 border-black w-24 h-24 grid place-items-center">
                        <UserIcon className="w-16 h-16 stroke-1" />
                    </div>
                    <EditableText element={title} isEditing={isEditing} additional="lg:text-4xl text-2xl" />
                    <span className="hidden lg:flex mr-auto gap-4">
                        {isEditing && <Button text={<div className="flex">שמירה<CheckIcon className="w-6 h-6" /></div>} />}
                        <Button action={() => { setIsEditing(!isEditing) }}
                            text={isEditing
                                ? <div className="flex">ביטול<XIcon className="w-6 h-6" /></div>
                                : <div className="flex">עריכה<PencilIcon className="w-6 h-6" /></div>}
                        />
                    </span>
                </div>
                <EditableText element={about} isEditing={isEditing} />
                <div className="space-x-2">
                    {renderSubGenres()}
                </div>
                <div className="lg:hidden flex justify-between">
                    <Button action={() => { setIsEditing(!isEditing) }}
                        text={isEditing
                            ? <div className="flex">ביטול<XIcon className="w-6 h-6" /></div>
                            : <div className="flex">עריכה<PencilIcon className="w-6 h-6" /></div>}
                    />
                    {isEditing && <Button text={<div className="flex">שמירה<CheckIcon className="w-6 h-6" /></div>} />}
                </div>
            </div>
        </div>
    );
}

export default User;