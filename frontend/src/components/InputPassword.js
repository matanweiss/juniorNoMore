const InputPassword = (props) => {

    const handleChange = e => {
        props.setPassword(e.target.value);
    }

    return (
        <div className="flex flex-col relative">
            <input value={props.password} onChange={handleChange} required
                className="peer border-b-2 focus:border-slate-700 border-slate-500 transition outline-none rounded-none"
                type="password" name="password" id="password" placeholder="" dir="ltr"
                onInvalid={e => e.target.setCustomValidity('יש להכניס סיסמה')}
                onInput={e => e.target.setCustomValidity('')}
            />
            <label
                className="pointer-events-none absolute text-gray-500 -top-4 right-0 origin-right scale-[0.9] peer-placeholder-shown:top-0 peer-placeholder-shown:right-1 peer-placeholder-shown:scale-100 transition-all"
                htmlFor="password"
            >
                סיסמה
            </label>
        </div>
    );
}

export default InputPassword;