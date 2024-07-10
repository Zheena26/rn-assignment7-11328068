import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (item) => {
    try {
      let cart = await AsyncStorage.getItem("cart");
      cart = cart ? JSON.parse(cart) : [];
      cart.push(item);
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
       <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}>
          <Image source={require('../assets/Menu (1).png')} style={styles.cartIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.logoContainer}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.iconsRight}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/Search (1).png')} style={styles.cartIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/shoppingBag.png')} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textLine}>
        <Text style={styles.textLeft}>Our Story</Text>
        <View style={styles.iconsRight}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/Listview.png')} style={styles.cartIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/Filter.png')} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() =>
              navigation.navigate("ProductDetailScreen", { product: item })
            }
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
<TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
              <Icon name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
          </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  textLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textLeft: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fffff0',
    borderRadius: 10,
    alignItems: 'flex-start', 
  },
  productImage: {
    width: 400,
    height: 650,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left', 
  },
  productPrice: {
    fontSize: 14,
    color: 'blue',
    marginVertical: 5,
    textAlign: 'left', 
  },
  addButton: {
    marginTop: 10,
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  iconsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default HomeScreen;
