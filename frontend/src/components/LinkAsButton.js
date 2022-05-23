import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LinkAsButton = (props) => {

    const colors = {
        regular: "inline-block shadow-md px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 text-center",
        light: "inline-block shadow-md px-4 py-2 rounded-xl hover:bg-slate-400 bg-slate-300 text-slate-700 ",
        secondary: "inline-block shadow-md bg-white text-slate-700 px-4 py-2 rounded-xl hover:bg-slate-200",

    }

    const [color, setColor] = useState(colors.regular);

    useEffect(() => {
        if (props.color) {
            setColor(colors[props.color]);
        }
    }, []);

    return (
        <Link to={props.to}
            className={color + " " + props.additional}>
            {props.text}
        </Link>
    );
}

export default LinkAsButton;