import * as React from 'react';
import { View, Text } from 'react-native';
import { useAuthentication } from '../../utils/useAuthentication';
import LoginPage from './LoginPage';

const SettingsPage = () => {
  const { user } = useAuthentication();
  return (
      user ? <Text>This is the settings page</Text> : <LoginPage />
  );
}

export default SettingsPage;