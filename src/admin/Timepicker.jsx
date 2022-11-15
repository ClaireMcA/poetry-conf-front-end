import { useState } from 'react';
import { MaskedInput } from 'grommet';

export default function Timepicker({ value, onChange }) {
    const [time, setTime] = useState(value);

    function timeChanged(event) {
        setTime(event.target.value);
        onChange(event.target.value);
    }

    return (
        <MaskedInput
        mask={[
            {
            length: [1, 2],
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24' ],
            regexp: /^1[1-9]$|^[0-9]$|^2[1-4]$/,
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
        value={time}
        onChange={event => { setTime(event.target.value)}}
        />
    )
}
