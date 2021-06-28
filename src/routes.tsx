import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateToDoList from './pages/CreateToDoList';
import Header from './components/header';
import ListToDoList from './pages/ListToDoList';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen
          name="ListToDoList"
          component={ListToDoList}
          options={{
            header: () => <Header showCancel={false} showGoBack={false} title="Listas Criadas" />
          }}
        />
        <Screen
          name="CreateToDoList"
          component={CreateToDoList}
          options={{
            header: () => <Header title="Criar Listas" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}