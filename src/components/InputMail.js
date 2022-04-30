const InputMail = () => {
    return (
        <div className="flex flex-col relative">
            <input
                className="peer border-b-2 focus:border-slate-700 border-slate-500 transition outline-none"
                type="email" name="email" id="email" placeholder="" dir="ltr" size={30}
            />
            <label
                className="pointer-events-none absolute text-gray-500 -top-6 right-0 origin-right scale-[0.9] peer-placeholder-shown:top-0 peer-placeholder-shown:right-1 peer-placeholder-shown:scale-100 transition-all"
                htmlFor="email"
            >
                כתובת מייל
            </label>
        </div>
    );
}

export default InputMail;