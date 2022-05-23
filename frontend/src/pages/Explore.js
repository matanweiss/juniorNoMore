import { useEffect, useState } from "react";
import ExploreItem from "../components/ExploreItem";

const Explore = () => {

    const [isJunior, setIsJunior] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (localStorage.getItem('isJunior')) setIsJunior(true);
    }, []);


    return (
        <div className="px-4">
            <div className="text-center">
                <h1 className="lg:text-4xl text-2xl my-8">פה ניתן לראות את הפרוייקטים שמתאימים לך</h1>
            </div>
            <div className="space-y-16 ">
                <ExploreItem applicable={isJunior} />
                <ExploreItem applicable={isJunior} />
                <ExploreItem applicable={isJunior} />
                <ExploreItem applicable={isJunior} />
                <ExploreItem applicable={isJunior} />
            </div>
        </div>
    );
}

export default Explore;