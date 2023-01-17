import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, ıı, Image, Dimensions} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';

function App () {

  const renderNews = ({item}) => <NewsCard news={item} />


  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.headerText}>News</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                news_banner_data.map(bannerNews => (
                <Image style={styles.banner_image} source={{uri: bannerNews.imageUrl}} />
                ))}
            </ScrollView>
          )}
          keyExtractor={(item)=> item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
      </View>
    </SafeAreaView>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height/5,
    width: Dimensions.get('window').width/2,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },

});


export default App;