import React from 'react'
import {
    Image,
    ImageSourcePropType,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as RootNavigation from '../../global/RootNavigation';
import { GlobalStyle } from '../../global/style'
import Const from '../../global/const'


const pegImgSource: ImageSourcePropType = require('../../assets/dogCaught.png');
const AvatarImgSource: ImageSourcePropType = require('../../assets/user-cover.png');

const Settings: React.FC = () => {

    const handGoLogin = () => {
        Alert.alert(
            "确定退出？",
            undefined,
            [
                {
                    text: "再想想",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "退出",
                    onPress: async () => {
                        await AsyncStorage.removeItem('@token')!;
                        RootNavigation.navigate('Login');
                    },
                    style: 'destructive'
                }
            ]
        )

    }

    return (
        <View style={GlobalStyle.container}>
            <SafeAreaView style={styles.avatarContainer}>
                <Image
                    style={styles.avatarStyle}
                    source={AvatarImgSource}
                    resizeMode={'stretch'}
                />
                <Text style={[styles.userNameStyle]}>Methew Parry</Text>
            </SafeAreaView>

            <View style={[styles.container, styles.settingContainer]}>

                <TouchableHighlight
                    underlayColor={Const.sceneContainerColor}
                    onPress={() => { console.log('Edit Profile') }}
                >
                    <View style={[styles.settingItemContainer]}>
                        <FontAwesome name={'edit'} size={22} color={Const.defaultColor} />
                        <Text style={styles.itemMenu}>Edit Profile</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={Const.sceneContainerColor}
                    onPress={() => { console.log('Add Pet') }}
                >
                    <View style={[styles.settingItemContainer]}>
                        <MaterialIcons name={'add'} size={22} color={Const.defaultColor} />
                        <Text style={styles.itemMenu}>Add Pet</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={Const.sceneContainerColor}
                    onPress={() => { console.log('My Pets') }}
                >
                    <View style={[styles.settingItemContainer]}>
                        <Image source={pegImgSource} style={styles.itemIconImageStyle} />
                        <Text style={styles.itemMenu}>My Pets</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={Const.sceneContainerColor}
                    onPress={() => { console.log('Favorites') }}
                >
                    <View style={[styles.settingItemContainer]}>
                        <Ionicons name={'heart-sharp'} size={22} color={Const.defaultColor} />
                        <Text style={styles.itemMenu}>Favorites</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={Const.sceneContainerColor}
                    onPress={() => handGoLogin()}
                >
                    <View style={[styles.settingItemContainer]}>
                        <MaterialIcons name={'logout'} size={22} color={Const.defaultColor} />
                        <Text style={styles.itemMenu}>Log out</Text>
                    </View>
                </TouchableHighlight>


            </View>

        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    itemIconImageStyle: {
        width: 22,
        height: 22,
        tintColor: Const.defaultColor
    },
    itemMenu: {
        paddingLeft: 15,
        fontSize: 16,
        color: '#000000',
        fontWeight: '500',
        opacity: 0.87
    },
    settingItemContainer: {
        paddingHorizontal: 22,
        display: 'flex',
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        marginBottom: 10
    },
    avatarStyle: {
        width: 80,
        height: 80,
        borderRadius: 15
    },
    userNameStyle: {
        paddingVertical: 6,
        fontSize: 18,
        fontWeight: '300',
        color: 'rgba(255, 255, 255, 0.86)',
        opacity: 0.87,
    },
    settingContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 70,
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: '500',
        color: Const.defaultTextWhiteColor,
        paddingLeft: 20,
        paddingBottom: 15
    },
    avatarContainer: {
        height: 170,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Const.defaultColor
    },
    container: {
        flex: 1,
        backgroundColor: '#ECEBEB'
    }
})