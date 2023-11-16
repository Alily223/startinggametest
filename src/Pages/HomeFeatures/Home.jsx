import { Grid, Flex , Card, Badge, Button, Group, Text, Progress} from '@mantine/core';
import React , {useEffect, useState, useCallback} from 'react';
import { IconBolt } from '@tabler/icons-react';

const Home = ({money, setMoney, energy, setEnergy}) => {
    const [progress, setProgress] = useState({ Energy: 0, Water: 0 });

    const triggerEnergyCreation = () => {
        setEnergy((prevAmount) => prevAmount + 1);
    }

    const godItems = {
        "Energy": {
            description: 'Create Energy to Use',
            onUse: () => {triggerEnergyCreation()},
            automationMoneyCost: 1000,
            automationClickUse: () => {console.log('Automation Begins!')},
            timeToCreate: 15,
            freeCreation: true
        },
        "Water": {
            description: 'Spend Energy to Create Water',
            energyCost: 10,
            onUse: () => {console.log('created Water')},
            automationMoneyCost: 2000,
            automationClickUse: () => {console.log('Automation Begins!')},
            timeToCreate: 10,
            freeCreation: false
        }
    }

    return (
        <div>
            <Flex
                mih={50}
                bg="rgba(0, 0, 0, .3)"
                gap="xs"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <h2>Welcome to God's Cradle</h2>
            </Flex>
            <Grid gutter="xs">
                {Object.entries(godItems).map(([name,details],index) => (
                    <Grid.Col key={index} span={4}>
                        <Card shadow="sm" p="xs" radius="md" withBorder>
                            <Flex mih={50} gap="xs" justify="center" align="center" direction="column" wrap="wrap">
                                <Text weight={500}>{name} {details.energyCost ? (<Badge variant="light" color="yellow" leftSection={<IconBolt size={12} />}>{details.energyCost}</Badge>) : null}</Text>
                                <Text size="sm">{details.description}</Text>
                                {details.freeCreation === true ? <Button variant="light" color="yellow" fullWidth radius="md" onClick={details.onUse}>Create {name}</Button>: null}
                                
                            </Flex>
                        </Card>
                    </Grid.Col>
                )) }
            </Grid>
        </div>
    )
}

export default Home