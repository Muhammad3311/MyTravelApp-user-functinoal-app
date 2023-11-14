import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapStyle from '../../consts/MapStyle';

const ExploreWorld = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        customMapStyle={MapStyle}
        initialRegion={{
          latitude: 33.996050632148425,
          longitude: 71.50086656675809,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <Marker
          coordinate={{
            latitude: 33.996050632148425,
            longitude: 71.50086656675809,
          }}
          // image={require('../../assets/location1.jpg')}
          pinColor="blue"
        />
      </MapView>
    </View>
  );
};

export default ExploreWorld;
