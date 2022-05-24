
const InputDate = (props) => {

    const handleChange = e => {
        const value = e.target.value;
        props.setDate(value);
    }

    return (
        <input className="ring-2 ring-gray-400" onChange={handleChange} value={props.date} required type="date" name="" id=""
            onInvalid={e => e.target.setCustomValidity('נא מלא שדה זה')}
            onInput={e => e.target.setCustomValidity('')}
        />
    );
}

export default InputDate;