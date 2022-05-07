import LinkAsButton from "../components/LinkAsButton";

const Home = () => {
    return (
        <>
            <div className="bg-gradient-to-b pb-48 from-transparent via-white to-slate-200">
                <div className="px-4 text-center  lg:mx-auto max-w-lg mt-8 space-y-6">
                    <div className="relative font-bold select-none text-3xl lg:text-5xl text-[#1d1d1f]">
                        <span className="font-assistant pointer-events-none absolute right-0 -top-1 scale-125 opacity-30 translate-x-12">1</span>
                        למצוא פרוייקט
                    </div>
                    <div className="relative font-bold select-none text-3xl lg:text-5xl text-[#1d1d1f]">
                        <span className="font-assistant pointer-events-none absolute right-0 -top-1 scale-125 opacity-30 translate-x-12">2</span>
                        לצבור נסיון
                    </div>
                    <div className="relative font-bold select-none text-3xl lg:text-5xl text-[#1d1d1f]">
                        <span className="font-assistant pointer-events-none absolute right-0 -top-1 scale-125 opacity-40 translate-x-12">3</span>
                        לשדרג את קורות החיים
                    </div>
                    <LinkAsButton to="/login" text="התחל כאן" additional="px-8" />
                </div>
            </div>
            <div className="pb-36 lg:flex bg-gradient-to-b from-slate-200 to-slate-100">
                <div className=" flex grow flex-col items-center mb-16 text-3xl">
                    <div className=" space-y-8">
                        <span>מי אנחנו?</span>
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
                <div className="grow flex flex-col items-center text-3xl">
                    <div className=" space-y-8">
                        <span>למה לבחור בנו?</span>
                        <ul className="list-disc text-xl space-y-4">
                            <li>דת החלה המדינה עוד הטבע</li>
                            <li> בכפוף בעברית דת שכל</li>
                            <li> עסקים ויקיפדיה מלא את</li>
                            <li> מה סדר שתפו קולנוע מיתולוגיה </li>
                            <li> לציין ספרדית שימושי צ'ט של</li>
                        </ul>
                        <div className="text-base">
                            <LinkAsButton text="להרשמה" to="/register" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-36 px-4 bg-slate-100">
                <h2 className="text-center pb-6 text-2xl">הסטודנטים שלנו</h2>
                <div className="grid lg:grid-cols-3 w-full gap-y-16 place-items-center">
                    <div className="w-48 h-48 rounded-xl text-center p-6 shadow-lg text-black bg-slate-200">סטודנט</div>
                    <div className="w-48 h-48 rounded-xl text-center p-6 shadow-lg text-black bg-slate-200">סטודנט</div>
                    <div className="w-48 h-48 rounded-xl text-center p-6 shadow-lg text-black bg-slate-200">סטודנט</div>
                    <div className="w-48 h-48 rounded-xl text-center p-6 shadow-lg text-black bg-slate-200">סטודנט</div>
                    <div className="w-48 h-48 rounded-xl text-center p-6 shadow-lg text-black bg-slate-200">סטודנט</div>
                    <div className="w-48 h-48 rounded-xl text-center p-6 shadow-lg text-black bg-slate-200">סטודנט</div>
                </div>
            </div>

        </>
    );
}

export default Home;