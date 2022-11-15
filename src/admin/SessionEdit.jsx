import axios from "axios";
import { useEffect, useState } from "react";
import SessionForm from "./SessionForm";
import { environment } from "../env/environment";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function SessionEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [session, setSession] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${environment.apiUrl}/sessions/${id}`)
            .then(({ data }) => {
                setSession({
                    ...data,
                    startDate: data.startDate && new Date(data.startDate),
                    endDate: data.endDate && new Date(data.endDate)
                });
                setError('');
            })
            .catch(err => {
                setError(err);
                setSession(null)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    function saveSession(session) {
        axios.put(`${environment.apiUrl}/sessions/${id}`, session)
            .then(session => {
                navigate('./../');
            });
    }

    return (
        <div>
            { loading && <div>Loading...</div>}
            { error && <div>Error - {error.message}</div>}
            { session && <SessionForm saveClicked={saveSession} session={session}></SessionForm> }
        </div>
    )
}