import { useEffect, useState } from 'react';
import Session from './Session';
import { environment } from '../env/environment';
import axios from 'axios';

export default function AdminSessions() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(`${environment.apiUrl}/sessions`)
            .then(response => {
                setData(response.data);
                setError(null);
            })
            .catch(err => {
                setError(err);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    });

    return ( 
        <div>
            <h1>Sessions</h1>
            { loading && (<div>Loading...</div>) }
            { error && (<div> Error { error }</div>) }
            { data && data.map(session => (
                <div>
                    { session.title }
                </div>
            ))}
        </div>
    );
}
