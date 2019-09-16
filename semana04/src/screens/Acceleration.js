import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight, Modal, ScrollView, TouchableOpacity } from 'react-native';

import AccelerationItem from '../components/AccelerationItem';

const accelerations = [{
  "slug": "reactnative-online-1",
  "name": "React Native",
  "is_disabled": false,
  "subscription_start_at": "2019-07-08T00:00:00-03:00",
  "subscription_finish_at": "2019-07-28T00:00:00-03:00",
  "start_at": "2019-08-17T00:00:00-03:00",
  "finish_at": "2019-11-03T00:00:00-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "7800FF",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-19T00:00:00-03:00",
  "start_at": "2019-08-19T00:00:00-03:00",
  "finish_at": "2019-10-23T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-20T00:00:00-03:00",
  "start_at": "2019-08-20T00:00:00-03:00",
  "finish_at": "2019-10-24T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-23T00:00:00-03:00",
  "start_at": "2019-09-23T00:00:00-03:00",
  "finish_at": "2019-11-27T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-24T00:00:00-03:00",
  "start_at": "2019-09-24T00:00:00-03:00",
  "finish_at": "2019-11-28T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "python-online-1",
  "name": "Python Women",
  "is_disabled": false,
  "subscription_start_at": "2019-07-22T00:00:00-03:00",
  "subscription_finish_at": "2019-08-11T23:59:59-03:00",
  "start_at": "2019-08-24T00:00:00-03:00",
  "finish_at": "2019-11-02T23:59:59-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "212133",
  "company_count": 1
}]

const profile = {
  "picture": "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm"
}

export default class Acceleration extends React.Component {

  static navigationOptions = {
    title: 'Acceleration',
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
    };
  }

  clickEventListener = (item) => {
    this.setState({ userSelected: item }, () => {
      this.setModalVisible(true);
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={{ uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png' }}
          />

          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Profile')}
            className='user-image-btn'
          >

            <Image
              source={{ uri: profile.picture }}
              style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 30 }}
            />
          </TouchableHighlight>
        </View>

        <View><Text>Acelerações</Text></View>

        <TouchableHighlight onPress={() => { this.setModalVisible(true); }}
          className='acceleration-item-btn'
        >
          <FlatList
            data={accelerations}
            keyExtractor={item => item.slug}
            renderItem={({ item, index }) => <TouchableOpacity onPress={() => { this.clickEventListener(item) }}><AccelerationItem item={item} /></TouchableOpacity>}
          />
        </TouchableHighlight>



        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          className='modal'
        >
          <View style={{ padding: 10 }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={{ height: 240, width: '100%' }}
                source={{ uri: this.state.userSelected.banner_url ? this.state.userSelected.banner_url : 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png' }}
              />
            </View>
            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
              <Text style={{ color: '#6600c3', fontSize: 18, marginTop: 15, marginBottom: 15 }}>{this.state.userSelected.name}</Text>
              <Text style={{ marginBottom: 15 }}> Local: {this.state.userSelected.location}</Text>
              <Text style={{ marginBottom: 30 }}> Inscrição + desafio ennviado até {moment(this.state.userSelected.subscription_finish_at).format('DD/MM/YYYY')}</Text>


              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                className='close-modal-btn'>
                <Text style={{
                  borderWidth: 1,
                  borderColor: '#6600c3', textAlign: 'center', padding: 10
                }}>FECHAR</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#7800ff',
    borderBottomWidth: 2,
    padding: 16,
    paddingTop: 55
  },
  headerImage: {
    height: 45,
    width: 250
  },
  title: {
    color: '#7800ff',
    fontSize: 30,
    padding: 16
  }
});
