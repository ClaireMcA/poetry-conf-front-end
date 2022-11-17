import { DateInput, FormField, MaskedInput, TextInput, TextArea, Button, CheckBox } from "grommet";
import { useState } from "react";
import Timepicker from "./Timepicker";

export default function SessionForm({ saveClicked, session = {} }) {
    const [title, setTitle] = useState(session?.title || '');
    let initialStartTime = '';
    if (session.startDate) {
        initialStartTime = `${session.startDate.getHours()}:${session.startDate.getMinutes()}`;
    }
    const [startTime, setStartTime] = useState(initialStartTime);
    let initialEndTime = '';
    if (session.endDate) {
        initialEndTime = `${session.endDate.getHours()}:${session.endDate.getMinutes()}`;
    }
    const [endTime, setEndTime] = useState(initialEndTime);
    const [startDate, setStartDate] = useState(session.startDate?.toISOString() || '');
    const [endDate, setEndDate] = useState(session.endDate?.toISOString() || '');
    const [description, setDescription] = useState(session.description || '');
    const [isMulti, setIsMulti] = useState(session.isMulti !== undefined ? session.isMulti : true);
    const [showSpeakerAndBio, setShowSpeakerAndBio] = useState(session.isMulti !== undefined ? !session.isMulti : false)
    const [speaker, setSpeaker] = useState(session.speaker || '');
    const [bio, setBio] = useState(session.bio || '');

    function saveSession() {
        const [startHours, startMinutes] = startTime.split(":");
        const startDateTime = new Date(startDate);
        startDateTime.setHours(startHours, startMinutes, 0, 0);

        const [endHours, endMinutes] = endTime.split(":");
        const endDateTime = new Date(endDate);
        endDateTime.setHours(endHours, endMinutes, 0, 0);

        const session = {
            title,
            startDate: startDateTime,
            endDate: endDateTime,
            description,
            isMulti,
            speaker: isMulti ? '' : speaker,
            bio: isMulti ? '' : bio
        };

        saveClicked(session);

    }
    
    function multiChanged(event) {
        const checked = event.target.checked;
        setIsMulti(checked);
        setShowSpeakerAndBio(!checked);
    }

    return (
        <div>
            
        </div>
    )
}