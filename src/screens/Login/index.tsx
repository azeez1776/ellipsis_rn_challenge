import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
<Text style={{color:'#3546CB', fontSize:32, fontWeight:'bold'}}>Smart Store</Text>
        </View>
      <View style={styles.info}>
          <Text style={{color:'black', fontSize:24}}>Welcome Back </Text>
          <Icon name="heart" size={32} color="red"/>
      </View>
      <View style={styles.inputs}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black"
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
      />
      <View style={{width:'100%', marginBottom:10, flexDirection:'row', justifyContent:'space-around'}}>
          <Text style={{color:'black'}}>Sign Up</Text>
      <Text style={{color:'black'}}>Forgot password?</Text>
      </View>
           <View style={styles.btn}>
      <Pressable
      onPress={() => navigation.navigate('Home')}
        style={({pressed}) => [{backgroundColor:pressed?'#6574e6':'#3546CB'},styles.chat]}
      >
          <Text style={{color:'white', marginLeft:5}}>Sign In</Text>
      </Pressable>
      </View>
      <View style={styles.social}>
       <Text style={{color:'black', marginBottom:10}}>Or Sign In with</Text> 
       <View style={styles.others}>
       <Icon name="twitter" size={32} color="#1d9bf0"/>
       <Icon name="google" size={32} color="#f35228"/>
       <Icon name="facebook" size={32} color="#0e8af0"/>

       </View>
      </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',

    },
    header:{
        flex:0.1,
        width:'100%',
        alignItems:'center',
        marginTop:20
    },
    info:{
        flex:0.1,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center'
    },
    inputs:{
        flex:0.8,
        alignItems:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:'70%',
        borderRadius:5
},
btn:{
    flex:0.1,
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:20
},
chat:{
    width:'40%',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
},
social:{
    flex:0.3,
    width:'100%',
    alignItems:'center'
},
others:{
    width:'60%',
    flexDirection:'row',
    justifyContent:'space-evenly'
}
})