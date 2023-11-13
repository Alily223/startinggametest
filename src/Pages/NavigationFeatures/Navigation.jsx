import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

import CottageIcon from '@mui/icons-material/Cottage';
import FactoryIcon from '@mui/icons-material/Factory';

const Navigation = ({money, setMoney}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Stack direction="row" spacing={12} alignItems="center" justifyContent="space-evenly">
                <Button onClick={() => navigate("/")}><CottageIcon fontSize='large'/></Button>
                <Button variant="contained" onClick={() => navigate("/factory")}><FactoryIcon fontSize='small'/>Factory<FactoryIcon fontSize='small'/></Button>
                <Button variant="contained" onClick={() => navigate("/storage")}>Storage</Button>
                <Button variant="contained" onClick={() => navigate("/storefront")}>Storefront</Button>
                <Button variant="contained" onClick={() => navigate("/managers")}>Managers</Button>
                <Button variant="contained" onClick={() => navigate("/")}>Save/Load</Button>
                <h1 style={{color: 'green'}}>${money}</h1>
            </Stack>
        </div>
    )
}

export default Navigation