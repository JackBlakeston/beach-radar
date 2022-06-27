import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BeachCard from '../../../components/BeachCard/BeachCard';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { FILTERS, SORT } from '../../../constants';
import { ICoordinates, IBeach } from '../../../interfaces';
import { getBeaches } from '../../../utils/getBeaches';
import styles from './HomePage.styles';

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

  const handleSortClick = () => {
    console.log('clicked');
  };

  const handleFiltersClick = () => {
    console.log('clicked');
  };

  return (
      // TODO check if FlatList gives us better performance, once we have a large enough DB
    <SafeAreaView>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <PrimaryButton style={styles.button} text={SORT} onPress={handleSortClick} />
          <PrimaryButton style={styles.button} text={FILTERS} onPress={handleFiltersClick} />
        </View>
        {beaches && beaches.map(beach => {
          return <BeachCard key={beach.distance} beach={beach} />
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;