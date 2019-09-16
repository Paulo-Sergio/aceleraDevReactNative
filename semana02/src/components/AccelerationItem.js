import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';

export default function AccelerationItem({ item }) {
  const NO_IMAGE = 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          {
            item.banner_url ? <Image source={{ uri: item.banner_url }} style={styles.image} /> : <Image source={{ uri: NO_IMAGE }} style={styles.image} />
          }
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.boxContentTitle}>{item.name}</Text>
          <Text style={styles.boxContentLocation}>{item.location}</Text>
          <Text style={styles.boxContentDate}>{moment(item.subscription_finish_at).format('DD/MM/YYYY')}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  box: {
    flexDirection: 'row',
    borderColor: '#C0C0C0',
    borderWidth: 0.8,
  },
  image: {
    height: 80,
    width: 80
  },
  boxContent: {
    paddingLeft: 10,
    justifyContent: "space-between"
  },
  boxContentTitle: {
    fontSize: 20,
  },
  boxContentLocation: {
    fontSize: 15,
    color: '#7800ff'
  }
})