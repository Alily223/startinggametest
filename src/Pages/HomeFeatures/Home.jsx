import React from 'react';
import Button from '@mui/material/Button';

const Home = ({money, setMoney}) => {

    const summonMoney = () => {
        let newMoney = money + 1;
        setMoney(newMoney);
    }

    return (
        <div style={{margin: '5px'}}>
            <Button size='large' variant="contained" onClick={summonMoney}>make money</Button>
        </div>
    )
}

export default Home