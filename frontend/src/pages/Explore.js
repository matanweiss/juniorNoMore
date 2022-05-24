import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ExploreItem from "../components/ExploreItem";
import LinkAsButton from "../components/LinkAsButton";

const Explore = () => {

    const [isJunior, setIsJunior] = useState(false);
    const [jobs, setJobs] = useState([]);

    const { isLoading, data } = useQuery('jobs', () =>
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/get-projects')
            .then(res => res.json())
    );

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (localStorage.getItem('isJunior')) setIsJunior(true);

    }, []);

    useEffect(() => {
        if (data) {
            setJobs(data);
        }
    }, [data]);

    const renderJobs = () => jobs.map(job =>
        <ExploreItem applicable={isJunior} data={job} />
    )

    return (
        <div className="px-4">
            <div className="text-center">
                <h1 className="lg:text-4xl text-2xl my-8">פה ניתן לראות את הפרוייקטים שמתאימים לך</h1>
                <div className="mb-12">
                    {localStorage.getItem('isJunior') === "0" && <LinkAsButton to="/add-project" text="הוסף פרוייקט" ></LinkAsButton>}
                </div>
            </div>

            <div className="space-y-16 ">
                {renderJobs()}
            </div>
        </div>
    );
}

export default Explore;