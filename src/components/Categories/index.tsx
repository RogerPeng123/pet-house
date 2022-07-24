import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageSourcePropType,
    Image,
    TouchableHighlight
} from 'react-native'
import Const from '../../global/const'

const dogSource: ImageSourcePropType = require('../../assets/index-categories-1.png');

const Categories: React.FC = () => {

    const [index, setIndex] = useState<number>(0);


    const handleOnClick = (key: number) => {
        setIndex(key);
    }

    const categoriesItem = () => {

        let jsx = [];

        for (let i = 0; i < 15; i++) {

            jsx.push(

                <View
                    key={i}
                    style={[
                        styles.categoriesItem
                    ]}
                >
                    <TouchableHighlight
                        underlayColor={Const.sceneContainerColor}
                        onPress={() => handleOnClick(i)}
                    >
                        <View
                            style={[
                                styles.categoriesItemImgContainer,
                                i === index ? {
                                    backgroundColor: Const.categoriesTabBarActiveTintColor
                                } : {
                                    backgroundColor: Const.categoriesTabBarInactiveTintColor
                                }
                            ]}
                        >
                            <Image
                                source={dogSource}
                                style={
                                    i === index ? {
                                        tintColor: '#FFFFFF'
                                    } : {
                                        tintColor: '#9C9A9A'
                                    }} />
                        </View>

                    </TouchableHighlight>
                    <View style={styles.categoriesItemTitleContainer}>
                        <Text style={[
                            styles.categoriesItemTitleStyle,
                            i === index ? {
                                color: Const.categoriesTabBarTitleActiveTintColor
                            } : {
                                color: Const.categoriesTabBarTitleInactiveTintColor
                            }
                        ]}>
                            Dogs
                        </Text>
                    </View>
                </View>
            )

        }

        return jsx;

    }
    return (
        <ScrollView
            horizontal={true} // 横向
            style={[
                styles.categoriesScrollContainer
            ]}>

            {
                categoriesItem()
            }

        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({
    categoriesItemTitleStyle: {
        fontSize: 12,
        fontWeight: '500',
    },
    categoriesItemTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    categoriesItemImgContainer: {
        width: 69,
        height: 60,
        borderRadius: 22,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesItem: {
        width: 69,
        justifyContent: 'flex-end',
        marginRight: 15,
        paddingBottom: 5
    },
    categoriesScrollContainer: {
        flex: 1,
    }
})