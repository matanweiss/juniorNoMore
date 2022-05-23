const InputTextarea = (props) => {

    const handleChange = e => {
        props.setValue(e.target.value);
    }

    return (
        <div className="flex flex-col relative">
            <textarea maxLength={500} className="peer border-b-2 focus:border-slate-700 border-slate-500 pr-1 transition outline-none rounded-none"
                placeholder="" name={props.name} id={props.name} cols="30" rows="4"
                value={props.value} onChange={handleChange}
                onInvalid={e => e.target.setCustomValidity('יש למלא שדה זה')}
                onInput={e => e.target.setCustomValidity('')}
            >

            </textarea>
            <label
                className="pointer-events-none absolute text-gray-500 -top-5 right-0 origin-right scale-[0.9] peer-placeholder-shown:top-0 peer-placeholder-shown:right-1 peer-placeholder-shown:scale-100 transition-all"
                htmlFor={props.name}
            >
                {props.text}
            </label>
        </div>
    );
}

export default InputTextarea;