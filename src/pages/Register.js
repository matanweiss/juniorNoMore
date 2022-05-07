import { useState } from "react";
import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";
import InputRadio from "../components/InputRadio";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const handleRadioChange = e => setUserType(e.target.id);

    const [userType, setUserType] = useState('');
    const navigate = useNavigate();


    const handleFirstNext = () => {
        toast.success('נרשמת למערכת בהצלחה');
        return navigate("/first-login");
    }

    return (
        <div className="flex fixed inset-0 lg:bg-[#f5f5f7] justify-center items-center">
            <div className="lg:shadow-lg p-12 lg:border space-y-12 bg-white rounded-xl flex flex-col">
                <div className="text-xl text-center">
                    יצירת חשבון ב - JuniorNoMore
                </div>
                <InputMail />
                <InputPassword />
                <div className="flex justify-around text-lg">
                    <InputRadio handleChange={handleRadioChange} type={userType} text="ג'וניור" name="junior" />
                    <InputRadio handleChange={handleRadioChange} type={userType} text="עסק" name="business" />
                </div>
                <Button text="הרשמה" action={handleFirstNext} />
            </div>
        </div>
    );
}

export default Register;