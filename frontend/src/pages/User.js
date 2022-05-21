import { UserIcon } from "@heroicons/react/outline";
import { CheckIcon, PencilIcon, XIcon } from "@heroicons/react/solid";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import SubGenreLink from "../components/SubGenreLink";
import { useRef, useState } from "react";
import EditableText from "../components/EditableText";

const User = () => {

    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    const data = {
        name: 'שלמה כהן',
        about: ' הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש הסבר על המשתמש',
        id: id,
        subGenres: ['HTML', 'CSS', 'JAVASCRIPT'],
    }

    const title = useRef(data.name);
    const about = useRef(data.about);

    const renderSubGenres = () => data.subGenres.map(subGenre =>
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
                    <span className="mr-auto flex gap-4">
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
            </div>
        </div>
    );
}

export default User;