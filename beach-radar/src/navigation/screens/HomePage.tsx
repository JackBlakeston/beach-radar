import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import BeachCard from '../../components/BeachCard/BeachCard';
import { ICoordinates, IBeach } from '../../interfaces';
import { getBeaches } from '../../utils/getBeaches';
import getDistance from '../../utils/getDistance';

interface IHomePageProps {
  coordinates: ICoordinates;
};

const HomePage = ({ coordinates }: IHomePageProps) => {

  const [beaches, setBeaches] = useState <null | IBeach[]>(null);

  useEffect(() => {
    getBeaches(coordinates).then(data => {
      setBeaches(data)
    });
  }, [])

  return (
    <View style={{ paddingTop: 30 }}>
      {beaches && beaches.map(beach => {
        return <BeachCard key={beach.distance} beach={beach}/>
      })}
    </View>
  );
}

export default HomePage;