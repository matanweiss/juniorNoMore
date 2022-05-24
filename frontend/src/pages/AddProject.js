import { useState } from "react";
import { useMutation } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import InputCheckbox from "../components/InputCheckbox";
import InputDate from "../components/InputDate";
import InputSearch from "../components/InputSearch";
import InputText from "../components/InputText";
import InputTextarea from "../components/InputTextarea";
import { skills as skillsData } from "../variables/variables";

const AddProject = () => {

    const navigate = useNavigate();

    const [projectName, setProjectName] = useState('');
    const [skills, setSkills] = useState('');
    const [remote, setRemote] = useState(false);
    const [description, setDescription] = useState('');

    const [businessName, setBusinessName] = useState('');
    const [website, setWebsite] = useState('');
    const [social_media, setSocial_media] = useState('');
    const [business_area, setBusinessArea] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        toast.success("הפרוייקט פורסם בהצלחה")
        return navigate("/explore");
    }

    return (
        <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="lg:flex  justify-between px-4 lg:px-0">
                    <div className="lg:mb-0 mb-14 space-y-10">
                        <h3 className="text-center">פרטי הפרוייקט</h3>
                        <InputText name="projectName" text="שם הפרוייקט" value={projectName} setValue={setProjectName} />
                        <InputSearch description="כישור נחוץ לפרוייקט" data={skillsData} setValue={setSkills} />
                        <InputTextarea text="פרטים על המשרה" name="description" value={description} setValue={setDescription} />
                        <InputCheckbox text="האם הפרוייקט יכול להתבצע מרחוק?" name="remote" isChecked={remote} onCheck={setRemote} />
                        <span>תאריך תפוגת הפרוייקט: </span>
                        <InputDate setDate={setDate} date={date} />
                    </div>
                    <div className="space-y-10">
                        <h3 className="text-center">פרטי העסק</h3>
                        <InputText name="businessName" text="שם העסק" value={businessName} setValue={setBusinessName} />
                        <InputText name="website" text="שם העסק" value={website} setValue={setWebsite} />
                        <InputText name="social_media" text="שם העסק" value={social_media} setValue={setSocial_media} />
                        <InputText name="businessArea" text="מיקום העסק" value={business_area} setValue={setBusinessArea} />
                        <div className="text-center my-12 lg:mb-0">
                            <Button text="הוסף פרוייקט" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddProject;