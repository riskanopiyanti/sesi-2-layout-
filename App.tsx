import React from 'react';
import { View, Text, Image, TextInput, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

type Shoe = {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: { uri: string };
};

const App = () => {
  const categories = ['Running', 'Casual', 'Formal', 'Sports'];
  const products = [
    { id: '1', name: 'Lightweight Running Shoes', price: 59.99, rating: 4.8, image: { uri: 'https://i.pinimg.com/564x/8f/a8/a2/8fa8a2adc2bbf2b8dcdafe46606ff764.jpg' } },
    { id: '2', name: 'Stylish Casual Sneakers', price: 49.99, rating: 4.7, image: { uri: 'https://i.pinimg.com/564x/ec/df/c2/ecdfc231ffd73c5eefbd7e35aa8c5a1f.jpg' } },
    { id: '3', name: 'Elegant Formal Shoes', price: 79.99, rating: 4.6, image: { uri: 'https://i.pinimg.com/564x/58/36/57/5836573179e7380d108b94158f3f0e62.jpg' } },
    { id: '4', name: 'Durable Sports Shoes', price: 69.99, rating: 4.5, image: { uri: 'https://i.pinimg.com/236x/02/d8/e9/02d8e9afdeeb362cddacf805e6b20d85.jpg' } },
  ];

  const renderProduct = ({ item }: { item: Shoe }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text>{item.name}</Text>
      <Text>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.location}>Situ Gede Lembur Situ</Text>
        </View>
        <Image source={require('./Gambar/ika.jpg')} style={styles.avatar} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search Shoes" />
      </View>
      <View style={styles.promoBanner}>
        <Image source={require('./Gambar/Banner.jpeg')} style={styles.bannerImage} />
        <Text style={styles.promoText}> Buy One Get One</Text>
      </View>
      <ScrollView horizontal={true} style={styles.categoryScroll}>
        {categories.map((kategori, indeks) => (
          <TouchableOpacity key={indeks} style={styles.categoryButton}>
            <Text>{kategori}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E0F7FA', // Light blue background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    marginVertical: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff', // White background for input
  },
  promoBanner: {
    position: 'relative',
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
  promoText: {
    position: 'absolute',
    top: 16,
    left: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  categoryScroll: {
    marginVertical: 2,
  },
  categoryButton: {
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: '#fff', // White background for category buttons
    borderRadius: 50,
  },
  productList: {
    marginTop: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: '#FFFFFF', // White background for product cards
    borderRadius: 30,
    alignItems: 'center',
  },
  productImage: {
    width: 130,
    height: 80,
    marginBottom: 8,
    borderRadius: 20,
  },
  addButton: {
    marginTop: 5,
    backgroundColor: '#BBDEFB', // Light blue button
    borderRadius: 10000,
    padding: 10,
  },
  addButtonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
