import LinkAsButton from "../components/LinkAsButton";

const Home = () => {
    return (
        <>
            <div className="lg:h-screen">
                <div className="mx-4 lg:mx-auto max-w-lg mt-12 lg:mt-36 space-y-6">
                    <div className="relative select-none text-3xl lg:text-5xl text-[#1d1d1f]">
                        <span className="pointer-events-none absolute right-0 top-0 scale-125 opacity-30 translate-x-12">1</span>
                        מצא פרוייקט לעבוד עליו
                    </div>
                    <div className="relative select-none text-3xl lg:text-5xl text-[#1d1d1f]">
                        <span className="pointer-events-none absolute right-0 top-0 scale-125 opacity-30 translate-x-12">2</span>
                        צבור נסיון בתחום שלך
                    </div>
                    <div className="relative select-none text-3xl lg:text-5xl text-[#1d1d1f]">
                        <span className="pointer-events-none absolute right-0 top-0 scale-125 opacity-40 translate-x-12">3</span>
                        שדרג את קורות החיים
                    </div>
                    <LinkAsButton to="/login" text="התחל כאן" />
                </div>
            </div>
            <div className="h-screen lg:flex">
                <div className=" flex grow flex-col items-center text-3xl py-24">
                    <div className="max-w-lg space-y-8">
                        <span>ארגון / עמותה?</span>
                        <ul className="list-disc text-xl space-y-4">
                            <li>מלא גם לתרום מדינות וספציפיים</li>
                            <li>אינו יוני פיסול מה מדע.</li>
                            <li>ב רבה רפואה האנציקלופדיה, מה.</li>
                            <li>למחיקה ממונרכיה רבה אם, בה.</li>
                            <li>אל ארץ כלשהו הקנאים, ויש.</li>
                        </ul>
                        <div className="text-base">
                            <LinkAsButton text="להרשמה" to="/register" />
                        </div>
                    </div>

                </div>
                <div className="grow text-white bg-slate-700 flex flex-col items-center text-3xl py-24">
                    <div className="max-w-lg space-y-8">
                        <span>ג'וניור / סטודנט?</span>
                        <ul className="list-disc text-xl space-y-4">
                            <li>דת החלה המדינה עוד הטבע</li>
                            <li> בכפוף בעברית דת שכל</li>
                            <li> עסקים ויקיפדיה מלא את</li>
                            <li> מה סדר שתפו קולנוע מיתולוגיה </li>
                            <li> לציין ספרדית שימושי צ'ט של</li>
                        </ul>
                        <div className="text-base">
                            <LinkAsButton text="להרשמה" to="/register" secondary={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;