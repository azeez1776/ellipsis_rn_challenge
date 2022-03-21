import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ProductCard = ({name, detail, price, image}) => {
  return (
    <View style={styles.productCard}>
    <Image
    style={styles.image}
    source={{
        uri:image
    }}
    />
    <View style={{height:80}}>

    <Text style={{color:'black', marginBottom:2}}>{name}</Text>
    <Text style={{color:'#BDBDBD', marginBottom:4}}>{detail}</Text>
    </View>
    <View style={styles.pricebtn}>
        <Text style={{color:'black'}}>{price}</Text>
        <Pressable>
        <Icon name="filter" size={30} color="#BDBDBD" />
        </Pressable>
    </View>
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
        height:50
    }
})