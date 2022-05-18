import ExploreItem from "../components/ExploreItem";

const Explore = () => {
    return (
        <div className="px-4">
            <div className="text-center">
                <h1 className="lg:text-4xl text-2xl my-8">פה ניתן לראות את המשרות שמתאימות לך</h1>
            </div>
            <div className="space-y-16 ">
                <ExploreItem editable={true} applicable={true} />
                <ExploreItem />
                <ExploreItem editable={true} />
                <ExploreItem applicable={true} />
                <ExploreItem />
            </div>
        </div>
    );
}

export default Explore;