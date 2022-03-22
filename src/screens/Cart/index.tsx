import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import CardItem from '../../components/CartItem'

const Cart = () => {

    const renderItem:any = ({ item }) => (
        <CardItem  />
      );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Icon name="close" color="#3546CB" size={35}/>
      </View>
<Text style={{color:'black', textAlign:'center', marginBottom:10}}>Cart</Text>
<FlatList
            style={{ width:'100%'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
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