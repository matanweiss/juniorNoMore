import { Combobox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

const InputSearch = (props) => {

    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState('');
    const filteredData = query ? props.data.filter(item => item.includes(query)) : props.data;

    const handleChange = e => {
        setQuery(e.target.value);
        if (!e.target.value) setSelected('');
    }

    const handleSelect = item => {
        setQuery(item);
        props.setValue(item);
        setSelected(item);
    }

    return (
        <Combobox as="div" value={selected} className="relative" onChange={handleSelect}>
            {({ open }) =>
                <>
                    <Combobox.Input size={27} onChange={handleChange} id="input"
                        className="peer w-full outline-none border-b-2 focus:border-slate-600 border-slate-400 px-7 transition"
                        placeholder=" "
                    />
                    <label
                        className="pointer-events-none absolute text-gray-500 -top-5 right-1 origin-right scale-[0.9] peer-placeholder-shown:top-0 peer-placeholder-shown:right-7 peer-placeholder-shown:scale-100 transition-all"
                        htmlFor="input"
                    >
                        {props.description}
                    </label>
                    <Combobox.Button className="absolute right-0"><ChevronDownIcon className="w-6 text-slate-600" /></Combobox.Button>
                    <Transition as={Fragment} show={open} enter="duration-150 ease-out " enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                        leave="duration-150 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                    >
                        <Combobox.Options className="absolute z-10 w-full max-h-32 overflow-y-auto shadow-2xl rounded ring-2 ring-black/5">
                            {filteredData.map(item =>
                                <Combobox.Option key={item} value={item}>
                                    {({ active }) => <div className={`px-2 py-1 ${active ? 'bg-[#e9e9ed]' : 'bg-white'}`}>{item}</div>}
                                </Combobox.Option>)}
                        </Combobox.Options>
                    </Transition>
                </>
            }
        </Combobox>
    );
}

export default InputSearch;