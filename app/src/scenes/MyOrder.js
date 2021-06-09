import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet, FlatList} from 'react-native';
//local import
import horizontalScale from '../../res/Scale';
import {RootView, SimpleButton, CircleImage} from '../components/index';
import R from '../R';
import database from '@react-native-firebase/database';

export const MyOrder = (props) => {
  const [data, setData] = useState('');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const myData = database()
      .ref('Data')
      .on('value', (snapshot) => {
        console.log('User data: ', snapshot.val());
        let userdata = snapshot.val();
        console.log('userdata', userdata.veg);

        if (userdata == null) {
          setFlag(true);
        } else {
          setFlag(false);
          setData(userdata);
        }
      });
  }, []);

  const cancelOrder = () => {
    database().ref('Data').remove();
    alert('Order Successfully Cancelled ');
  };
  return (
    <RootView customStyle={styles.root}>
      {/* {flag == true ? (
        <View>
          <CircleImage
            source={R.images.man}
            img={{height: horizontalScale(120), width: horizontalScale(135)}}
            style={{
              marginTop: horizontalScale(50),
              alignSelf: 'center',
              backgroundColor: '#fff',
            }}
          />
          <Text
            style={{
              color: R.colors.maroon,
              fontSize: horizontalScale(25),
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: horizontalScale(40),
            }}>
            You haven't placed any order
          </Text>
        </View>
      ) : ( */}
      <View style={styles.mainView}>
        <View style={styles.childView}>
          <Text style={styles.title}>Name :-</Text>
          <Text style={styles.text}>{data.username}</Text>
        </View>

        <View style={styles.childView}>
          <Text style={styles.title}>Location :-</Text>
          <Text style={styles.text}>{data.location}</Text>
        </View>

        <View style={styles.menuView}>
          <Text style={styles.title}>Menu :-</Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.textView}>Veg :{data.veg}</Text>
              <Text style={[styles.textView, {marginTop: 5}]}>
                Chapati : {data.chapati}
              </Text>
            </View>
            <View>
              <Text style={styles.textView}>Dal : {data.dal}</Text>
              <Text style={[styles.textView, {marginTop: 5}]}>
                Rice :{data.rice}
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.view}>
          <SimpleButton
            title="Decline"
            customTxtStyle={{color: '#fff', fontSize: horizontalScale(18)}}
            customStyle={{
              backgroundColor: '#808080',
              width: '45%',
            }}
            onPress={cancelOrder}
          />
        </View> */}
      </View>
      {/* )} */}
    </RootView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255,221,250,0.79)',
    alignItems: 'center',
  },
  view: {
    marginTop: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: horizontalScale(20),
  },
  title: {
    fontSize: horizontalScale(18),
    fontWeight: 'bold',
  },
  textView: {
    fontSize: horizontalScale(18),
    padding: horizontalScale(5),
    borderWidth: 1,
    marginLeft: horizontalScale(10),
  },
  text: {
    fontSize: horizontalScale(18),
    paddingLeft: horizontalScale(5),
    width: '70%',
  },
  customTxtStyle: {
    color: '#fff',
    fontSize: horizontalScale(18),
  },
  mainView: {
    width: '90%',
    borderWidth: 1,
    padding: horizontalScale(5),
    marginTop: horizontalScale(25),
  },
  childView: {
    flexDirection: 'row',
    marginTop: horizontalScale(10),
  },
  menuView: {
    flexDirection: 'row',
    marginTop: horizontalScale(15),
  },
});
