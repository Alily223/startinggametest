import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const Navigation = ({money, setMoney}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Stack direction="row" spacing={12} alignItems="center" justifyContent="space-evenly">
                <Button variant="contained" onClick={() => navigate("/")}>Home</Button>
                <Button variant="contained" onClick={() => navigate("/factory")}>Factory</Button>
                <Button variant="contained" onClick={() => navigate("/storage")}>Storage</Button>
                <Button variant="contained" onClick={() => navigate("/storefront")}>Storefront</Button>
                <Button variant="contained" onClick={() => navigate("/managers")}>Managers</Button>
                <Button variant="contained" onClick={() => navigate("/")}>Save/Load</Button>
                <h1>${money}</h1>
            </Stack>
        </div>
    )
}

export default Navigation