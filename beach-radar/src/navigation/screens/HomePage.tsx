import React from 'react';
import { View, Text } from 'react-native';
import { ICoordinates } from '../../interfaces';
import getDistance from '../../utils/getDistance';

interface IHomePageProps {
  coordinates: ICoordinates;
};

const HomePage = ({ coordinates }: IHomePageProps) => {
  return (
    <>
      <Text>This is the home page</Text>
      <Text></Text>
    </>
  );
}

export default HomePage;