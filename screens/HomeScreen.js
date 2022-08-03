import { StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
 

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fcb900',
        flex: 1,
    },
})



export default HomeScreen;