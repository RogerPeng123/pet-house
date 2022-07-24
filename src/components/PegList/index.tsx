import React, { useEffect, useState } from 'react';
import {
    Image,
    ImageSourcePropType,
    LayoutChangeEvent,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { PegListProps } from '../../types/peg';

const IndexItemImg: ImageSourcePropType = require('../../assets/index-item-1.png');

const PegList: React.FC<PegListProps> = (props: PegListProps) => {

    const [dataNum, setDataNum] = useState<number[]>([0, 1, 2, 3, 4]);

    const [containerWidth, setContainerWidth] = useState<number>(0)
    const [containerHeight, setContainerHeight] = useState<number>(0)

    const [translateXWidth, setTranslateXWidth] = useState<number>(0)

    useEffect(() => {
        console.log('通过onLayout得到的宽度：' + containerWidth);
        console.log('通过onLayout得到的高度：' + containerHeight);
        setTranslateXWidth((containerWidth * 0.5 * 0.5));

    }, [containerWidth, containerHeight])

    const _onLayout = (event: LayoutChangeEvent) => {
        //使用大括号是为了限制let结构赋值得到的变量的作用域，因为接来下还要结构解构赋值一次
        {
            //获取根View的宽高，以及左上角的坐标值
            let { x, y, width, height } = event.nativeEvent.layout;

            setContainerHeight(height)
            setContainerWidth(width)
        }
    }

    return (
        <View
            style={styles.container}
            onLayout={(event: LayoutChangeEvent) => _onLayout(event)}
        >
            {
                dataNum.map((item: number, index: number) => {
                    return (
                        <View
                            key={index}
                            style={[
                                styles.itemContainer,
                                index === (dataNum.length - 1) ? {
                                    transform: [{ translateX: -translateXWidth }]
                                } : {}
                            ]}>
                            <Image source={IndexItemImg} style={styles.itemImageStyle} />
                            <View style={styles.petNameAndSexContainer}>
                                <Text style={styles.petNameStyle}>Hobbs</Text>
                                <Ionicons
                                    name={item == 2 ? 'ios-male-sharp' : 'ios-male-female'}
                                    size={15}
                                    color={item == 2 ? '#54B0DC' : '#F78B8B'}
                                />
                            </View>

                            <View style={styles.bottemContainer}>
                                <View style={styles.petKeysContainer}>
                                    <Text style={styles.petKeyStyle}>PegList1</Text>
                                    <Text style={styles.petKeyStyle}>PegList1</Text>

                                    <Text style={[styles.petKeyStyle, styles.timeStyle]}>1 years</Text>
                                </View>

                                <View style={styles.likeContainer}>
                                    <Ionicons
                                        name={item == 2 ? 'ios-heart-outline' : 'ios-heart-sharp'}
                                        size={20}
                                        color={item == 2 ? '#ECEBEB' : '#FF6969'}
                                    />
                                </View>

                            </View>

                        </View>
                    )
                })
            }

        </View>
    )
}

export default PegList

const styles = StyleSheet.create({
    likeImgStyle: {
        width: '100%',
    },
    likeContainer: {
        width: 20,
        justifyContent: 'center'
    },
    timeStyle: {
        marginTop: 5
    },
    petKeyStyle: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 12,
        fontWeight: '500',
    },
    petKeysContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
        flex: 1
    },
    bottemContainer: {
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    petSexStyle: {
        width: 12,
        height: 12
    },
    petNameStyle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000000',
        height: 20
    },
    petNameAndSexContainer: {
        marginTop: 10,
        width: 162,
        height: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    itemImageStyle: {
        width: 152,
        height: 152,
        borderRadius: 28,
    },
    itemContainer: {
        width: 162,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: '2%',
        marginVertical: '2%',
        borderRadius: 28,
        padding: 5
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})