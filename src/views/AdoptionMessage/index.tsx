import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableHighlight } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Message from '../../components/Message';
import Const from '../../global/const';
import { GlobalStyle } from '../../global/style';
import { AdoptionMessageProps } from '../../types/adoption';
import { MessageItem } from '../../types/message';

const AdoptionMessage: React.FC<AdoptionMessageProps> = (props: AdoptionMessageProps) => {

    const scrollRef = useRef<ScrollView>(null);

    const [message, setMessage] = useState<string>();

    const [messageList, setMessageList] = useState<MessageItem[]>([
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        },
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        },
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        },
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        },
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        },
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        },
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        },
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        },
        {
            yourSelf: true,
            content: 'Hi, I want to adopt Daisy',
            type: 1
        },
        {
            yourSelf: false,
            content: 'Hi, Where do you stay?',
            type: 1
        }
    ]);

    useEffect(() => {
        props.navigation.setOptions({
            title: 'Ryder Pump(online)',
            headerTitleStyle: {
                // color: '#B4B4B4'
            },
        })
    }, []);

    const onSendMessage = () => {
        console.log(message)
        if (message != undefined && message.length > 0) {
            let newList = [...messageList];
            newList.push({
                yourSelf: true,
                content: message,
                type: 1
            });
            setMessageList(newList);

            scrollRef.current?.scrollToEnd({ animated: true })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Message list={messageList} scrollRef={scrollRef} />

            {/*  fix 处理键盘遮挡住input输入框的情况 */}
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                <View style={[styles.inputContainer]}>
                    <View style={styles.inputIconContainer}>
                        <Ionicons name={'attach'} size={20} color={'rgba(0, 0, 0, 0.58)'} />
                    </View>

                    <View style={[styles.inputTextContainer]}>
                        <TextInput
                            style={{
                                height: 50
                            }}
                            autoCapitalize='none'
                            placeholder={'Type a message'}
                            onChangeText={(text: string) => setMessage(text)} />
                    </View>

                    <TouchableHighlight underlayColor={Const.clickTransparentColor} onPress={() => onSendMessage()}>
                        <View style={[styles.searchBtnContainer]}>
                            <Ionicons
                                name={'paper-plane-outline'}
                                size={20}
                                color={Const.defaultTextWhiteColor}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AdoptionMessage

const styles = StyleSheet.create({
    searchBtnContainer: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 13,
        backgroundColor: '#7A8A50'
    },
    inputTextContainer: {
        flex: 1,
        height: 50,
    },
    inputIconContainer: {
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 15
    },
    inputContainer: {
        height: 50,
        marginHorizontal: 20,
        backgroundColor: '#D4D4D4',
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    messageContainer: {
        flex: 1,
        paddingTop: 10
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ECEBEB',

    }
});