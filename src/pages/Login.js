import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        toast.success('נכנסת למערכת בהצלחה');
        return navigate("/explore");
    }

    return (
        <div className="flex fixed inset-0 lg:bg-[#f5f5f7] justify-center items-center">
            <div className="lg:shadow-lg p-12 lg:border space-y-12 bg-white rounded-xl flex flex-col">
                <div className="text-xl text-center">
                    התחבר/י לחשבון שלך
                </div>
                <InputMail />
                <InputPassword />
                <Button text="כניסה" action={handleLogin} />
            </div>
        </div>
    );
}

export default Login;