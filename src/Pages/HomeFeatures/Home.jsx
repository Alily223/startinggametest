import { Grid, Flex , Card, Badge, Button, Group, Text, Progress} from '@mantine/core';
import React , {useEffect, useState, useCallback} from 'react';

const Home = ({money, setMoney, waterWellAmount, setWaterWellAmount, waterWellMaxAmount, setWaterWellMaxAmount, waterWellCost, setWaterWellCost, waterAmount, setWaterAmount, waterWellSpeed, setWaterWellSpeed, waterMaxAmount, setWaterMaxAmount}) => {
    const [progressWaterWell, setProgressWaterWell] = useState(0);
    const [shouldUpdateWater, setShouldUpdateWater] = useState(false);

    const incrementWaterAmount = useCallback(() => {
        if (waterAmount < waterMaxAmount) {
            setWaterAmount(prevLiters => prevLiters + 1);
        } else {
            alert("Water Storage Full");
        }
    }, [waterAmount, waterMaxAmount, setWaterAmount]);

    useEffect(() => {
        if (waterWellAmount > 0) {
            const updateProgress = () => {
                setProgressWaterWell((prevProgress) => {
                    const newProgress = prevProgress + waterWellSpeed;
                    if (newProgress >= 100) {
                        setShouldUpdateWater(true); // Set flag to update water amount
                        return 0; // Reset progress
                    }
                    return newProgress;
                });
            };

            const interval = setInterval(updateProgress, 500);
            return () => clearInterval(interval);
        }
    }, [waterWellSpeed, waterWellAmount]);

    useEffect(() => {
        if (shouldUpdateWater) {
            incrementWaterAmount();
            setShouldUpdateWater(false); // Reset the flag after updating
        }
    }, [shouldUpdateWater, incrementWaterAmount]);
      
    

    const handlePurchaseOfWaterWell = () => {
        if (waterWellAmount === 0){
            setWaterWellAmount((prevAmount) => prevAmount + 1)
            setWaterWellCost((prevAmount) => prevAmount + 10)
        } else if (waterWellAmount > 0 && money < waterWellCost) {
            alert("Not Enough Money To Buy New Well")
        } else if (waterWellAmount > 0 && money >= waterWellCost) {
            setMoney((prevMoney) => prevMoney - waterWellCost)
            setWaterWellAmount((prevAmount) => prevAmount + 1)
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

                <h2>Welcome to Thirst Clicker!</h2>
            </Flex>
            <Grid gutter="xs">
                <Grid.Col span={4} >
                    <Card shadow="sm" padding="sm" radius="md" withBorder >
                        <Card.Section>

                        </Card.Section>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Open Water Well</Text>
                            <Badge color="green" variant='light'>
                                ${waterWellCost}
                            </Badge>
                            <Badge color="pink" variant='light'>
                                {waterWellAmount} / {waterWellMaxAmount} Wells
                            </Badge>
                            <Badge color="yellow" variant='light'>
                                {waterAmount} / {waterMaxAmount} Liters
                            </Badge>
                        </Group>
                        {waterWellAmount < 1 ? (<Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={handlePurchaseOfWaterWell}>Open Well</Button>) : waterWellAmount >= 1 ? (<Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={handlePurchaseOfWaterWell}>Buy Well</Button>): null}
                        <Progress value={progressWaterWell}/>
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="sm" radius="md" withBorder >
                        <Card.Section>

                        </Card.Section>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Buy Lemon Tree</Text>
                            <Badge color="green" variant='light'>
                                $10
                            </Badge>
                            <Badge color="pink" variant='light'>
                                0 / 10 Tree
                            </Badge>
                            <Badge color="yellow" variant='light'>
                                0 / 100 Lemons
                            </Badge>
                        </Group>
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">Buy Tree</Button>
                        <Progress value={50}/>
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="sm" radius="md" withBorder >
                        <Card.Section>

                        </Card.Section>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Buy Sugar Mine</Text>
                            <Badge color="green" variant='light'>
                                $100
                            </Badge>
                            <Badge color="pink" variant='light'>
                                0 / 10 Mines
                            </Badge>
                            <Badge color="yellow" variant='light'>
                                0 / 100 Lbs
                            </Badge>
                        </Group>
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">Buy Mine</Button>
                        <Progress value={50}/>
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="sm" radius="md" withBorder>
                        <Card.Section>

                        </Card.Section>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Make CBW Factory</Text>
                            <Badge color="green" variant='light'>
                                $150
                            </Badge>
                            <Badge color="pink" variant='light'>
                                0 / 10 Factory
                            </Badge>
                            <Badge color="yellow" variant='light'>
                                0 / 100 Liters
                            </Badge>
                        </Group>
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">Buy Factory</Button>
                        <Progress value={50}/>
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="sm" radius="md" withBorder>
                        <Card.Section>

                        </Card.Section>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Buy Chemical Plant</Text>
                            <Badge color="green" variant='light'>
                                $1000
                            </Badge>
                            <Badge color="pink" variant='light'>
                                0 / 10 Plants
                            </Badge>
                            <Badge color="yellow" variant='light'>
                                0 / 100 Liters
                            </Badge>
                        </Group>
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">Buy Plant</Button>
                        <Progress value={50}/>
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Card shadow="sm" padding="sm" radius="md" withBorder>
                        <Card.Section>

                        </Card.Section>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Buy Acid Plant</Text>
                            <Badge color="green" variant='light'>
                                $2000
                            </Badge>
                            <Badge color="pink" variant='light'>
                                0 / 10 Plants
                            </Badge>
                            <Badge color="yellow" variant='light'>
                                0 / 100 Liters
                            </Badge>
                        </Group>
                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">Buy Plant</Button>
                        <Progress value={50}/>
                    </Card>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Home