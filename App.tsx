/**
 * 根组建处理
 *
 * @author songyang peng
 */
import * as React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { HeaderBackButton } from '@react-navigation/stack';

import { navigationRef } from './src/global/RootNavigation';

import Guide from './src/views/Guide';
import SignIn from './src/views/SignIn';
import Main from './src/views/Main/index';
import Walkthrough from './src/views/Walkthrough';
import PetDetail from './src/views/PetDetail';
import AdoptionMessage from './src/views/AdoptionMessage';
import EditProfile from './src/views/EditProfile';

import Const from './src/global/const';


const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={'Guide'}
          component={Guide}
          options={{
            title: '启动页',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Walkthrough'}
          component={Walkthrough}
          options={{
            title: '引导',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={SignIn}
          options={{
            title: '登录',
            headerBackVisible: false,
            headerShown: false,
            gestureEnabled: false, //ios禁止该页面侧滑
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main',
            headerBackVisible: false,
            headerShown: false,
            gestureEnabled: false, //ios禁止该页面侧滑
          }}
        />

        <Stack.Screen
          name="PetDetail"
          component={PetDetail}
          options={{
            title: '宠物详情',
            headerBackTitle: '返回',
            headerStyle: { backgroundColor: Const.defaultColor },
            headerTitleStyle: { color: Const.defaultTextWhiteColor },
            headerTintColor: Const.defaultTextWhiteColor, // 返回按钮颜色
          }}
        />

        <Stack.Screen
          name='AdoptionMessage'
          component={AdoptionMessage}
          options={({ route }) => ({
            headerBackTitle: '返回',
            headerStyle: { backgroundColor: Const.defaultColor },
            headerTitleStyle: { color: Const.defaultTextWhiteColor },
            headerTintColor: Const.defaultTextWhiteColor, // 返回按钮颜色
          })}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false,
            // title: 'EditProfile',
            // headerBackTitle: '返回',
            // headerStyle: { backgroundColor: Const.defaultColor },
            // headerTitleStyle: { color: Const.defaultTextWhiteColor },
            // headerTintColor: Const.defaultTextWhiteColor, // 返回按钮颜色
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

