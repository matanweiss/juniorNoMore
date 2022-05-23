import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";

const Login = () => {

    const mutation = useMutation(() => {
        return fetch(process.env.REACT_APP_SERVER_BASE_URL + '/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
    }, {
        onSuccess: user => user.json().then(user => {
            console.log(user);
            toast.success('נכנסת למערכת בהצלחה');
            return navigate("/explore");
        })
    });

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        mutation.mutate();
    }

    return (
        <div className="flex fixed inset-0 lg:bg-[#f5f5f7] justify-center items-center">
            <form onSubmit={handleSubmit}>

                <div className="lg:shadow-lg p-12 lg:border space-y-12 bg-white rounded-xl flex flex-col">
                    <div className="text-xl text-center">
                        התחבר/י לחשבון שלך
                    </div>
                    <InputMail email={email} setEmail={setEmail} />
                    <InputPassword password={password} setPassword={setPassword} />
                    <Button text="כניסה" />
                </div>
            </form>
        </div>
    );
}

export default Login;