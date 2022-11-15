import { DateInput, FormField, , TextInput, TextArea, Button, CheckBox } from "grommet";
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
            <FormField label="Title">
                <TextInput
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
            </FormField>
            <FormField label="Start Date">
                <DateInput
                    format="dd/mm/yyyy"
                    value={startDate}
                    onChange={({ value }) => setStartDate(value)}
                />
            </FormField>

            <FormField label="Start Time">
                <Timepicker value={startTime} onChange={({ value }) => setStartTime(value)}></Timepicker>
            </FormField>

            <FormField label="End Date">
                <DateInput
                    format="dd/mm/yyyy"
                    value={endDate}
                    onChange={({ value }) => setEndDate(value)}
                />
            </FormField>

            <FormField label="End Time">
                <MaskedInput
                mask={[
                    {
                    length: [1, 2],
                    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', ],
                    regexp: /^1[1-2]$|^[0-9]$/,
                    placeholder: 'hh',
                    },
                    { fixed: ':' },
                    {
                    length: 2,
                    options: ['00', '15', '30', '45'],
                    regexp: /^[0-5][0-9]$|^[0-9]$/,
                    placeholder: 'mm',
                    }
                ]}
                value={endTime}
                onChange={event => { setEndTime(event.target.value)}}
                />
            </FormField>
            <FormField>
                <TextArea
                    placeholder="Description"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
            </FormField>
            <CheckBox
                checked={isMulti}
                label="Is Multi Stream?"
                onChange={multiChanged}
            />
            {
                showSpeakerAndBio && 
                (
                    <div>
                        <FormField label="Speaker">
                            <TextInput
                                placeholder="Speaker"
                                value={speaker}
                                onChange={event => setSpeaker(event.target.value)}
                            />
                        </FormField>
                        <FormField>
                            <TextArea
                                placeholder="Bio"
                                value={bio}
                                onChange={event => setBio(event.target.value)}
                            />
                        </FormField>
                    </div>
                )
            }
            <Button
                primary 
                color='light-1' 
                label="Save"
                fill="horizontal"
                onClick={saveSession}
            ></Button>
        </div>
    )
}
