import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import myposter from '../../assets/images/poster.png'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={myposter}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>FitXcel</Text>
      </ImageBackground>
    </View>
  )
}
export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})