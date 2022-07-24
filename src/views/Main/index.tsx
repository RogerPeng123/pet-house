import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as RootNavigation from '../../global/RootNavigation';

import Index from "../Index";
import Favorites from "../Favorites";
import Chats from "../Chats";
import Settings from "../Settings";

import { HomeProps } from "../../types/home";
import Const from "../../global/const";

const Tab = createBottomTabNavigator();

const Main: React.FC<HomeProps> = (props: HomeProps) => {
    return (
        <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                sceneContainerStyle={{
                    backgroundColor: Const.sceneContainerColor,
                }}
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: Const.defaultColor,
                    },
                    tabBarBadgeStyle: {
                        backgroundColor: Const.sceneContainerColor,
                    },
                }}
            >
                <Tab.Screen
                    name="Index"
                    component={Index}
                    options={
                        ({ route }) => ({
                            title: '首页',
                            headerTitleStyle: { textAlign: 'center' }, //Android 标题居中
                            tabBarIcon: (
                                props: {
                                    focused: boolean;
                                    color: string;
                                    size: number;
                                }) => {

                                if (props.focused) {
                                    return (
                                        <Ionicons
                                            name={'ios-home'}
                                            size={props.size}
                                            color={props.color}
                                        />
                                    )
                                } else {
                                    return (
                                        <Ionicons
                                            name={'ios-home-outline'}
                                            size={props.size}
                                            color={props.color}
                                        />
                                    )
                                }
                            },
                            tabBarActiveTintColor: Const.tabBarActiveTintColor,
                            tabBarInactiveTintColor: Const.tabBarInactiveTintColor,
                        })
                    }
                />
                <Tab.Screen
                    name="Favorites"
                    component={Favorites}
                    options={
                        ({ route }) => ({
                            title: '喜欢',
                            headerTitleStyle: { textAlign: 'center' }, //Android 标题居中
                            tabBarIcon: (
                                props: {
                                    focused: boolean;
                                    color: string;
                                    size: number;
                                }) => {
                                if (props.focused) {
                                    return (
                                        <Ionicons
                                            name={'heart'}
                                            size={props.size}
                                            color={props.color} />
                                    )
                                } else {
                                    return (
                                        <Ionicons
                                            name={'heart-outline'}
                                            size={props.size}
                                            color={props.color} />
                                    )
                                }
                            },
                            tabBarActiveTintColor: Const.tabBarActiveTintColor,
                            tabBarInactiveTintColor: Const.tabBarInactiveTintColor,
                        })
                    }
                />
                <Tab.Screen
                    name="Chats"
                    component={Chats}
                    options={
                        ({ route }) => ({
                            title: '消息',
                            headerTitleStyle: { textAlign: 'center' }, //Android 标题居中
                            tabBarIcon: (
                                props: {
                                    focused: boolean;
                                    color: string;
                                    size: number;
                                }) => {
                                if (props.focused) {
                                    return (
                                        <MaterialCommunityIcons
                                            name={'message-processing'}
                                            size={props.size}
                                            color={props.color} />
                                    )
                                } else {
                                    return (
                                        <MaterialCommunityIcons
                                            name={'message-processing-outline'}
                                            size={props.size}
                                            color={props.color} />
                                    )
                                }
                            },
                            tabBarActiveTintColor: Const.tabBarActiveTintColor,
                            tabBarInactiveTintColor: Const.tabBarInactiveTintColor,
                        })
                    }
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={
                        ({ route }) => ({
                            title: '设置',
                            headerTitleStyle: { textAlign: 'center' }, //Android 标题居中
                            tabBarIcon: (
                                props: {
                                    focused: boolean;
                                    color: string;
                                    size: number;
                                }) => {
                                if (props.focused) {
                                    return (
                                        <Ionicons
                                            name={'ios-settings-sharp'}
                                            size={props.size}
                                            color={props.color} />
                                    )
                                } else {
                                    return (
                                        <Ionicons
                                            name={'ios-settings-outline'}
                                            size={props.size}
                                            color={props.color} />
                                    )
                                }
                            },
                            tabBarActiveTintColor: Const.tabBarActiveTintColor,
                            tabBarInactiveTintColor: Const.tabBarInactiveTintColor,
                        })
                    }
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default Main;