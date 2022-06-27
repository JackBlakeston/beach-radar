import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BeachCard from '../../components/BeachCard/BeachCard';
import { ICoordinates, IBeach } from '../../interfaces';
import { getBeaches } from '../../utils/getBeaches';

interface IHomePageProps {
  coordinates: ICoordinates;
};

const HomePage = ({ coordinates }: IHomePageProps) => {

  const [beaches, setBeaches] = useState<null | IBeach[]>(null);

  useEffect(() => {
    getBeaches(coordinates).then(data => {
      setBeaches(data)
    });
  }, []);

  return (
      // TODO check if FlatList gives us better performance, once we have a large enough DB
    <SafeAreaView>
      <ScrollView>
        {beaches && beaches.map(beach => {
          return <BeachCard key={beach.distance} beach={beach} />
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;