import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  TextInput,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RoundedImageText from '../components/RoundedImageText';
import RatingList from 'react-native-rating-list';

// Constant
import newReleases from '../constants/newReleases';
import suggestions from '../constants/suggestions';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.body}>
        <ScrollView>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#FFD700', '#FFC303', '#FEB202']}
            style={styles.topBarStyle}>
            <View style={styles.topBarContent}>
              <Image
                source={require('../images/1.png')}
                style={styles.menuStyle}
              />
              <Image
                source={require('../images/g.png')}
                style={styles.profileIcon}
              />
            </View>
          </LinearGradient>

          <View style={styles.boxShadow}>
            <View style={styles.searchBox}>
              <Image
                source={require('../images/3.png')}
                style={styles.searchBoxIcon}
              />
              <TextInput
                placeholder="Search movie title..."
                style={styles.searchBoxTextInput}
              />
            </View>
          </View>

          <View style={styles.headerPosition}>
            <View style={{width: '70%'}}>
              <Text style={styles.headerText}>Cinema around your area</Text>
            </View>
          </View>

          <View style={{height: 140}}>
            <RoundedImageText />
          </View>

          <RatingList header="New releases" items={newReleases} />

          <RatingList
            header="You might want to see this"
            items={suggestions}
            defaultUrl="https://watchnow.com/movies/1"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  topBarStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 40,
  },
  topBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: '100%',
  },
  menuStyle: {
    height: 10,
    width: 25,
    marginTop: 50,
    marginLeft: 10,
  },
  profileIcon: {
    height: 60,
    width: 60,
    marginTop: 30,
    marginRight: 10,
  },
  boxShadow: {
    left: 0,
    right: 0,
    height: 90,
    marginTop: -45,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  searchBox: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBoxIcon: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
  searchBoxTextInput: {
    fontSize: 16,
    width: 260,
    height: 30,
    color: '#494949',
  },
  headerPosition: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#585a61',
  },
});
