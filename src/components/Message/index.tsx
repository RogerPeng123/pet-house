import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Const from '../../global/const';
import { MessageItem, MessageProps } from '../../types/message';

const Message: React.FC<MessageProps> = (props: MessageProps) => {

    const generateElements = () => {

        let elements: React.ReactNode[] = [];

        props.list.map((item: MessageItem, index: number) => {
            elements.push(
                <View key={index} style={[styles.messageItemContainer]}>
                    <View style={
                        item.yourSelf ? styles.messageRightText : styles.messageLeftText
                    }>
                        <Text style={[
                            styles.messageTxt,
                            item.yourSelf ? styles.rightText : styles.leftText
                        ]}>
                            {item.content}
                        </Text>
                    </View>
                </View>
            )
        })

        return elements;
    }

    return (
        <ScrollView style={[styles.messageContainer]}>
            {
                generateElements()
            }
        </ScrollView>
    )
}

export default Message

const styles = StyleSheet.create({
    leftText: {
        color: 'rgba(13, 13, 13, 0.6)'
    },
    rightText: {
        color: Const.defaultTextWhiteColor,
    },
    messageLeftText: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginRight: 10,
        backgroundColor: '#B4B4B4',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    messageRightText: {
        alignSelf: 'flex-end',
        marginLeft: 10,
        marginRight: 15,
        backgroundColor: Const.defaultColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    messageTxt: {
        textAlign: 'left',
        fontSize: 14,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontWeight: '500',
        padding: 10
    },
    messageItemContainer: {
        alignContent: 'center',
        marginTop: 10,
    },
    messageContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }
});