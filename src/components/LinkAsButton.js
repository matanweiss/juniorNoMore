import { Link } from "react-router-dom";

const LinkAsButton = (props) => {

    return (
        <Link to={props.to}
            className={props.secondary ? "inline-block shadow-md bg-white text-slate-700 px-4 py-2 rounded-xl hover:bg-slate-200"
                : "inline-block shadow-md px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 "}>
            {props.text}
        </Link>
    );
}

export default LinkAsButton;