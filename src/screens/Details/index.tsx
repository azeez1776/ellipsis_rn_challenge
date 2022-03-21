import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Detail = ({navigation}) => {

  type RootState = {
    counter,value:number
}

const count = useSelector((state:RootState) => state.counter.value)

  return (
    <View style={styles.container}>
      {/* <View style={styles.img}> */}
      <ImageBackground
    style={styles.detailImg}
    source={{
        uri:'https://res.cloudinary.com/deex1bwvl/image/upload/v1647545617/Bluescope/photo-1464146072230-91cabc968266_vhw4ki.jpg'
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
      <Pressable>
            <Icon name="shopping-cart" size={45} style={{marginRight:5}} color="#3546CB" />
            <View style={count?styles.full:styles.empty}>
            <Text style={{color:'white'}}>{count}</Text>
            </View>
      </Pressable>
      </View>
      </ImageBackground>
  
      <View style={styles.detail}>
      <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%', marginBottom:2}}>
            <Text style={{color:'black'}}>Richyaris Kansas</Text>
            <Text style={{color:'#BDBDBD'}}>Tsh 200,000,000</Text>
      </View>
        </View>
      <View style={styles.desc}>
         <Text style={{fontSize:16, color:'black'}}>Description</Text>
         <Text style={{color:'black'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus possimus magni rerum numquam eaque asperiores soluta debitis, tenetur autem similique excepturi rem vel blanditiis neque sequi beatae fugit quibusdam cupiditate.</Text>
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