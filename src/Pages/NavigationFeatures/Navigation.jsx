import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Divider, Flex, Button } from '@mantine/core';



const Navigation = ({money, setMoney}) => {
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
                    <Button color="indigo" onClick={() => navigate("/water")}>Water</Button>
                    <Button color="indigo" onClick={() => navigate("/waterupgrades")}>Upgrades</Button>
                    <Button color="indigo" onClick={() => navigate("/watermanagers")}>Managers</Button>
                </Flex>
                <Divider size="sm" orientation="vertical" />
                <Flex
                    mih={50}
                    bg="rgba(0, 0, 0, .3)"
                    gap="sm"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Button color="yellow" onClick={() => navigate("/lemonade")}>Lemonade</Button>
                    <Button color="yellow" onClick={() => navigate("/lemonadeupgrades")}>Upgrades</Button>
                    <Button color="yellow" onClick={() => navigate("/lemonademanagers")}>Managers</Button>
                </Flex>
                <Divider size="sm" orientation="vertical" />
                <Flex
                    mih={50}
                    bg="rgba(0, 0, 0, .3)"
                    gap="sm"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Button color="pink" onClick={() => navigate("/specialdrinks")}>Special Drinks</Button>
                    <Button color="pink" onClick={() => navigate("/specialdrinksupgrades")}>Upgrades</Button>
                    <Button color="pink" onClick={() => navigate("/specialdrinksmanagers")}>Managers</Button>
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
            </Flex>
        </div>
    )
}

export default Navigation