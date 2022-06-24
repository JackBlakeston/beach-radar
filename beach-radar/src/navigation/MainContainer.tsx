import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomePage from './screens/HomePage';
import BookmarksPage from './screens/BookmarksPage';
import MapPage from './screens/MapPage';
import SettingsPage from './screens/SettingsPage';
import styles from './styles';
import theme from '../../style/theme';
import { ICoordinates } from '../interfaces';

// Screen names
const homeName = 'Beaches';
const settingsName = 'Settings'
const mapName = 'Map';
const bookmarksName = 'Bookmarked';

const Tab = createBottomTabNavigator();

interface IMainContainerProps {
  coordinates: ICoordinates;
};

const MainContainer = ({ coordinates }: IMainContainerProps) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;
            if (routeName === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (routeName === mapName) {
              iconName = focused ? 'map' : 'map-outline';
            } else if (routeName === bookmarksName) {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (routeName === settingsName) {
              iconName = focused ? 'settings-sharp' : 'settings-outline';
            }

            return <Ionicons name={iconName as string} size={theme.ICON_SIZE_MEDIUM} color={color} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarStyle: styles.tabBar,
        })}
      >
        <Tab.Screen name={homeName} options={{ headerShown: false }}>
          {() => <HomePage coordinates={coordinates} />}
        </Tab.Screen>
        <Tab.Screen name={mapName} component={MapPage}/>
        <Tab.Screen name={bookmarksName} component={BookmarksPage}/>
        <Tab.Screen name={settingsName} component={SettingsPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default MainContainer;