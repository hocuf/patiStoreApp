import React from 'react';
import {SafeAreaView, View, StyleSheet, Button, Text, times} from 'react-native';
import Blinks from './Blinks';

const data = [
  {id: 0, name: 'Barida Kafe', isFavorite: true},
  {id: 1, name: 'Iyas Kafe', isFavorite: true},
  {id: 2, name: 'Merkez Park Kafe', isFavorite: false},
  {id: 3, name: 'Sturbucks', isFavorite: true},
  {id: 4, name: 'Kahve Dunyasi', isFavorite: false},
  {id: 5, name: 'Cane Kafeteryasi', isFavorite: true},
  {id: 6, name: 'GSF Kafesi', isFavorite: false},
]



function App() {
  const [number, setNumber] = React.useState(0)
  const update = () => {setNumber(number + 1)}
  const minuse = () => {setNumber(number - 1)}
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.buttonText}>Number: {number}</Text>
      <View style={styles.for_View}>
        <Button style={styles.button_update} title="+"  onPress={update}/>
        <Blinks style={styles.button_update} text = "Click" />
      </View>
      <View style={styles.for_View}>
        <Button style={styles.button_minuse} title="-"  onPress={minuse}/>
        <Blinks style={styles.button_minuse} text = "Click" />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  for_View: {
    flexDirection: 'row-reverse',
    margin: 5,
  },
  button_update: {
    borderRadius: 5,
    fontSize: 42,
    margin: 20,
    fontWeight: 'bold',
  },
  button_minuse: {
    borderRadius: 5,
    fontSize: 33,
    margin: 20,
    fontWeight: 'bold',
  },
  buttonText : {
    marginBottom: 65,
    marginTop: 25,
    fontSize: 33,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;