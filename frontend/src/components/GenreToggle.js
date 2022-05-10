import { useEffect, useState } from "react";

const GenreToggle = (props) => {

    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(props.currentGenre === props.name);
    }, [props.currentGenre]);

    return (
        <label>
            <input name={props.name} type="checkbox" className="absolute opacity-0" checked={isSelected} onChange={props.action} />
            <div className={`${isSelected ? 'bg-slate-700' : 'bg-slate-500'} transition cursor-pointer px-4 py-2 text-white rounded-xl`}>
                {props.name}
            </div >
        </label>
    );
}

export default GenreToggle;