import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Message from '../../components/Message';
import Const from '../../global/const';
import { GlobalStyle } from '../../global/style';
import { AdoptionMessageProps } from '../../types/adoption';

const AdoptionMessage: React.FC<AdoptionMessageProps> = (props: AdoptionMessageProps) => {

    const [message, setMessage] = useState<string>();

    useEffect(() => {
        props.navigation.setOptions({
            title: 'Ryder Pump(online)',
            headerTitleStyle: {
                // color: '#B4B4B4'
            },
        })
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <Message list={[
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
            ]} />
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

                <View style={[styles.searchBtnContainer]}>
                    <Ionicons
                        name={'paper-plane-outline'}
                        size={20}
                        color={Const.defaultTextWhiteColor}
                    />
                </View>

            </View>
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