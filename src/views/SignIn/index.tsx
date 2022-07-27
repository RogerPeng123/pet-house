import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    ImageSourcePropType,
    TextInput,
    Button
} from "react-native";
import Const from "../../global/const";

import { GlobalStyle } from "../../global/style";
import { SignInProps } from "../../types/signin";

const dogSource: ImageSourcePropType = require('../../assets/login-1.png');

const SignIn: React.FC<SignInProps> = (props: SignInProps) => {

    const [username, setUserName] = useState<string>('mathewperry0001@gmail.com');
    const [password, setPassword] = useState<string>('');
    const [codeText, setCodeText] = useState<string>('验证码');

    useEffect(() => {
        // Android 阻止侧滑
        props.navigation.addListener('beforeRemove', (e: any) => {
            e.preventDefault();
        });

    }, [props.navigation]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleGetCode = () => {
        console.log('获取验证码')
    }

    const handleSignIn = async () => {
        await AsyncStorage.setItem('@token', 'tokentoken');
        props.navigation.push('Main')
    }

    return (
        <View style={[GlobalStyle.container, styles.container]}>

            <SafeAreaView style={[styles.topContainer]}>
                <View style={[styles.botTitleContainer]}>
                    <Text style={[styles.topTitleTextStyle]}>
                        Hi Welcome Back
                    </Text>
                </View>

                <View style={[styles.dogContainer]}>
                    <Image source={dogSource} style={styles.dogStyle} />
                </View>

            </SafeAreaView>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomFormContainer}>
                    <View style={styles.formContainer}>
                        <View style={styles.formItemContainer}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitleStyle}>
                                    Username
                                </Text>
                            </View>
                            <View style={[
                                styles.itemTitleContainer,
                                styles.itemTextInputStyle
                            ]}>
                                <TextInput
                                    placeholder="Username"
                                    value={username}
                                    autoComplete={"off"}
                                    clearTextOnFocus={true}
                                    autoCapitalize='none'
                                    onChangeText={(text: string) => {
                                        setUserName(text)
                                    }}
                                />
                            </View>
                        </View>

                        <View style={[
                            styles.formItemContainerMarginTop,
                            styles.formItemContainer
                        ]}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitleStyle}>
                                    Verification code
                                </Text>
                            </View>
                            <View style={[
                                styles.itemTitleContainer,
                                styles.codeInputContainer,
                            ]}>
                                <View style={[
                                    styles.itemTextInputStyle,
                                    styles.codeInputStyle,
                                ]}>
                                    <TextInput
                                        placeholder="Verification code"
                                        value={password}
                                        autoComplete={"off"}
                                        clearTextOnFocus={true}
                                        // secureTextEntry={true}
                                        autoCapitalize='none'
                                        onChangeText={(text: string) => {
                                            setPassword(text)
                                        }}
                                    />
                                </View>
                                <View style={[
                                    styles.codeButtonContainer,
                                ]}>
                                    <Button
                                        title={codeText}
                                        color={Const.defaultTextWhiteColor}
                                        onPress={() => handleGetCode()}
                                    />
                                </View>
                            </View>

                            {/* <View style={[
                                styles.formItemContainer,
                                styles.forgetPasswordContainer,
                            ]}>
                                <Text
                                    style={styles.forgetPasswordStyle}
                                    onPress={() => handleForgetPassword()}
                                >
                                    Forget Password?
                                </Text>
                            </View> */}
                        </View>

                        <View style={styles.actionContainer}>
                            <View style={[
                                styles.signCommonStyle,
                                styles.signInContainer
                            ]}>
                                <Button
                                    title="Sign In"
                                    color={Const.defaultTextWhiteColor}
                                    onPress={() => handleSignIn()}
                                />
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    codeButtonContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 9,
        backgroundColor: '#8D9F5E',
        width: 100,
    },
    codeInputStyle: {
        flex: 1,
        marginRight: 15
    },
    codeInputContainer: {
        display: "flex",
        flexDirection: 'row'
    },
    signInContainer: {
        backgroundColor: '#8D9F5E',
    },
    signCommonStyle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        marginBottom: 33
    },
    actionContainer: {
        marginTop: 50,
        marginHorizontal: 20
    },
    dogStyle: {
        width: 256,
        height: 216,
        zIndex: 9999
    },
    dogContainer: {
        position: "absolute",
        top: 41,
        right: 21,
    },
    forgetPasswordStyle: {
        textAlign: 'right',
        color: Const.defaultColor,
        fontSize: 12,
        fontWeight: '500'
    },
    forgetPasswordContainer: {
        paddingTop: 13,
        marginHorizontal: 20,
    },
    topTitleTextStyle: {
        fontWeight: '700',
        fontSize: 31,
        color: Const.defaultTextWhiteColor,
    },
    botTitleContainer: {
        width: 184,
        marginLeft: 32
    },
    itemTextInputStyle: {
        height: 50,
        justifyContent: 'center',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.38)',
    },
    itemTitleStyle: {
        color: Const.defaultColor,
        fontSize: 16,
        fontWeight: '500'
    },
    itemTitleContainer: {
        marginHorizontal: 20
    },
    formItemContainer: {
    },
    formItemContainerMarginTop: {
        marginTop: 37
    },
    formContainer: {
        marginTop: 85,
        flex: 1
    },
    bottomFormContainer: {
        backgroundColor: '#F9F9F9',
        height: 20,
        borderRadius: 45,
        flex: 1,
        marginTop: 5
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#683931',
        borderRadius: 40,
        display: "flex",
        zIndex: 2
    },
    topContainer: {
        height: 200,
        zIndex: 3
    },
    container: {
        display: "flex",
        flexDirection: 'column'
    }
});