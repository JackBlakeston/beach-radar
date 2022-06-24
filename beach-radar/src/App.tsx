import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';


import MainContainer from './navigation/MainContainer';
import { ICoordinates } from './interfaces';

const App = () => {

  const [location, setLocation] = useState<null | Location.LocationObject>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [coordinates, setCoordinates] = useState<null | ICoordinates>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCoordinates({lat: location.coords.latitude, lon: location.coords.longitude});
    })();
  }, []);
  // TODO move coordinates into context

  // if (errorMsg) {
    // TODO decide what to do when we can't get location
  // } else if (location) {

  // }

  return (
    coordinates && <MainContainer coordinates={coordinates as ICoordinates}/>
  )
}

export default registerRootComponent(App);