import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function AccelerationItem({ item }) {
  return (
    <View>

      <View className="contact-content" style={[styles.profileSocialMedia, styles.profileSocialMediaAnimated]}>
        <View style={styles.profileSocialMediaPadding}>
          <Text className="contact-label" style={styles.textWhite} >Linkedin:</Text>
          <Text className="contact-value" style={styles.textWhite}>{item.linkedin}</Text>
        </View>
        <View style={styles.profileSocialMediaPadding}>
          <Text className="contact-label" style={styles.textWhite}>Github:</Text>
          <Text className="contact-value" style={styles.textWhite}>{item.github}</Text>
        </View>
      </View>

      <View className='contact-content' style={styles.profileData}>
        <View style={styles.profileDataPadding}>
          <Text className="contact-label" style={styles.textWhite}>E-mail:</Text>
          <Text className="contact-value" style={styles.textWhite}>{item.email}</Text>
        </View>
        <View style={styles.profileDataPadding}>
          <Text className="contact-label" style={styles.textWhite}>Celular:</Text>
          <Text className="contact-value" style={styles.textWhite}>{item.phone}</Text>
        </View>
        <View style={styles.profileDataPadding}>
          <Text className="contact-label" style={styles.textWhite}>Data de Nascimento:</Text>
          <Text className="contact-value" style={styles.textWhite}>{moment(item.birthday).format('DD/MM/YYYY')}</Text>
        </View>
        <View style={styles.profileDataPadding}>
          <Text className="contact-label" style={styles.textWhite}>Sexo:</Text>
          <Text className="contact-value" style={styles.textWhite}>{item.gender == 1 ? 'Masculino' : 'Feminino'}</Text>
        </View>
        <View style={styles.profileDataPadding}>
          <Text className="contact-label" style={styles.textWhite}>Idiomas:</Text>
          <View style={{ flexDirection: "row" }}>
            <Text className="contact-language" style={styles.profileDataLanguage}>{item.language[0]}</Text>
            <Text className="contact-language" style={styles.profileDataLanguage}>{item.language[1]}</Text>
            <Text className="contact-language" style={styles.profileDataLanguage}>{item.language[2]}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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