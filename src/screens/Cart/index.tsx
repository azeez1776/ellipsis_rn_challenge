import { Image, StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import CartItem from '../../components/CartItem'
import { useSelector } from 'react-redux';

const Cart = ({navigation}) => {

    type RootState = {
        cart,value:number
    }

    const cart = useSelector((state:RootState) => state.cart.cartItems)

    const renderItem:any = ({ item }) => (
        <CartItem name={item.name} detail={item.detail} price={item.price} image={item.image} number={item.quantity} />
      );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Pressable
          onPress={() => navigation.goBack()}
          >
          <Icon name="close" color="#3546CB" size={35}/>
            </Pressable>
      </View>
<Text style={{color:'black', textAlign:'center', marginBottom:10, fontWeight:'bold', fontSize:20}}>Cart</Text>
<FlatList
            style={{ width:'100%',height:350}}
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={{flex:0.4, alignItems:'center', width:'100%'}}>
      <Pressable
        style={({pressed}) => [{backgroundColor:pressed?'#6574e6':'#3546CB'},styles.pay]}
      >
         <Icon name="money" size={20} color="#ffffff"/>
          <Text style={{color:'white', marginLeft:6}}>Pay Now</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    header:{
        flex:0.3,
        margin:10,
        alignItems:'flex-start',
        width:'90%'
    },
    pay:{
        width:'50%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        // flex:0.8,
        height:40,
        marginTop:10
    }
  
})