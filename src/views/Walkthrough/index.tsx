import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    ImageSourcePropType
} from 'react-native';

import ReactNativeViewPager from '@react-native-community/viewpager';
import AsyncStorage from '@react-native-community/async-storage';

import WalkthroughItem from '../../components/Walkthrough';
import { WalkthroughProps } from '../../types/walkthrough';

const WalkthroughOneImg: ImageSourcePropType = require('../../assets/01-1.png');
const nextOneIcon: ImageSourcePropType = require('../../assets/next-1.png');

const WalkthroughTwoImg: ImageSourcePropType = require('../../assets/01-2.png');
const nextTwoIcon: ImageSourcePropType = require('../../assets/next-2.png');

const WalkthroughThreeImg: ImageSourcePropType = require('../../assets/01-3.png');
const nextThreeIcon: ImageSourcePropType = require('../../assets/next-3.png');

const Walkthrough: React.FC<WalkthroughProps> = (props: WalkthroughProps) => {

    useEffect(() => {
        AsyncStorage.setItem('@open', '1');
    }, []);

    const viewPagerRef = useRef<ReactNativeViewPager>(null);

    return (
        <ReactNativeViewPager style={styles.container} initialPage={0} ref={viewPagerRef}>
            <View key={1}>
                <WalkthroughItem
                    WalkthroughImg={WalkthroughOneImg}
                    title={'Your New Best Friend'}
                    littleTitle={'We will help you to choose your lovely pet. Save a life. Adopt a pet'}
                    nextIcon={nextOneIcon}
                    nextClick={() => {
                        //点击滚动到指定页
                        viewPagerRef.current!.setPage(1);
                    }} />
            </View>
            <View key={2}>
                <WalkthroughItem
                    WalkthroughImg={WalkthroughTwoImg}
                    title={'Your Best Friend is waiting'}
                    littleTitle={'Let your love change the world!'}
                    nextIcon={nextTwoIcon}
                    nextClick={() => {
                        //点击滚动到指定页
                        viewPagerRef.current!.setPage(2);
                    }} />
            </View>

            <View key={3}>
                <WalkthroughItem
                    WalkthroughImg={WalkthroughThreeImg}
                    title={'Adopt Don’t Shop'}
                    littleTitle={'The love of an animal is a pure thing. They gives you a trust which is a tool.'}
                    nextIcon={nextThreeIcon}
                    nextClick={() => {
                        //点击进入主页
                        props.navigation.navigate('Login')
                    }} />
            </View>
        </ReactNativeViewPager>
    )
}

export default Walkthrough

const styles = StyleSheet.create({
    startedTextContaoner: {
        textAlign: 'center',
        lineHeight: 66,
        color: '#667446',
        fontSize: 24,
        fontWeight: '500',
    },
    actionStartedContainer: {
        width: 200,
        backgroundColor: '#FEC868',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    actionContainer: {
        height: 66,
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    nextActionContainer: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    nextContainer: {
        marginTop: 30
    },
    walkthroughLittleTitleStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "500"
    },
    walkthroughLittleTitleContainer: {
        marginTop: 5
    },
    walkthroughTitleStyle: {
        color: '#FFFFFF',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: "700"
    },
    walkthroughTitleContainer: {
        width: 190,
    },
    container: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#8D9F5E',
    },
    borderContainer: {
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})