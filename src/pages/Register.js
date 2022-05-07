import { useEffect, useState } from "react";
import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";
import InputRadio from "../components/InputRadio";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputCheckbox from "../components/InputCheckbox";
import { areas, degrees, universities } from "../variables/variables";
import InputSearch from "../components/InputSearch";
import InputText from "../components/InputText";
import InputTextarea from "../components/InputTextarea";

const Register = () => {

    const handleRadioChange = e => setUserType(e.target.id);

    const navigate = useNavigate();
    const [isSecondPage, setIsSecondPage] = useState(false);
    const [userType, setUserType] = useState('junior');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDegree, setIsDegree] = useState(false);
    const [degree, setDegree] = useState('');
    const [area, setArea] = useState('');
    const [university, setUniversity] = useState('');
    const [city, setCity] = useState('');
    const [field, setField] = useState('');
    const [website, setWebsite] = useState('');
    const [service, setService] = useState('');

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
                    <label htmlFor="location">איזור בארץ:</label>
                    <select onChange={e => setArea(e.target.value)} className="p-2 rounded-lg" name="location" id="location">
                        {areas.map(area => <option key={area} value={area}>{area}</option>)}
                    </select>
                </div>
                <div className="space-y-4">
                    <InputCheckbox text="יש לך תואר / בלימודים" name="isDegree" isChecked={isDegree} onCheck={setIsDegree} />
                    {isDegree &&
                        <div className="space-y-10 pt-4">
                            <InputSearch description="תואר" data={degrees} setValue={setDegree} />
                            <InputSearch description="מוסד לימודים" data={universities} setValue={setUniversity} />
                        </div>
                    }


                </div>
                <Button text="הרשמה" />
            </>)
        else return (
            <div className="space-y-8">
                <InputText name="city" text="עיר" value={city} setValue={setCity} />
                <InputText name="field" text="תחום העסק" value={field} setValue={setField} />
                <InputText name="website" text="אתר העסק" value={website} setValue={setWebsite} />
                <InputTextarea name="service" text="שירות נדרש" value={service} setValue={setService} />
                <Button text="הרשמה" />
            </div>)
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