/**
 * 根组建处理
 *
 * @author songyang peng
 */
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GuideView from './src/views/Guide';
import LoginView from './src/views/Login';
import IndexView from './src/views/index';
import FirstWalkthrough from './src/views/Walkthrough';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Guide'}
          component={GuideView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Walkthrough1'}
          component={FirstWalkthrough}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginView}
        />
        <Stack.Screen
          name="Index"
          component={IndexView}
          options={{
            headerBackVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

