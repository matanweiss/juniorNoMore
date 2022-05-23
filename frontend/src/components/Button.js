const Button = (props) => {

    const handleClick = e => {
        if (props.action) props.action(e);
    }

    return (
        <button onClick={handleClick} name={props.name}
            className={props.secondary ? "bg-white text-slate-700 px-4 py-2 rounded-xl hover:bg-slate-200"
                : "px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 z-10 " + props.additionalClasses}>
            {props.text}
        </button >
    );
}

export default Button;