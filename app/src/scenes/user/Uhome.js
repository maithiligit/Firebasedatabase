import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet, FlatList} from 'react-native';
//local import
import horizontalScale from '../../../res/Scale';
import {RootView, SimpleButton, CircleImage} from '../../components/index';
import R from '../../R';
import database from '@react-native-firebase/database';
export const Owner = (props) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [veg, setVeg] = useState(0);
  const [chapati, setChapati] = useState(0);
  const [dal, setDal] = useState(0);
  const [rice, setRice] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const myData = database()
      .ref('Data')
      .on('value', (snapshot) => {
        console.log('User data: ', snapshot.val());
        let userdata = snapshot.val();
        //console.log('userdata', userdata.veg);
        setData(userdata);
      });
  }, []);

  const cancelOrder = () => {
    database().ref('Data').remove();
    alert('Order Successfully Cancelled ');

    setData([]), setFlag(true);
  };
  return (
    <RootView customStyle={styles.root}>
      {data == null ? (
        <View style={{flex: 1}}>
          <Image
            source={R.images.noOrder}
            resizeMode={'center'}
            style={{height: '100%', width: horizontalScale(400)}}
          />
        </View>
      ) : (
        <View
          style={{
            width: '90%',
            borderWidth: 1,
            padding: horizontalScale(5),
            marginTop: horizontalScale(25),
          }}>
          <View style={{flexDirection: 'row', marginTop: horizontalScale(10)}}>
            <Text style={{fontSize: horizontalScale(18), fontWeight: 'bold'}}>
              Name :-
            </Text>
            <Text
              style={{
                fontSize: horizontalScale(18),
                paddingLeft: horizontalScale(5),
              }}>
              {data.username}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: horizontalScale(15)}}>
            <Text style={{fontSize: horizontalScale(18), fontWeight: 'bold'}}>
              Location :-
            </Text>
            <Text
              style={{
                fontSize: horizontalScale(18),
                paddingLeft: horizontalScale(5),
                width: '70%',
              }}>
              {data.location}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: horizontalScale(15)}}>
            <Text style={{fontSize: horizontalScale(18), fontWeight: 'bold'}}>
              Menu :-
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={{
                    fontSize: horizontalScale(18),
                    padding: horizontalScale(5),
                    borderWidth: 1,
                    marginLeft: horizontalScale(10),
                  }}>
                  Veg :{data.veg}
                </Text>
                <Text
                  style={{
                    fontSize: horizontalScale(18),
                    padding: horizontalScale(5),
                    borderWidth: 1,
                    marginTop: horizontalScale(10),
                    marginLeft: horizontalScale(10),
                  }}>
                  Chapati : {data.chapati}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: horizontalScale(18),
                    padding: horizontalScale(5),
                    borderWidth: 1,
                    marginLeft: horizontalScale(10),
                  }}>
                  Dal : {data.dal}
                </Text>
                <Text
                  style={{
                    fontSize: horizontalScale(18),
                    padding: horizontalScale(5),
                    borderWidth: 1,
                    marginTop: horizontalScale(10),
                    marginLeft: horizontalScale(10),
                  }}>
                  Rice :{data.rice}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.view}>
            {/* <SimpleButton
              title="Decline"
              customTxtStyle={{color: '#fff', fontSize: horizontalScale(18)}}
              customStyle={{
                backgroundColor: '#808080',
                width: '45%',
              }}
              onPress={() => {
                cancelOrder();
              }}
            /> */}
            <SimpleButton
              title="Accept"
              customTxtStyle={{color: '#fff', fontSize: horizontalScale(18)}}
              customStyle={{
                backgroundColor: 'green',
                width: '45%',
              }}
              onPress={() => alert('Order Accepted')}
            />
          </View>
        </View>
      )}
    </RootView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: R.colors.white,
    alignItems: 'center',
  },
  view: {
    marginTop: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: horizontalScale(20),
  },
  customTxtStyle: {
    color: '#fff',
    fontSize: horizontalScale(18),
  },
});
