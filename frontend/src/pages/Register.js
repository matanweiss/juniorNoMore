import { useState } from "react";
import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";
import InputRadio from "../components/InputRadio";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputCheckbox from "../components/InputCheckbox";
import { degrees, universities } from "../variables/variables";
import InputSearch from "../components/InputSearch";
import InputText from "../components/InputText";
import InputTextarea from "../components/InputTextarea";
import { useMutation } from "react-query";

const Register = () => {

    const mutation = useMutation(() => {
        return fetch(process.env.REACT_APP_SERVER_BASE_URL + '/register-' + userType === 'junior' ? 'junior' : 'business', {
            method: 'post',
            body: userType === 'junior'
                ? JSON.stringify({ name, email, password, personalNote, degree, academy, linkedin })
                : JSON.stringify({ name, email, password, business_area: city, website, businessName, social_media: 'facebook.com' }),
            headers: { 'Content-Type': 'application/json' }
        })
    }, {
        onSuccess: user => user.json().then(user => {
            console.log(user);
            toast.success('נרשמת למערכת בהצלחה');
            return navigate("/first-login");
        })
    });

    const handleRadioChange = e => setUserType(e.target.id);

    const navigate = useNavigate();
    const [isSecondPage, setIsSecondPage] = useState(false);
    const [userType, setUserType] = useState('junior');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [personalNote, setPersonalNote] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [isDegree, setIsDegree] = useState(true);
    const [degree, setDegree] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [academy, setAcademy] = useState('');
    const [city, setCity] = useState('');
    const [website, setWebsite] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!isSecondPage) {
            setIsSecondPage(true);
            return;
        }
        mutation.mutate();
    }

    const renderFirstPage = () =>
        <div className="space-y-10 mt-10">
            <InputText name="name" text="שם מלא" value={name} setValue={setName} />
            <InputMail email={email} setEmail={setEmail} />
            <InputPassword password={password} setPassword={setPassword} />
            <div className="flex justify-around text-lg">
                <InputRadio handleChange={handleRadioChange} type={userType} text="ג'וניור" name="junior" />
                <InputRadio handleChange={handleRadioChange} type={userType} text="עסק" name="business" />
            </div>
            <Button text="הבא" additionalClasses=" w-full" />
        </div>

    const renderSecondPage = () => {
        if (userType === 'junior') return (
            <>
                <div className="lg:flex gap-16">
                    <div className=" space-y-12">
                        <InputTextarea text="ספר לנו על עצמך" name="personalNote" value={personalNote} setValue={setPersonalNote} />
                        <InputText name="linkedin" text="קישור ל- LinkedIn" value={linkedin} setValue={setLinkedin} />
                    </div>
                    <div className="lg:mt-0 mt-12 space-y-8">
                        <InputCheckbox text="יש לך תואר / בלימודים" name="isDegree" isChecked={isDegree} onCheck={setIsDegree} />
                        {isDegree &&
                            <div className="space-y-10">
                                <InputSearch description="תואר" data={degrees} setValue={setDegree} />
                                <InputSearch description="מוסד לימודים" data={universities} setValue={setAcademy} />
                            </div>
                        }
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Button text="הרשמה" />
                </div>
            </>
        )
        else return (
            <div className="space-y-10">
                <InputText name="city" text="איזור בארץ" value={city} setValue={setCity} />
                <InputText name="website" text="אתר העסק" value={website} setValue={setWebsite} />
                <InputText name="businessName" text="שם העסק" value={businessName} setValue={setBusinessName} />
                <Button text="הרשמה" additionalClasses=" w-full " />
            </div>
        )
    }


    return (
        <div className="flex fixed inset-0 lg:bg-[#f5f5f7] justify-center items-center">
            <form onSubmit={handleSubmit}>
                <div className="lg:shadow-lg p-12 lg:border bg-white rounded-xl ">
                    <div className="text-xl text-center mb-4">
                        יצירת חשבון ב - JuniorNoMore
                    </div>
                    {isSecondPage ? renderSecondPage() : renderFirstPage()}
                </div>
            </form>
        </div>
    );
}

export default Register;