import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import InputMail from "../components/InputMail";
import InputPassword from "../components/InputPassword";

const Login = (props) => {

    const mutation = useMutation(() => {
        return fetch(process.env.REACT_APP_SERVER_BASE_URL + '/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
    }, {
        onSuccess: res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data);
                    toast.success('נכנסת למערכת בהצלחה');
                    localStorage.setItem('jwt', data.token);
                    localStorage.setItem('id', data.user.id);
                    localStorage.setItem('isJunior', data.user.isJunior);
                    localStorage.setItem('name', data.user.firstName + " " + data.user.lastName);
                    props.setIsLoggedIn(true);
                    return navigate("/explore");
                })

            }
            else {
                res.json().then(msg => {
                    toast.warning(msg.msg);
                })
            }
        }
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