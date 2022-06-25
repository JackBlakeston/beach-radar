import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import BeachCard from '../../components/BeachCard/BeachCard';
import { ICoordinates, IBeach } from '../../interfaces';
import { getBeaches } from '../../utils/getBeaches';

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
    <ScrollView style={{ paddingTop: 30 }}>
      {beaches && beaches.map(beach => {
        return <BeachCard key={beach.distance} beach={beach}/>
      })}
    </ScrollView>
  );
}

export default HomePage;