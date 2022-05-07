import { CheckIcon } from '@heroicons/react/solid'

const InputRadio = (props) => {
    return (
        <div className="flex items-center" >
            <input
                className="absolute opacity-0 w-6 h-6" checked={props.type === props.name} type="radio"
                id={props.name} name="type" onChange={props.handleChange}
            />
            <div className="pointer-events-none w-6 h-6 border-2 border-slate-700 rounded-md">
                <CheckIcon className={`${props.type === props.name ? 'opacity-100 scale-100' : 'opacity-0 scale-150'} transition `} />
            </div>
            <label className="pr-3" htmlFor={props.name}>{props.text}</label>
        </div>
    );
}

export default InputRadio;