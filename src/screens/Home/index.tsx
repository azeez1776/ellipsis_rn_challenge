import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from 'react-native-user-avatar';

const Home = () => {
  return (
    <View>
        <View>
            <View>
            <Text style={{color:'black'}}><UserAvatar size={30} style={{borderRadius:5}} imageStyle={{borderRadius:5}} name="Avishay Bar" src="https://res.cloudinary.com/deex1bwvl/image/upload/v1647738498/Bluescope/alex-suprun-ZHvM3XIOHoE-unsplash_ptlaxf.jpg" />Hi, Louis</Text>
            </View>
        </View>
        <View>
            {/* Products */}
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})