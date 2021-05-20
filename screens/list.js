import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TextInput,Button } from 'react-native';


const List = ({navigation}) => {
  const [filterdData, setfilterdData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    fetchPosts(); 
    return () => {

    }
  }, [])

  const fetchPosts = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiURL).then((response) => response.json()) // hämtar ett svar i JSON format
    .then((responseJson) => { 
      setfilterdData(responseJson);                   // input ruta
      setmasterData(responseJson);                     // hela listan
    }).catch((error) => {
      console.error(error);
    })
  }
  
  const searchFilter = (text) => { // namnet på funktionen som hämtar item, item är txtraden i listan

    if (text) {                                                 // om text i inputrutan 
      const newData = masterData.filter((item) => {             // inputvärde till nwData
        const itemData = item.title ? item.title.toUpperCase()  // värdet i input sätts till upperCase
                : ''.toUpperCase();                             // if/else till stor bokstav
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;                 // om nått är skrivet i input så ska det sparas
      });
      setfilterdData(newData);                                  // det som skriits i input ruran är det filtrerade värdet 
      setsearch(text);                                                // sätts i search
    } 
    else {
      setfilterdData(masterData);                                // annars urspungliga listan
      setsearch(text);
    }
  }

  const ItemView = ({item}) => {                                // vilka item/rader som visas
                                                                // nr på raden . texten
    return (
      <Text style={styles.itemStyle}>
        {item.id}{'. '}{item.title.toUpperCase()}               
      </Text>
    )
  }
  const ItemSeparatorView = () => { // markering mellan rader
    return (
      <View
        style= {{height:0.5, width:'100%', backgroundColor: '#c8c8c8'}}
      />
    )
  }

  return (

  <SafeAreaView style={{ flex:1 }}>
    <View>
    <Button 
    title="Go to ze Form"
    onPress={() => navigation.navigate('Form')
    }/>
    
</View>
    <View style={styles.container}>
      <TextInput
        style= {styles.textInputStyles}
        value ={search}
        placeholder="Search Here"
        underlineColorAndroid="transparent"
        onChangeText={(text) => searchFilter(text)}
        />
      <FlatList
        data = {filterdData} // det som visas är datan som blivit filtrerad
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  itemStyle: {
    padding: 15,
  },
  textInputStyles: {
    height: 40,
    borderWidth:1,
    paddingLeft:20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white'
  }
});

export default List;