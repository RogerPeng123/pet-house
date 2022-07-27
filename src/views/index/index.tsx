import React, { useState } from 'react'
import {
    Image,
    ImageSourcePropType,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Categories from '../../components/Categories';
import PegList from '../../components/PegList';
import Const from '../../global/const'
import { GlobalStyle } from '../../global/style'

const dogIndexImgSource: ImageSourcePropType = require('../../assets/index-1.png');

const Index: React.FC = () => {

    const [search, setSearch] = useState<string>();

    return (
        <ScrollView>
            <SafeAreaView style={GlobalStyle.container}>
                <View style={[
                    styles.topContainer
                ]}>
                    <View style={[
                        styles.topLogoContainer
                    ]}>
                        <View style={styles.topTitleContainer}>
                            <Text style={[
                                styles.topTitleColor,
                                styles.topTitleStyle
                            ]}>
                                Adopt a
                            </Text>
                            <Text style={[styles.topTitleColor, styles.topLittleTieleStyle]}>
                                Friend
                            </Text>
                        </View>

                        <View style={[styles.topImgContainer]}>
                            <Image source={dogIndexImgSource} />
                        </View>
                    </View>

                    <View style={[
                        styles.searchContainer
                    ]}>
                        <Ionicons
                            style={styles.searchIconStyle}
                            name={'search-outline'}
                            size={20}
                            color={'#B7B7B7'}
                        />
                        <TextInput
                            style={[styles.searchInputStyle]}
                            onChangeText={(text: string) => {
                                setSearch(text);
                            }}
                            returnKeyType={'search'}
                            maxLength={30}
                            clearButtonMode={'never'}
                            value={search}
                            autoCapitalize='none'
                            placeholder={'Search your favourite pet'}
                        />
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.categoriesContainer}>
                        <Categories />
                    </View>
                    <View style={styles.categoriesTitleContainer}>
                        <Text style={styles.categoriesTitleStyle}>
                            Waiting for you
                        </Text>
                    </View>
                    <View style={[styles.contentScrollViewContainer]}>
                        <PegList />
                    </View>
                </View>

            </SafeAreaView>
        </ScrollView>
    )
}

export default Index

const styles = StyleSheet.create({
    contentScrollViewContainer: {
    },
    categoriesTitleStyle: {
        height: 25,
        fontSize: 20,
        fontWeight: '700',
        color: '#000000'
    },
    categoriesTitleContainer: {
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 15,
    },
    categoriesContainer: {
        marginHorizontal: 10,
        height: 110,
    },
    topImgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topLittleTieleStyle: {
        fontSize: 28,
        fontWeight: '300'
    },
    topTitleStyle: {
        fontSize: 28,
        fontWeight: '700'
    },
    topTitleColor: {
        color: Const.defaultTextWhiteColor
    },
    topTitleContainer: {
        width: 150,
        paddingTop: 20,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    contentContainer: {
        flex: 1,
        marginTop: 10,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: Const.sceneContainerColor,
    },
    searchInputStyle: {
        height: 50,
        flex: 1
    },
    searchIconStyle: {
        lineHeight: 50,
        marginHorizontal: 10
    },
    searchContainer: {
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        height: 50
    },
    topLogoContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    topContainer: {
        height: 210,
    }
})