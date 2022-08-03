import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

// Notre composant Header (l'en-tête de notre application)
const Header = ({navigation}) => {
  return (

    // Début du logo de notre application
    <View style={styles.container}>
        <TouchableOpacity>
            <Image
            style={styles.logo}
            source={require('../../assets/logo-BTW-png-sans-architecte.png')}
            />
        </TouchableOpacity> 
        


        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => ('Nouvelle publication')}>
                <Image
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Boc7Phob8WIlcGTOGfQoHuKlFEbn9etJmVLQWJqYxFE6S5hPqMIoXfEXFEYH12TagJY&usqp=CAU'
                }}
                style={styles.icon}
                />
            </TouchableOpacity>  
        

        </View>
    </View>
  )
}

// Le style associé à la vue de notre en-tête;

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection:'row',
        marginHorizontal:20,
},
    iconsContainer:{
        flexDirection:'row',
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode:'contain',
    },

    icon: {
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain'
    },

    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100,

    },

    unreadBadgeText:{
        color:'white',
        fontWeight:'600',

    }
})

export default Header;
