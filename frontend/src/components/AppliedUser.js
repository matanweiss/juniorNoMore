import { UserIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const AppliedUser = (props) => {
    return (
        <Link to="/user/4" className="block">
            <div className="bg-gray-200 rounded-xl p-2 flex items-center gap-4">
                <div className="rounded-full border-2 border-black w-12 h-12 grid place-items-center">
                    <UserIcon className="w-8 h-8" />
                </div>
                {props.text}
            </div>
        </Link>
    );
}

export default AppliedUser;