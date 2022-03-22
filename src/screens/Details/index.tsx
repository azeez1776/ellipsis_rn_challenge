import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Detail = ({route,navigation}) => {

  type RootState = {
    counter,value:number
}

const count = useSelector((state:RootState) => state.counter.value)

const {name, detail, price, image} = route.params;

  return (
    <View style={styles.container}>
      {/* <View style={styles.img}> */}
      <ImageBackground
    style={styles.detailImg}
    source={{
        uri:image
    }}
    >
      <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', marginTop:10,}}>
      <Pressable
      onPress={() => navigation.navigate('Home')}
      >
      <View style={{width:50, height:50, backgroundColor:'#EFF1FFA6', marginLeft:10, alignItems:'center',justifyContent:'center', borderRadius:10}}>
      <Icon name="angle-left" size={35} color="#3546CB" style={{}}/>
      </View>
      </Pressable>
      <Pressable
      onPress={()=> navigation.navigate('Cart')}
      >
        <View style={{width:50, height:50, backgroundColor:'#EFF1FFA6', alignItems:'center',justifyContent:'center', borderRadius:10, marginRight:5}}>
            <Icon name="shopping-cart" size={45} style={{}} color="#3546CB" />
            <View style={count?styles.full:styles.empty}>
            <Text style={{color:'white'}}>{count}</Text>
            </View>
            </View>
      </Pressable>
      </View>
      </ImageBackground>
  
      <View style={styles.detail}>
      <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%', marginBottom:2}}>
            <Text style={{color:'black'}}>{name}</Text>
            <Text style={{color:'#3546CB'}}>{price}</Text>
      </View>
        </View>
      <View style={styles.desc}>
         <Text style={{fontSize:16, color:'black'}}>Description</Text>
         <Text style={{color:'black'}}>{detail}</Text>
      </View>

      <View style={styles.btn}>
      <Pressable
        style={({pressed}) => [{backgroundColor:pressed?'#6574e6':'#3546CB'},styles.chat]}
      >
          <Icon name="shopping-cart" size={20} color="#ffffff"/>
          <Text style={{color:'white', marginLeft:5}}>Add to cart</Text>
      </Pressable>
      </View>

    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:'white',
    },
    img:{
        flex:0.4,
        width:'100%'
    },
    detailImg:{
        width:'100%',
        flex:0.48,
        marginBottom:30,
    },
    detail:{
        flex:0.1,
        width:'100%',
        alignItems:'center'
    },
    desc:{
        flex:0.2,
        width:'90%'
    },
    btn:{
        flex:0.07,
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    chat:{
        width:'100%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    full:{
      backgroundColor:'black',
       width:20,
        borderRadius:10, 
        alignItems:'center',
         justifyContent:'center',
          position:'absolute'
    },
    empty:{
      display:'none'
    }

})