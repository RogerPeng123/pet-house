import React from 'react'
import {
    Image,
    ImageSourcePropType,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    TouchableHighlight
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from '../../global/RootNavigation';

import Const from '../../global/const';

import { PegDetailProps } from '../../types/peg'

const PegDetailImg: ImageSourcePropType = require('../../assets/pet-detail-1.png');
const UserCoverImg: ImageSourcePropType = require('../../assets/user-cover.png');

const PetDetail: React.FC<PegDetailProps> = (props: PegDetailProps) => {

    const handleLikeAction = (id: number) => {

    }

    const goAdoptionMessage = () => {
        RootNavigation.navigate('AdoptionMessage')
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                <View style={[styles.bannerContainer]}>
                    <Image source={PegDetailImg} style={styles.pegDetailImgStyle} resizeMode={'stretch'} />
                </View>
                <View style={[styles.contentContainer]}>
                    <View style={[styles.pegNameAndSexContainer]}>
                        <View>
                            <Text style={styles.pegNameStyle}>Daisy</Text>
                        </View>
                        <View>
                            <Ionicons
                                name={'ios-male-female'}
                                size={24}
                                color={'#F78B8B'}
                            />
                        </View>
                    </View>
                    <View style={styles.pegYearAndAddressContainer}>
                        <View>
                            <Text style={styles.pegAddressAndYearStyle}>Cavalier King</Text>
                            <Text style={styles.pegAddressAndYearStyle}>Charles Spaniel</Text>
                        </View>
                        <View>
                            <Text style={styles.pegAddressAndYearStyle}>2 Years</Text>
                        </View>
                    </View>

                    <View style={styles.positioningContainer}>
                        <Ionicons name={'location-sharp'} size={22} color={Const.defaultColor} />
                        <Text style={styles.positionAddressStyle}>Los Angeles, CA</Text>
                    </View>

                    <View style={[styles.userContainer]}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={UserCoverImg}
                                style={[styles.avatarStyle]}
                            />
                        </View>

                        <View style={styles.userNameContainer}>
                            <View>
                                <Text style={styles.userNameStyle}>Ryder Pump</Text>
                            </View>
                            <View>
                                <Text style={styles.roleStyle}>Owner</Text>
                            </View>
                        </View>

                        <View style={[styles.lastTtimeContainer]}>
                            <Text style={styles.lastTimeStyle}>28, April 2020</Text>
                        </View>
                    </View>

                    <View style={[styles.textContainer]}>
                        <Text style={styles.textContent}>
                            Daisy was abondoned after six months by his
                            owner because he consumed more food than they
                            expected him to eat. She still strolls around that
                            house despite being chased. Now she is fed by my
                            sister in law but she deserves a loving family.

                            Daisy was abondoned after six months by his
                            owner because he consumed more food than they
                            expected him to eat. She still strolls around that
                            house despite being chased. Now she is fed by my
                            sister in law but she deserves a loving family.

                            Daisy was abondoned after six months by his
                            owner because he consumed more food than they
                            expected him to eat. She still strolls around that
                            house despite being chased. Now she is fed by my
                            sister in law but she deserves a loving family.

                            Daisy was abondoned after six months by his
                            owner because he consumed more food than they
                            expected him to eat. She still strolls around that
                            house despite being chased. Now she is fed by my
                            sister in law but she deserves a loving family.

                            Daisy was abondoned after six months by his
                            owner because he consumed more food than they
                            expected him to eat. She still strolls around that
                            house despite being chased. Now she is fed by my
                            sister in law but she deserves a loving family.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={[styles.AdoptionContainer]}>
                <TouchableHighlight
                    underlayColor={Const.clickTransparentColor}
                    onPress={() => handleLikeAction}
                >
                    <View style={[styles.likeActionButtonContainer]}>
                        <Ionicons
                            name={'heart-sharp'}
                            size={22}
                            color={Const.defaultTextWhiteColor}
                        />
                    </View>
                </TouchableHighlight>

                <View style={[styles.AdoptionActionButtonContainer]}>
                    <Button
                        title={'Adoption'}
                        color={Const.defaultTextWhiteColor}
                        onPress={() => goAdoptionMessage()}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PetDetail

const styles = StyleSheet.create({
    AdoptionActionButtonContainer: {
        marginLeft: 20,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 11,
        backgroundColor: Const.defaultColor
    },
    likeActionButtonContainer: {
        width: 55,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
        backgroundColor: Const.defaultColor
    },
    AdoptionContainer: {
        paddingHorizontal: 20,
        height: 50,
        display: 'flex',
        flexDirection: 'row'
    },
    textContent: {
        fontSize: 13,
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.86)',
        opacity: 0.87
    },
    textContainer: {
        flex: 1,
        paddingVertical: 10
    },
    lastTimeStyle: {
        fontSize: 12,
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'right'
    },
    lastTtimeContainer: {
        width: 100
    },
    roleStyle: {
        fontSize: 12,
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    userNameStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.86)'
    },
    userNameContainer: {
        flex: 1,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    avatarStyle: {
        borderRadius: 12,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    userContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    positionAddressStyle: {
        fontSize: 16,
        fontWeight: '500'
    },
    positioningContainer: {
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    pegAddressAndYearStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.5)'
    },
    pegYearAndAddressContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pegNameStyle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000000DB'
    },
    pegNameAndSexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#ECEBEB',
        paddingHorizontal: 20
    },
    pegDetailImgStyle: {
        width: '100%',
        alignSelf: 'center',
        position: 'absolute',
    },
    bannerContainer: {
        height: 360,
        marginBottom: 0,
        paddingBottom: 0
    },
    container: {
        flex: 1,
        backgroundColor: '#ECEBEB',
    }
});