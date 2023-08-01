import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PopupModal from './PopupModal/PopupModal'

export default function App() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.button}>
        <Text style={styles.text}>Show Modal</Text>
      </TouchableOpacity>
      <PopupModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <Text>Hi</Text>
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
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
