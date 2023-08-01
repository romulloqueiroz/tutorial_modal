import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PopupModal from './PopupModal/PopupModal'

export default function App() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Show Modal</Text>
      </TouchableOpacity>
      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
      </PopupModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313642',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {
    backgroundColor: '#67C6FF',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#3F4553',
    borderColor: '#969BA7',
    borderWidth: 2,
    padding: 16,
    borderRadius: 4,
    maxWidth: 300,
  },
  cardText: {
    color: '#fff',
  },
});
