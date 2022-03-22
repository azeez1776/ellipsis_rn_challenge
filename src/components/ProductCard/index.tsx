import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'
import { increment } from '../../features/counter/counterSlice'
import { addToCart } from '../../features/cart/cartSlice'

const ProductCard = ({name, detail, price, image, nav, prodFunc}) => {



  return (
    <View style={styles.productCard}>
        <Pressable
        onPress={() => nav.navigate('Detail',{
            name:name,
            detail:detail,
            price:price,
            image:image
        }) }
        >
    <Image
    style={styles.image}
    source={{
        uri:image
    }}
    />
    <View style={{height:80}}>

    <Text style={{color:'black', marginBottom:2, marginLeft:3}}>{name}</Text>
    <Text style={{color:'#BDBDBD', marginBottom:4, marginLeft:3}}>{detail}</Text>
    </View>
    <View style={styles.pricebtn}>
        <Text style={{color:'black', marginLeft:5}}>{price}</Text>
        <Pressable
        onPress={prodFunc}
        >
        <Icon name="cart-plus" size={25} style={{marginRight:5}} color="#3546CB" />
        </Pressable>
    </View>
    </Pressable>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    productCard:{
        // flex:0.67,
        height:220,
        width:'45%',
        borderWidth:0.5,
        borderRadius:7,
        borderColor:'#BDBDBD',
        marginRight:5,
        marginBottom:10
        
    },
    image:{
        width:'100%',
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
        height:100
    },
    pricebtn:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        width:'100%'
    }
})