import { UserIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const AppliedUser = (props) => {
    return (
        <Link to={`/user/${props.user.id}`} className="block relative">
            <div className="bg-gray-200 p-2 flex items-center gap-4">
                <div className="rounded-full border-2 border-black w-12 h-12 grid place-items-center">
                    <UserIcon className="w-8 h-8" />
                </div>
                {props.user.name}
            </div>
        </Link>
    );
}

export default AppliedUser;