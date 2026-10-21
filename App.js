import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Name from './components/name';
import CtnButton from './components/buttonCtn';
import CtmButton from './components/buttonCtm';
import Count from './components/count';
import SumButton from './components/buttonSum';
import RestButton from './components/buttonRest';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0)

  const suma = () => setCount(count + 1)
  const resta = () => setCount(count - 1)


  const [name, setName] = useState("Emmanuel")
  const nameChange = () => setName(name === 'Emmanuel' ? 'Andres' : 'Emmanuel')

  const [dark, setDark] = useState(false)
  const setTheme = () => {setDark(previousDark => !previousDark)}

  return (
    <View style={[styles.container, {backgroundColor: dark ? 'black' : 'white'}]}>
        <View style={styles.nameContainer}>
          <Name nombre={name}/>
        </View>

        <View style={[styles.ctsContainer, {backgroundColor : dark ? 'black' : 'white'}]}>
          <CtnButton change={nameChange} />
          <CtmButton theme={setTheme} />
        </View>

        <View style={styles.countContainer}>
          <Count contador = {count} dark={dark}/>
        </View>

        <View style={styles.bottomContainer}>
          <SumButton process={suma}/>
          <RestButton process={resta}/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container : {
      flex: 1,

    },

    ctsContainer : {
      justifyContent : 'space-between',
      flexDirection : 'row',
    },

    countContainer : {
      flex: 1,
      justifyContent : 'center',
      alignItems : 'center'
    },

    bottomContainer : {
      justifyContent : 'space-between',
      flexDirection : 'row',
      backgroundColor : 'black'
    }
});
