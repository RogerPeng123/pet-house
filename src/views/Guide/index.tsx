// 引导页面 欢迎使用

import React, { useEffect } from "react";
import {
    Image,
    ImageSourcePropType,
    SafeAreaView,
    StyleSheet,
    View
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import * as RootNavigation from '../../global/RootNavigation';
import { GuideProps } from "../../types/guide";
import Const from "../../global/const";

const Vector: ImageSourcePropType = require('../../assets/Vector.png');
const dogCaughtImg: ImageSourcePropType = require('../../assets/dogCaught.png');

const Guide: React.FC<GuideProps> = (props: GuideProps) => {

    useEffect(() => {
        Init();
    }, [])

    const Init = async () => {
        const token: string | null = await AsyncStorage.getItem('@token')!;
        const firstOpen: string | null = await AsyncStorage.getItem('@open')!;

        setTimeout(() => {
            if (firstOpen === null) {
                RootNavigation.navigate('Walkthrough')
            } else {
                if (token === null) {
                    RootNavigation.navigate('Login')
                } else {
                    RootNavigation.navigate('Main')
                }
            }
        }, 3000);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.itemsContainer}>
                <View style={styles.vectorContainer}>
                    <Image
                        style={styles.vectorImgStyle}
                        source={Vector} />
                </View>
            </View>

            <View style={styles.itemsContainer}>
                <View style={styles.dogCaughFirstContainer}>
                    <Image source={dogCaughtImg} style={styles.dogCaughtImgStyle} />
                </View>
            </View>

            <View style={styles.itemsContainer}>
                <View style={styles.dogCaughSecondContainer}>
                    <Image source={dogCaughtImg} style={styles.dogCaughtImgStyle} />
                </View>
            </View>

            <View style={styles.itemsContainer}>
                <View style={styles.dogCaughThirdContainer}>
                    <Image source={dogCaughtImg} style={styles.dogCaughtImgStyle} />
                </View>
            </View>

            <View style={styles.itemsContainer}>
                <View style={styles.dogCaughFourthContainer}>
                    <Image source={dogCaughtImg} style={styles.dogCaughtImgStyle} />
                </View>
            </View>

            <View style={styles.itemsContainer}>
                <View style={styles.dogCaughFifthContainer}>
                    <Image source={dogCaughtImg} style={styles.dogCaughtImgStyle} />
                </View>
            </View>

            <View style={styles.itemsContainer}>
                <View style={styles.dogCaughSixthContainer}>
                    <Image source={dogCaughtImg} style={styles.dogCaughtImgStyle} />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Guide;

const styles = StyleSheet.create({
    dogCaughSixthContainer: {
        marginTop: 20,
        height: 35,
        transform: [{ rotate: "20.71deg" }],
        flex: 1,
        paddingLeft: 100
    },
    dogCaughFifthContainer: {
        marginTop: 15,
        height: 35,
        transform: [{ rotate: "17.83deg" }],
        flex: 1,
        paddingRight: 90
    },
    dogCaughFourthContainer: {
        marginTop: 15,
        height: 35,
        transform: [{ rotate: "17.83deg" }],
        flex: 1,
        paddingLeft: 100
    },
    dogCaughThirdContainer: {
        marginTop: 15,
        height: 35,
        transform: [{ rotate: "28.13deg" }],
        flex: 1,
        paddingRight: 90
    },
    dogCaughSecondContainer: {
        marginTop: 15,
        height: 35,
        transform: [{ rotate: "58.99deg" }],
        flex: 1,
        paddingLeft: 100
    },
    dogCaughFirstContainer: {
        width: 35,
        height: 35,
        transform: [{ rotate: "68.5deg" }],
        flex: 1,
    },
    dogCaughtImgStyle: {
        width: 35,
        height: 35,
    },
    vectorImgStyle: {
        height: 159,
        width: 166,
    },
    vectorContainer: {
        marginTop: '35%',
        height: 159,
        width: 166,
    },
    itemsContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    container: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Const.defaultColor,
    }
});