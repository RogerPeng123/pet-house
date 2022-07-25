import React from 'react'
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Const from '../../global/const'
import { GlobalStyle } from '../../global/style'
import * as RootNavigation from '../../global/RootNavigation';

const AvatarImageSource: ImageSourcePropType = require('../../assets/user-cover.png');

const Chats: React.FC = () => {

  const goAdoptionMessage = (id: number) => {
    RootNavigation.navigate('AdoptionMessage')
  }

  const generatrMessageList = () => {
    let db: React.ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
      db.push(
        <TouchableHighlight
          key={i}
          onPress={() => goAdoptionMessage(i)}
          underlayColor={Const.sceneContainerColor}
        >
          <View style={[styles.messageContainer]} >
            <View style={[styles.messageAvatarContainer]}>
              <Image
                source={AvatarImageSource}
                style={styles.messageAvatarContainer}
                resizeMode={'stretch'}
              />
            </View>
            <View style={styles.userContainer}>
              <View style={styles.userNameContainer}>
                <Text style={styles.userNameStyle}>Ryder Pump</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.contentStyle}>Hi, I want to adopt Daisy</Text>
              </View>
            </View>
            <View style={[styles.timeContainer]}>
              <View style={[styles.messageNumContainer]}>
                <Text style={[styles.messageNumStyle]}>
                  100
                </Text>
              </View>
              <View style={[styles.messageTimeContainer]}>
                <Text style={styles.messageTimeStyle}>18:01</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      )
    }

    return db;
  }

  return (
    <View style={GlobalStyle.container}>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Chats</Text>
      </SafeAreaView>

      <View style={[styles.container, styles.messageListContainer]}>
        {
          generatrMessageList()
        }

      </View>

    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
  contentStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.58)'
  },
  contentContainer: {
    marginTop: 2
  },
  userNameStyle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#000000'
  },
  userNameContainer: {},
  messageTimeStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7A8A50'
  },
  messageTimeContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 5
  },
  messageNumStyle: {
    textAlign: 'center',
    color: Const.defaultTextWhiteColor
  },
  messageNumContainer: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 20,
    height: 20,
    backgroundColor: Const.defaultColor,
    padding: 3
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  messageAvatar: {
    width: 60,
    height: 60,
  },
  messageAvatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  messageContainer: {
    marginTop: 10,
    paddingLeft: 23,
    display: 'flex',
    flexDirection: 'row'
  },
  messageListContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 20,
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