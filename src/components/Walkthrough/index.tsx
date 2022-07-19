import React from "react";

import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import { WalkthroughItemProps } from "../../types/walkthrough";

const WalkthroughItem: React.FC<WalkthroughItemProps> = (props: WalkthroughItemProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={[]}>
                <Image
                    source={props.WalkthroughImg}
                    style={styles.walkthroughImgStyle}
                />
            </View>
            <View style={[styles.walkthroughTitleContainer]}>
                <Text style={styles.walkthroughTitleStyle}>
                    {props.title}
                </Text>
            </View>

            <View style={styles.walkthroughLittleTitleContainer}>
                <Text style={styles.walkthroughLittleTitleStyle}>
                    {props.littleTitle}
                </Text>
            </View>
            <View style={styles.nextContainer}>
                <Image source={props.nextIcon} />
            </View>

            <View style={styles.nextActionContainer}>
                <View style={styles.actionContainer}>
                    <TouchableWithoutFeedback onPress={() => {
                        props.nextClick()
                    }}>
                        <View style={styles.actionStartedContainer}>
                            <Text style={styles.startedTextContaoner}>
                                Get Started
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default WalkthroughItem;

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
        marginTop: 5,
        height: 40
    },
    walkthroughTitleStyle: {
        color: '#FFFFFF',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: "700",
        height: 70,
        // lineHeight: 70
    },
    walkthroughTitleContainer: {
        width: 238,
        height: 70,
        lineHeight: 70
    },
    walkthroughImgStyle: {
        width: 375,
        height: 438
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