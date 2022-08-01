import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    ImageSourcePropType,
    Image,
    KeyboardAvoidingView
} from 'react-native'
import Const from '../../global/const'
import { GlobalStyle } from '../../global/style'

const AvatarSource: ImageSourcePropType = require('../../assets/user-cover.png')

const EditProfile: React.FC = () => {

    const [username, setUserName] = useState<string>('Methew Parry');
    const [phone, setPhone] = useState<string>('13123456789');
    const [location, setLocation] = useState<string>('Asia/Shanghai');

    const onSaveChanges = () => {
        Alert.alert('success')
    }

    const onChangeProfilePicture = () => {
        Alert.alert('调用选择图片')
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={[styles.safeContainer]}>
                <View style={[styles.profileAvatarContainer]}>
                    <View style={[styles.avatarContainer]}>
                        <Image
                            source={AvatarSource}
                            resizeMode={'stretch'}
                            style={styles.avatarStyle}
                        />
                    </View>
                    <View style={[styles.changeAvatarContainer]}>
                        <Button
                            title='Chnage Profile Picture'
                            color={Const.defaultColor}
                            onPress={() => onChangeProfilePicture()}
                        />
                    </View>
                </View>

                <View style={[styles.profileInfoContainer]}>

                    <View style={styles.formContainer}>
                        <View style={styles.formItemContainer}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitleStyle}>
                                    Name
                                </Text>
                            </View>
                            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                                <View style={[
                                    styles.itemTitleContainer,
                                    styles.itemTextInputStyle
                                ]}>
                                    <TextInput
                                        placeholder="Name"
                                        value={username}
                                        autoComplete={"off"}
                                        clearTextOnFocus={true}
                                        autoCapitalize='none'
                                        onChangeText={(text: string) => {
                                            setUserName(text)
                                        }}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </View>

                        <View style={[styles.formItemContainer, styles.formItemContainerMarginTop]}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitleStyle}>
                                    Phone
                                </Text>
                            </View>
                            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                                <View style={[
                                    styles.itemTitleContainer,
                                    styles.itemTextInputStyle
                                ]}>
                                    <TextInput
                                        placeholder="Phone"
                                        value={phone}
                                        autoComplete={"off"}
                                        autoCapitalize='none'
                                        clearTextOnFocus={true}
                                        onChangeText={(text: string) => {
                                            setPhone(text)
                                        }}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                        </View>



                        <View style={[styles.formItemContainer, styles.formItemContainerMarginTop]}>
                            <View style={styles.itemTitleContainer}>
                                <Text style={styles.itemTitleStyle}>
                                    Location
                                </Text>
                            </View>

                            <View style={[
                                styles.itemTitleContainer,
                                styles.itemTextInputStyle
                            ]}>
                                <TextInput
                                    placeholder="Location"
                                    value={location}
                                    autoComplete={"off"}
                                    clearTextOnFocus={true}
                                    autoCapitalize='none'
                                    onChangeText={(text: string) => {
                                        setLocation(text)
                                    }}
                                />
                            </View>
                        </View>
                    </View>


                    <View style={[styles.actionContainer]}>
                        <Button
                            title={'Save Changes'}
                            color={Const.defaultTextWhiteColor}
                            onPress={() => onSaveChanges()}
                        />
                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.safeBottomContainer} />
        </View>
    )
}

export default EditProfile


const styles = StyleSheet.create({
    changeAvatarContainer: {
        marginTop: 15,
        marginHorizontal: 80,
        backgroundColor: Const.defaultTextWhiteColor,
        borderRadius: 10
    },
    avatarStyle: {
        width: 80,
        height: 80,
        borderRadius: 15
    },
    avatarContainer: {
        alignItems: 'center'
    },
    actionContainer: {
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: Const.defaultColor,
        height: 50,
        justifyContent: 'center'
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
        flex: 1,
    },
    profileAvatarContainer: {
        height: 160
    },
    profileInfoContainer: {
        flex: 1,
        backgroundColor: '#ECEBEB',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingTop: 50,
    },
    safeBottomContainer: {
        backgroundColor: '#ECEBEB',
    },
    safeContainer: {
        flex: 1,
        backgroundColor: Const.defaultColor
    },
    container: {
        flex: 1,
    }
})