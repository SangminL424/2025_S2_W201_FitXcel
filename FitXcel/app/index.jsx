import { View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native'

import { Link } from 'expo-router'
import myposter from '../assets/images/poster.png'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={myposter}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>FitXcel</Text>
        
        <Link href="/explore" style={{ marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
           <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link>  
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
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 20,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
  },
  button: {
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
  },
})