const Button = (props) => {

    const handleClick = () => {
        props.action();
    }

    return (
        <button onClick={handleClick}
            className={props.secondary ? "bg-white text-slate-700 px-4 py-2 rounded-xl hover:bg-slate-200"
                : "px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 "}>
            {props.text}
        </button >
    );
}

export default Button;