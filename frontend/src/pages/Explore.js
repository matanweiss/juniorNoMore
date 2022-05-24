import { useEffect, useState } from "react";
import ExploreItem from "../components/ExploreItem";
import LinkAsButton from "../components/LinkAsButton";
import { jobs } from "../variables/variables";

const Explore = () => {

    const [isJunior, setIsJunior] = useState(false);

    const renderJobs = () => jobs.map(job =>
        <ExploreItem key={job.id} applicable={isJunior} data={job} />
    )


    useEffect(() => {
        window.scrollTo(0, 0);
        if (localStorage.getItem('isJunior')) setIsJunior(true);
    }, []);


    return (
        <div className="px-4">
            <div className="text-center">
                <h1 className="lg:text-4xl text-2xl my-8">פה ניתן לראות את הפרוייקטים שמתאימים לך</h1>
                <div className="mb-12">
                    {localStorage.getItem('isJunior') === "0" && <LinkAsButton to="/add-project" text="הוסף פרוייקט" ></LinkAsButton>}
                </div>
            </div>
            <div className="space-y-16 mb-16">
                {renderJobs()}
            </div>
        </div>
    );
}

export default Explore;