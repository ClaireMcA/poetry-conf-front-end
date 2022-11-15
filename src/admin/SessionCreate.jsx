import SessionForm from "./SessionForm";
import axios from "axios";
import { environment } from "../env/environment";
import { useNavigate } from "react-router-dom";

export default function SessionCreate() {
    const navigate = useNavigate();

    function saveSession(session) {
        axios.post(`${environment.apiUrl}/sessions`, session)
            .then(session => {
                navigate('./../');
            });
    }

    return (
        <SessionForm saveClicked={saveSession}></SessionForm>
    )
}
