import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CartItem = ({name, detail, price, number, image}) => {
  return (
    <View style={styles.cartItem}>
    <Image
    style={styles.img}
     source={{
         uri:image
        }}
     />
     <View style={{flexDirection:'row', justifyContent:'space-between', width:'50%', marginLeft:10}}>
         <View style={{justifyContent:'space-around', width:120}}>
            <Text style={{color:'black', fontWeight:'bold'}}>{name}</Text>
            <Text style={{color:'#BDBDBD'}}>{detail}</Text>
         </View>
         <View style={{justifyContent:'space-around'}}>
         <View style={styles.tagger}>
          <Text style={styles.tags}>{price}</Text>
          </View>
            <View style={styles.tagger}>
          <Text style={styles.tags}>{`No. ${number}`}</Text>
          </View>
         </View>
     </View>
</View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    cartItem:{
        height:100,
        width:'95%',
        borderWidth:0.5,
        borderRadius:7,
        borderColor:'#BDBDBD',
        marginRight:5,
        marginBottom:10,
        flexDirection:'row'
    },
    img:{
        width:'30%',
        borderBottomLeftRadius:7,
        borderTopLeftRadius:7,
        height:100
    },
    tags:{
        color:'#3546CB'
    },
    tagger:{
        backgroundColor:'#EFF1FF',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    }
})