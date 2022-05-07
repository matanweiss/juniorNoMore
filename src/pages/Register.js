import { useState } from "react";
import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";
import InputRadio from "../components/InputRadio";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputCheckbox from "../components/InputCheckbox";
import { areas, degrees } from "../variables/variables";

const Register = () => {

    const handleRadioChange = e => setUserType(e.target.id);

    const navigate = useNavigate();
    const [isSecondPage, setIsSecondPage] = useState(false);
    const [userType, setUserType] = useState('junior');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDegree, setIsDegree] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!isSecondPage) {
            setIsSecondPage(true);
            return;
        }
        toast.success('נרשמת למערכת בהצלחה');
        return navigate("/first-login");
    }

    const renderFirstPage = () =>
        <>
            <InputMail email={email} setEmail={setEmail} />
            <InputPassword password={password} setPassword={setPassword} />
            <div className="flex justify-around text-lg">
                <InputRadio handleChange={handleRadioChange} type={userType} text="ג'וניור" name="junior" />
                <InputRadio handleChange={handleRadioChange} type={userType} text="עסק" name="business" />
            </div>
            <Button text="הבא" />
        </>

    const renderSecondPage = () => {
        if (userType === 'junior') return (
            <>
                <div className="flex flex-col">
                    <label for="location">איזור בארץ:</label>
                    <select name="location" id="location">
                        {areas.map(area => <option value={area}>{area}</option>)}
                    </select>
                </div>
                <div>
                    <InputCheckbox text="יש לך תואר / בלימודים" name="isDegree" isChecked={isDegree} onCheck={setIsDegree} />
                    {isDegree &&
                        <>
                            <div className="flex flex-col">
                                <select name="location" id="location">
                                    {degrees.map(degree => <option value={degree}>{degree}</option>)}
                                </select>
                            </div>
                        </>}
                </div>
            </>)
        else return (
            <>

            </>)
    }


    return (
        <div className="flex fixed inset-0 lg:bg-[#f5f5f7] justify-center items-center">
            <form onSubmit={handleSubmit}>
                <div className="lg:shadow-lg p-12 lg:border space-y-12 bg-white rounded-xl flex flex-col">
                    <div className="text-xl text-center">
                        יצירת חשבון ב - JuniorNoMore
                    </div>
                    {isSecondPage ? renderSecondPage() : renderFirstPage()}
                </div>
            </form>
        </div>
    );
}

export default Register;