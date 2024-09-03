// MyReactNativeApp/App.js
import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './frontend/pages/Home'; 
import ProfileScreen from './frontend/pages/Profile'; 
import FriendScreen from './frontend/pages/Friend'; 
import SettingScreen from './frontend/pages/Setting'; 
import { getMessage } from './frontend/tools/API/api';

const MainScreen = () => {
  const [message, setMessage] = useState('');
  const [selectedScreen, setSelectedScreen] = useState('Home');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const data = await getMessage();
        setMessage(data.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessage();
  }, []);

  const renderScreen = () => {
    switch (selectedScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Profile':
        return <ProfileScreen />;
      case 'Setting':
        return <SettingScreen />;
      case 'Friend':
        return <FriendScreen />;  
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
      <View style={styles.tabContainer}>
        <Button
          title="Home"
          onPress={() => setSelectedScreen('Home')}
        />
        <Button
          title="Friend"
          onPress={() => setSelectedScreen('Friend')}
        />
        <Button
          title="Setting"
          onPress={() => setSelectedScreen('Setting')}
        />
        <Button
          title="Profile"
          onPress={() => setSelectedScreen('Profile')}
        />
        {/* Ajoutez d'autres boutons ici pour d'autres écrans */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  screenContainer: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}
