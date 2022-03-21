import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View >
            <Text style={{color:'black'}}><UserAvatar size={35} style={{}} imageStyle={{}} name="Avishay Bar" src="https://res.cloudinary.com/deex1bwvl/image/upload/v1647738498/Bluescope/alex-suprun-ZHvM3XIOHoE-unsplash_ptlaxf.jpg" />Hi, Louis</Text>
            </View>
            <Icon name="filter" size={30} color="#BDBDBD" />
        </View>
        <View>
            {/* Products */}
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    header:{
        flex:0.4,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        marginTop:20
    }
})