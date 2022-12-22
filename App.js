import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';
import ArgList from './components/ArgList';
import CroList from './components/CroList';
import FraList from './components/FraList';


export default function App() {
  const [showArgListOptions, setShowArgListOptions] = useState(false);
  const [showCroListOptions, setShowCroListOptions] = useState(false);
  const [showFraListOptions, setShowFraListOptions] = useState(false);

  return (
    
     <View style={styles.container}>
      <Button theme="primary" label="Fotos Argentina" onPress={() => setShowArgListOptions(true)}/>
      {showArgListOptions ? (
        <ArgList/>)
      : (
      <View style={styles.footerContainer}>
      </View>
      )}
      
      <Button theme="primary" label="Fotos Croacia " onPress={() => setShowCroListOptions(true)}/>
      {showCroListOptions ? (
        <CroList/>)
      : (
        <View style={styles.footerContainer}>
      </View>
      )}
      
      <Button theme="primary" label="Fotos Francia" onPress={() => setShowFraListOptions(true)}/>
      {showFraListOptions ? (
        <FraList/>)
      : (
      <View style={styles.footerContainer}>
      </View>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F4046',
    alignItems: 'center',
    justifyContent: 'center',

  },
});