import React from 'react';
import { View, Text } from 'react-native';
import { ICoordinates } from '../../interfaces';

interface IHomePageProps {
  coordinates: ICoordinates;
};

const HomePage = ({ coordinates }: IHomePageProps) => {
  console.log('home page', coordinates);
  return (
    <>
      <Text>This is the home page</Text>
      <Text></Text>
    </>
  );
}

export default HomePage;