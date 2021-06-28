import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import styles from '../assets/pages/createToDoListStyle';

export default function CreateToDoList() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
      />

      <View style={styles.containerTextButton}>
        <Text style={styles.label}>Itens</Text>
        <RectButton style={styles.buttonAddItens} onPress={() => { }}>
          <Feather name="plus" size={24} color="#fff" />
        </RectButton>
      </View>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Fotos</Text>
      <TouchableOpacity style={styles.imagesInput} onPress={() => { }}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <RectButton style={styles.nextButton} onPress={() => { }}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  );
}