import { Image, Pressable, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { increment } from '../../features/counter/counterSlice';


const data:any = [
    {
        id:1,
      name: "hero Product",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "https://res.cloudinary.com/deex1bwvl/image/upload/v1636020062/samples/ecommerce/analog-classic.jpg"
    },
    {
        id:2,
      name: "Product 1",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "https://res.cloudinary.com/deex1bwvl/image/upload/v1636020071/samples/ecommerce/leather-bag-gray.jpg"
    },
    {
        id:3,
      name: "Product 2",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "https://res.cloudinary.com/deex1bwvl/image/upload/v1636020072/samples/ecommerce/accessories-bag.jpg"
    },
    {
        id:4,
      name: "Product 3",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "https://res.cloudinary.com/deex1bwvl/image/upload/v1636020065/samples/food/pot-mussels.jpg"
    },
    {
        id:5,
      name: "Product 4",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "https://res.cloudinary.com/deex1bwvl/image/upload/v1636020065/samples/food/fish-vegetables.jpg"
    },
    {
        id:6,
      name: "Product 5",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "https://res.cloudinary.com/deex1bwvl/image/upload/v1636020073/samples/food/spices.jpg"
    },
    {
        id:7,
      name: "Product 6",
      detail: "Lorem ipsum dolor sit amet",
      price: "99",
      image: "https://res.cloudinary.com/deex1bwvl/image/upload/v1636020073/samples/food/spices.jpg"
    }
  ]

const Home = ({navigation}) => {

  type RootState = {
    counter,value:number
}

const dispatch = useDispatch()

const count = useSelector((state:RootState) => state.counter.value)

    const renderItem:any = ({ item }) => (
        <ProductCard name={item.name} price={item.price} detail={item.detail} image={item.image} nav={navigation} prodFunc={() => {
          dispatch(addToCart(item))
          dispatch(increment())
        } } />
      );
    

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View  style={{flexDirection:'row'}}>
            <UserAvatar size={35} style={{height:0, marginTop:10}} imageStyle={{}} name="Avishay Bar" src="https://res.cloudinary.com/deex1bwvl/image/upload/v1647738498/Bluescope/alex-suprun-ZHvM3XIOHoE-unsplash_ptlaxf.jpg" /><Text style={{color:'black'}}>Hi, Louis</Text>
            </View>
            <View>
              <Pressable
              onPress={() => { navigation.navigate('Cart')}}
              >
            <Icon name="shopping-cart" size={45} style={{marginRight:5}} color="#3546CB" />
                </Pressable>
            <View style={count?styles.full:styles.empty}>
            <Text style={{color:'white'}}>{count}</Text>
            </View>
            </View>
        </View>
        <View style={styles.product}>
            <Text style={{color:'black', marginBottom:10}}>
                Products
            </Text>
            <FlatList
            style={{ width:'100%'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />

            </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    header:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        marginTop:20
    },
    product:{
        flex:0.9,
        width:'90%',
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