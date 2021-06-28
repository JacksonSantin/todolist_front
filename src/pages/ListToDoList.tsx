import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import styles from '../assets/pages/listToDoListStyle';

import Checkbox from '@react-native-community/checkbox';

import Footer from '../components/footer';


export default function ListToDoList() {

  const navigation = useNavigation();

  function handleNavigationItens() {
    navigation.navigate('CreateToDoList');
  }


  return (
    <>
      <ScrollView style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }: any) => (
            <View style={styles.itemToDoView}>
              <View style={styles.itemToDoName}>
                <Checkbox
                  disabled={false}
                  value={false}
                />

                <Text
                  style={styles.itemTextToDo}
                  onPress={() => handleNavigationItens()}
                >
                  {item.key}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => { }}
              >
                <Feather name="trash-2" size={24} color="#ff669d" />
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
      <View>
        <Footer />
      </View>
    </>
  );
}