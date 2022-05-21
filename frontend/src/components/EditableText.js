import ContentEditable from "react-contenteditable";

const EditableText = (props) => {

    const handleChange = e => props.element.current = e.target.value;

    return (
        <ContentEditable disabled={!props.isEditing} html={props.element.current} className={`outline-none rounded-none transition-all border-b-2  ${props.isEditing ? ' border-gray-400 ' : 'border-transparent'} ${props.additional}`} onChange={handleChange}></ContentEditable>
    );
}

export default EditableText;