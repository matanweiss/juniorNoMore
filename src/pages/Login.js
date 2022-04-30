import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";

const Login = () => {
    return (
        <div className="flex fixed inset-0 bg-[#f5f5f7] justify-center items-center">
            <div className="shadow-lg p-12 border space-y-12 bg-white rounded-xl flex flex-col">
                <div className="text-xl text-center">
                    התחבר לחשבון שלך
                </div>
                <InputMail />
                <InputPassword />
                <Button text="התחבר" />
            </div>
        </div>
    );
}

export default Login;