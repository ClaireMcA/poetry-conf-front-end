import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { List, Button } from 'grommet';
import { environment } from '../env/environment';
import axios from 'axios';

export default function AdminSessions() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
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
    }, []);

    function saveClicked(session) {
        axios.post(`${environment.apiUrl}/sessions`, session)
            .then(session => {
                console.log(session);
            });
    }

    function navigateToEdit({ item }) {
        navigate(`./${item._id}`);
    }

    return ( 
        <div>
            <h1>Sessions</h1>
            <Link to="./create">
              <Button 
                primary 
                color='light-1' 
                label="New"
                fill="horizontal"
              />
            </Link>
            { loading && <div>Loading...</div> }
            { error && <div>Error - { error } </div> }
            { data && <List data={data} onClickItem={navigateToEdit} primaryKey="title"></List> }
        </div>
    );
}
