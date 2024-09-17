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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Fond noir
    justifyContent: 'space-between',
  },
  screenContainer: {
    flex: 1,
    borderWidth: 5, // Bordure autour des écrans
    borderColor: '#D3A200', // Couleur de bordure #D3A200
    borderRadius: 10, // Coins arrondis
    marginBottom: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 5, // Bordure autour des écrans
    borderColor: '#D3A200', // Couleur de bordure #D3A200
    paddingVertical: 10,

    borderTopColor: '#ccc',
  },
  messageText: {
    color: '#D3A200', // Couleur du texte pour correspondre à la bordure
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}
