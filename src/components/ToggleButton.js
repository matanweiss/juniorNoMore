import { useState } from "react";

const ToggleButton = (props) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = e => {
        setIsSelected(!isSelected);
        props.action(e);
    }

    return (
        <button onClick={handleClick} name={props.name}
            className={`${isSelected ? 'bg-slate-700' : 'bg-slate-500'} px-4 hover:bg-slate-200"
                 py-2 text-white rounded-xl hover:bg-slate-600 `}>
            {props.text}
        </button >
    );
}

export default ToggleButton;