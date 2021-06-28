import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import styles from '../assets/components/footerStyle';

export default function Footer() {

  const navigation = useNavigation();

  function handleNavigateToCreateToDoList() {
    navigation.navigate('CreateToDoList');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.footer}>
        <RectButton style={styles.createToDoList} onPress={handleNavigateToCreateToDoList}>
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}