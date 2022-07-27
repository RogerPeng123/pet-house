import React from 'react'
import {
    Image,
    ImageSourcePropType,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as  RootNavigation from '../../global/RootNavigation'

import Const from '../../global/const'
import { GlobalStyle } from '../../global/style'

const pegAvatarSource: ImageSourcePropType = require('../../assets/pet-detail-1.png');

const Favorites: React.FC = () => {

    const goPegDetail = () => {
        RootNavigation.navigate('PetDetail')
    }

    const generateFavorites = () => {
        let db: React.ReactNode[] = [];
        for (let i = 0; i < 10; i++) {
            db.push(
                <TouchableHighlight
                    key={i}
                    underlayColor={Const.clickTransparentColor}
                    onPress={() => goPegDetail()}
                >
                    <View style={[
                        styles.favoritesItemContainer,
                        i === 0 ? {
                            marginTop: 20
                        } : {}
                    ]}
                    >
                        <View style={styles.pegAvatrContainer}>
                            <Image
                                source={pegAvatarSource}
                                style={styles.avatrStyle}
                                resizeMode={'cover'}
                            />
                        </View>
                        <View style={styles.pegNameContianer}>
                            <Text style={styles.pegNameStyle}>Daisy</Text>
                            <View style={styles.keysContainer}>
                                <Text style={styles.keyStyle}>Cavalier King </Text>
                                <Text style={styles.keyStyle}>Charles Spaniel</Text>
                            </View>
                            <Text style={styles.keyStyle}>2 Years</Text>
                        </View>

                        <View style={styles.actionsContainer}>

                            <Ionicons
                                name={Const.pegSexMaleIconName}
                                size={20}
                                color={Const.pegSexMaleIconColor}
                            />

                            <Ionicons
                                name={Const.likeActionIconName}
                                size={20}
                                color={Const.likeActionIconColor}
                            />
                        </View>
                    </View>
                </TouchableHighlight >
            )
        }
        return db;
    }

    return (
        <View style={GlobalStyle.container}>
            <SafeAreaView style={styles.titleContainer}>
                <Text style={styles.titleStyle}>Favorites</Text>
            </SafeAreaView>

            <ScrollView style={[styles.container, styles.favoritesListContainer]}>

                {
                    generateFavorites()
                }

            </ScrollView>

        </View>
    )
}

export default Favorites


const styles = StyleSheet.create({
    actionsContainer: {
        marginRight: 15,
        marginVertical: 20,
        width: 20,
        justifyContent: 'space-between'
    },
    keyStyle: {
        color: 'rgba(0, 0, 0, 0.5)',
        opacity: 0.87,
        fontSize: 9,
        fontWeight: '500'
    },
    keysContainer: {
        marginTop: 5,
        marginBottom: 5
    },
    pegNameStyle: {
        fontSize: 14,
        fontWeight: '500',
        opacity: 0.87
    },
    pegNameContianer: {
        flex: 1,
        marginVertical: 15,
        paddingLeft: 10
    },
    avatrStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 17
    },
    pegAvatrContainer: {
        width: 90,
        height: 90,
        borderRadius: 17,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5
    },
    favoritesItemContainer: {
        height: 100,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
    },
    favoritesListContainer: {
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        // paddingVertical: 20,
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: '500',
        color: Const.defaultTextWhiteColor,
        paddingLeft: 20,
        paddingBottom: 15
    },
    titleContainer: {
        height: 115,
        justifyContent: 'flex-end',
        backgroundColor: Const.defaultColor
    },
    container: {
        flex: 1,
        backgroundColor: '#ECEBEB'
    }
})