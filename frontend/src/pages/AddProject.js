import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import Button from "../components/Button";
import InputCheckbox from "../components/InputCheckbox";
import InputDate from "../components/InputDate";
import InputSearch from "../components/InputSearch";
import InputText from "../components/InputText";
import InputTextarea from "../components/InputTextarea";
import { skills as skillsData } from "../variables/variables";

const AddProject = () => {

    const mutation = useMutation(data => {
        return fetch(process.env.REACT_APP_SERVER_BASE_URL + '/add-project', {
            method: 'post',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' }
        })
    }, {
        onSuccess: res => {
            if (res.ok) {
                toast.success("הפרוייקט פורסם בהצלחה")
                return navigate("/explore");
            }
            else {
                res.json().then(msg => {
                    toast.warning(msg.msg);
                })
            }
        }
    });

    const [projectName, setProjectName] = useState('');
    const [skills, setSkills] = useState('');
    const [remote, setRemote] = useState(false);
    const [description, setDescription] = useState('');

    const [businessName, setBusinessName] = useState('');
    const [website, setWebsite] = useState('');
    const [social_media, setSocial_media] = useState('');
    const [date, setDate] = useState('');


    const handleClick = () => {
        const data = { projectName, skills, remote, description, businessName, website, social_media, experation_date: date };
        console.log(data);
        mutation.mutate(data);
    }

    return (
        <div className="max-w-3xl mx-auto">
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
                    <div className="text-center my-12 lg:mb-0">
                        <Button action={handleClick} text="הוסף פרוייקט" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddProject;