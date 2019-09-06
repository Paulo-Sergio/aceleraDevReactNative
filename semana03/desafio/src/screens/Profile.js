import React from 'react';
import { View, Image, Text, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import moment from 'moment';

const profile = {
  "picture": "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm",
  "email": "rafaelfuzifaru@gmail.com",
  "first_name": "Rafael",
  "last_name": "Fuzifaru Cianci",
  "phone": "(48) 99120-3585",
  "gender": 1,
  "birthday": "1993-04-27T00:00:00-03:00",
  "linkedin": "https://www.linkedin.com/in/rafaelcianci",
  "github": "http://github.com/rafacianci",
  "address": {
    "Street": "Av. Bernardo Vieira de Melo",
    "ZipCode": "54430-250",
    "Number": "4465",
    "ComplementaryAddress": "704"
  },
  "language": ["Português - PT", "Inglês - EN", "Japonês - JA"],
  "name": "Rafael Fuzifaru Cianci"
}

const URL_IMAGE = 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png'

export default class Profile extends React.PureComponent {

  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
    this.state = {
      IndicatorShow: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ IndicatorShow: false })
    }, 599)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(this.animatedValue,
      {
        toValue: 1,
        duration: 5000,
      }).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: URL_IMAGE }} className="header-image" style={styles.imageLogo} />
        </View>

        <ActivityIndicator size="large" color="#0000ff" />

        <View style={styles.profileName}>
          <Image source={{ uri: profile.picture }} className="profile-image" style={styles.imagePhoto} />
          <Text style={styles.profileNameText} className="profile-name">{profile.name}</Text>
        </View>

        <Animated.View className="contact-content" style={[styles.profileSocialMedia, styles.profileSocialMediaAnimated]}>
          <View style={styles.profileSocialMediaPadding}>
            <Text className="contact-label" style={styles.textWhite} >Linkedin:</Text>
            <Text className="contact-value" style={styles.textWhite}>{profile.linkedin}</Text>
          </View>
          <View style={styles.profileSocialMediaPadding}>
            <Text className="contact-label" style={styles.textWhite}>Github:</Text>
            <Text className="contact-value" style={styles.textWhite}>{profile.github}</Text>
          </View>
        </Animated.View>

        <Animated.View className='contact-content' style={styles.profileData}>
          <View style={styles.profileDataPadding}>
            <Text className="contact-label" style={styles.textWhite}>E-mail:</Text>
            <Text className="contact-value" style={styles.textWhite}>{profile.email}</Text>
          </View>
          <View style={styles.profileDataPadding}>
            <Text className="contact-label" style={styles.textWhite}>Celular:</Text>
            <Text className="contact-value" style={styles.textWhite}>{profile.phone}</Text>
          </View>
          <View style={styles.profileDataPadding}>
            <Text className="contact-label" style={styles.textWhite}>Data de Nascimento:</Text>
            <Text className="contact-value" style={styles.textWhite}>{moment(profile.birthday).format('DD/MM/YYYY')}</Text>
          </View>
          <View style={styles.profileDataPadding}>
            <Text className="contact-label" style={styles.textWhite}>Sexo:</Text>
            <Text className="contact-value" style={styles.textWhite}>{profile.gender == 1 ? 'Masculino' : 'Feminino'}</Text>
          </View>
          <View style={styles.profileDataPadding}>
            <Text className="contact-label" style={styles.textWhite}>Idiomas:</Text>
            <View style={{ flexDirection: "row" }}>
              <Text className="contact-language" style={styles.profileDataLanguage}>{profile.language[0]}</Text>
              <Text className="contact-language" style={styles.profileDataLanguage}>{profile.language[1]}</Text>
              <Text className="contact-language" style={styles.profileDataLanguage}>{profile.language[2]}</Text>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    borderBottomColor: '#7800ff',
    borderBottomWidth: 2,
  },
  imageLogo: {
    height: 100,
    width: 300,
  },

  profileName: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  imagePhoto: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  profileNameText: {
    color: '#7800ff',
    fontSize: 18,
    marginLeft: 15
  },

  profileSocialMedia: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: '#000',
    margin: 10,
    opacity: this.animatedValue,
  },
  profileSocialMediaPadding: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  profileData: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: '#000',
    margin: 10,
    opacity: this.animatedValue,
  },
  profileDataPadding: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileDataLanguage: {
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 6.5,
    marginRight: 15,
    fontSize: 15,
    padding: 4,
  },

  /* GERAL */
  textWhite: {
    color: '#FFF',
  },
})