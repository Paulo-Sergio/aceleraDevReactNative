import React from "react";
import moment from "moment";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Animated,
  AsyncStorage
} from "react-native";

const logo = {
  uri:
    "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"
};

export default class Profile extends React.PureComponent {
  fadeAnimation = new Animated.Value(0);

  state = {
    loading: true,
    profile: {}
  };

  async componentWillMount() {
    const { navigation } = this.props;

    const user = await AsyncStorage.getItem("user");
    const token = JSON.parse(user).token;

    axios
      .get("https://api.codenation.dev/v1/me/profile", {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        this.setState({ profile: response.data, loading: false });
      })
      .catch(err => {
        navigation.navigate("Login");
      });
  }

  componentDidMount() {
    this.finishLoading();
  }

  finishLoading = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      Animated.timing(this.fadeAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true
      }).start();

      this.setState({ loading: false });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { profile, loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            className="header-image"
            style={styles.headerImage}
            source={logo}
          />
        </View>
        {loading && (
          <View style={styles.loadingContent}>
            <ActivityIndicator size="large" color="#7800ff" />
          </View>
        )}
        {!loading && (
          <ScrollView>
            <View style={styles.profileTitle}>
              <Image
                className="profile-image"
                style={styles.profileImage}
                source={{ uri: profile.picture }}
              />
              <Text className="profile-name" style={styles.profileName}>
                {profile.name}
              </Text>
            </View>
            <Animated.View
              className="contact-content"
              style={[styles.userContent, { opacity: this.fadeAnimation }]}
            >
              <Text className="contact-label" style={styles.contentLabel}>
                Linkedin:
              </Text>
              <Text
                className="contact-value"
                style={{ ...styles.contentText, ...styles.mBottom }}
              >
                {profile.linkedin}
              </Text>

              <Text className="contact-label" style={styles.contentLabel}>
                Github:
              </Text>
              <Text className="contact-value" style={styles.contentText}>
                {profile.github}
              </Text>
            </Animated.View>
            <Animated.View
              className="contact-content"
              style={[styles.userContent, { opacity: this.fadeAnimation }]}
            >
              <Text className="contact-label" style={styles.contentLabel}>
                E-mail:
              </Text>
              <Text
                className="contact-value"
                style={{ ...styles.contentText, ...styles.mBottom }}
              >
                {profile.email}
              </Text>

              <Text className="contact-label" style={styles.contentLabel}>
                Celular:
              </Text>
              <Text
                className="contact-value"
                style={{ ...styles.contentText, ...styles.mBottom }}
              >
                {profile.phone}
              </Text>

              <Text className="contact-label" style={styles.contentLabel}>
                Data de Nascimento:
              </Text>
              <Text
                className="contact-value"
                style={{ ...styles.contentText, ...styles.mBottom }}
              >
                {moment(profile.birthday).format("DD/MM/YYYY")}
              </Text>

              <Text className="contact-label" style={styles.contentLabel}>
                Sexo:
              </Text>
              <Text
                className="contact-value"
                style={{ ...styles.contentText, ...styles.mBottom }}
              >
                {profile.gender === 1 ? "Masculino" : "Feminino"}
              </Text>

              <Text className="contact-label" style={styles.contentLabel}>
                Idiomas:
              </Text>
              <View style={styles.languageContent}>
                {profile.language.map(language => (
                  <View key={language} style={styles.language}>
                    <Text
                      className="contact-language"
                      style={styles.languageText}
                    >
                      {language}
                    </Text>
                  </View>
                ))}
              </View>
            </Animated.View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingContent: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#7800ff",
    borderBottomWidth: 2,
    padding: 16,
    paddingTop: 55
  },
  headerImage: {
    height: 45,
    width: 250
  },
  title: {
    color: "#7800ff",
    fontSize: 30,
    padding: 16
  },
  profileTitle: {
    alignItems: "center",
    flexDirection: "row",
    padding: 16
  },
  profileImage: {
    borderRadius: 22,
    height: 45,
    width: 45
  },
  profileName: {
    color: "#7800ff",
    fontSize: 20,
    paddingLeft: 16
  },
  userContent: {
    backgroundColor: "#000",
    borderRadius: 2,
    margin: 16,
    padding: 16,
    marginTop: 0
  },
  contentLabel: {
    color: "#FFFFFF",
    fontSize: 11
  },
  contentText: {
    color: "#FFFFFF",
    fontSize: 14
  },
  mBottom: {
    marginBottom: 16
  },
  languageContent: {
    alignItems: "center",
    flexDirection: "row"
  },
  language: {
    backgroundColor: "#666",
    borderRadius: 50,
    marginRight: 16,
    marginTop: 8
  },
  languageText: {
    color: "#FFFFFF",
    fontSize: 14,
    padding: 5,
    paddingHorizontal: 10
  }
});