import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Divider, Flex, Button } from '@mantine/core';
import { IconBolt } from '@tabler/icons-react';



const Navigation = ({money, setMoney, energy, setEnergy}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Flex
                mih={50}
                bg="rgba(0, 0, 0, .3)"
                gap="xl"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Button onClick={() => navigate("/")}>Home</Button>
                <Divider size="sm" orientation="vertical" />
                <Flex
                    mih={50}
                    bg="rgba(0, 0, 0, .3)"
                    gap="sm"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Button color="indigo" onClick={() => navigate("/")}>God Upgrades</Button>
                    <Button color="indigo" onClick={() => navigate("/")}>Money Upgrades</Button>
                    <Button color="indigo" onClick={() => navigate("/")}>Managers</Button>
                </Flex>
                <Divider size="sm" orientation="vertical" />
                <Button onClick={() => navigate("/settings")}>Settings</Button>
            </Flex>
            <Flex 
                mih={50}
                bg="rgba(0, 0, 0, .3)"
                gap="sm"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <h1 style={{margin: '0px', color:'green'}}>${money}</h1>
                <h1 style={{margin: '0px', color:'yellow'}}><IconBolt/>{energy}</h1>
            </Flex>
        </div>
    )
}

export default Navigation