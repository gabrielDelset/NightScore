// MyReactNativeApp/screens/Friend.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getMessage } from '../tools/API/api';

const Friend = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await getMessage();
        console.log(response);
        setMessage(response.message);  // On suppose que 'response.message' est le bon chemin pour obtenir le message

      } catch (err) {
        console.error(err); // Vous pouvez aussi gérer l'erreur avec un état
      }
    };

    fetchMessage();
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default Friend;
