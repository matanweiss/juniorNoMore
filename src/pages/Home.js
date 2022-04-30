import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    return (
        <>
            <div className="h-screen ">
                <div className="mx-4 lg:mx-auto max-w-xl my-24 space-y-6">
                    <div className="text-3xl lg:text-5xl text-[#1d1d1f]">מצא פרוייקט לעבוד עליו</div>
                    <div className="text-3xl lg:text-5xl text-[#1d1d1f]">צבור נסיון בתחום שלך</div>
                    <div className="text-3xl lg:text-5xl text-[#1d1d1f]">שדרג את קורות החיים</div>
                    <Button text="התחל כאן" />
                </div>
            </div>
            <div className="h-screen flex">
                <div className="w-[50vw] flex flex-col items-center text-3xl py-24">
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
                            <Button text="להרשמה" />
                        </div>
                    </div>

                </div>
                <div className="w-[50vw] text-white bg-slate-700 flex flex-col items-center text-3xl py-24">
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
                            <Button text="להרשמה" secondary={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;