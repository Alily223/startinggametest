import React from 'react';
import { Card, Text, Button, Grid } from '@mantine/core';



const Water = ({money, setMoney, waterWellAmount, setWaterWellAmount, waterWellMaxAmount, setWaterWellMaxAmount, waterWellCost, setWaterWellCost, waterAmount, setWaterAmount, waterWellSpeed, setWaterWellSpeed, waterMaxAmount, setWaterMaxAmount, waterPrice, setWaterPrice}) => {

  const WaterOptions = {
    'Sell Water 1': {
      description: 'Sell one liter of Water',
      price: 1,
      onSell: () => {alert("Sold One Liter of Water")}
    },
    'Sell Water 5': {
      description: 'Sell five liters of Water',
      price: 5,
      onSell: () => {alert("Sold FIVE liters of water")}
    },
    'Sell Water 10': {
      description: 'Sell ten liters of Water',
      price: 10,
      onSell: () => {alert("Sold ten liters of Water")}
    },
    'Sell Water 20': {
      description: 'Sell twenty liters of Water',
      price: 20,
      onSell: () => {alert("Sold twenty liters of water")}
    },
    'Sell Water 40': {
      description: 'Sell forty liters of Water',
      price: 40,
      onSell: () => {alert("Sold forty liters of Water")}
    },
    'Sell Water 80': {
      description: 'Sell eighty liters of Water',
      price: 80,
      onSell: () => {alert("Sold eighty liters of water")}
    },
    'Sell Water 100': {
      description: 'Sell 100 liters of Water',
      price: 100,
      onSell: () => {alert("Sold one hundred liters of water")}
    },
  }

  return (
    <div>
      <Grid gutter="xs">
      {Object.entries(WaterOptions).map(([name, details], index) => (
        <Grid.Col key={index} span={4}>
          <Card shadow="sm" p="xs" radius="md" withBorder w={400}>
            <Grid gutter="xs">
              <Grid.Col align="center">
                <Text weight={500}>{name} - {details.description}</Text>
              </Grid.Col>
              <Grid.Col align="center">
                <Text size="sm">Price: ${details.price}</Text>
              </Grid.Col>
              <Grid.Col align="center">
                <Button variant="light" color="green" fullWidth mt="md" radius="md" onClick={details.onSell}>
                  Sell
                </Button>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
      ))}
      </Grid>
    </div>
  )
}

export default Water