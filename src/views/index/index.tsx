import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { GlobalStyle } from '../../global/style'

const Index: React.FC = () => {

    const generText = () => {
        let itemAry = [];
        for (var i = 0; i < 100; i++) {
            itemAry.push(
                <View key={i}>
                    <Text key={`${i}-text`}>{`列表数据-${i}`}</Text>
                </View>
            );
        }

        return itemAry;
    }

    return (
        <SafeAreaView style={GlobalStyle.container}>
            <View style={[
                styles.topContainer
            ]}>
                <Text>标题内容和搜索内容区域</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.categoriesContainer}>
                    <Text>选择区</Text>
                </View>
                <ScrollView style={[
                    GlobalStyle.borderContainer,
                    styles.contentScrollViewContainer
                ]}>
                    {
                        generText()
                    }

                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

export default Index

const styles = StyleSheet.create({
    contentScrollViewContainer: {
    },
    categoriesContainer: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentContainer: {
        flex: 1,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#ECEBEB'
    },
    topContainer: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
})