import { useState } from "react";

const SubGenreToggle = (props) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleChange = () => setIsSelected(!isSelected);

    return (
        <label>
            <input name={props.name} type="checkbox" className="absolute opacity-0" checked={isSelected} onChange={handleChange} />
            <div className={`${isSelected ? 'bg-slate-700' : 'bg-slate-500'} transition cursor-pointer px-4 py-2 text-white rounded-xl`}>
                {props.name}
            </div >
        </label>
    );
}

export default SubGenreToggle;