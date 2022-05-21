import { Link } from "react-router-dom";

const SubGenreLink = (props) => {
    return (
        <Link to={props.to} className="bg-gray-400/50 rounded-md px-2 py-1">{props.text}</Link>
    );
}

export default SubGenreLink;