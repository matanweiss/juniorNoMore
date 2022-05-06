import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";
import LinkAsButton from "../components/LinkAsButton";

const Register = () => {
    return (
        <div className="flex fixed inset-0 lg:bg-[#f5f5f7] justify-center items-center">
            <div className="lg:shadow-lg p-12 lg:border space-y-12 bg-white rounded-xl flex flex-col">
                <div className="text-xl text-center">
                    הרשם ל - JuniorNoMore
                </div>
                <InputMail />
                <InputPassword />
                {/* <Button text="הרשם" /> */}
                <LinkAsButton to="/explore" text="הרשם" />
            </div>
        </div>
    );
}

export default Register;