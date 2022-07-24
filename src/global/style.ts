import { StyleSheet } from 'react-native'
import Const from './const'

export const GlobalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Const.defaultColor,
    },
    borderContainer: {
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})