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
          onPress={() => navigation.navigate('Home')}
          >
          <Icon name="close" color="#3546CB" size={35}/>
            </Pressable>
      </View>
<Text style={{color:'black', textAlign:'center', marginBottom:10}}>Cart</Text>
<FlatList
            style={{ width:'100%'}}
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
        flex:0.1,
        margin:10,
        alignItems:'flex-start',
        width:'90%'
    },
  
})