import { useState } from "react";

const GenreToggle = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => setIsChecked(!isChecked);

    return (
        <label>
            <input name={props.text} type="checkbox" className="absolute opacity-0" checked={isChecked} onChange={handleChange} />
            <div className={`${isChecked ? 'bg-slate-700' : 'bg-slate-500'} cursor-pointer px-4 py-2 text-white rounded-xl hover:bg-slate-600`}>
                {props.text}
            </div >
        </label>
    );
}

export default GenreToggle;