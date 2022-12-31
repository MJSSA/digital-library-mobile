import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, SectionList, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const { getPlaylistItems } = require("../utilities/youtube");

type PlaylistType = {
  title: string;
  data: [];
}[]

const ListItem = ({ item }: any) => {
  // console.log("Displaying: ", item);
  return (
    <View style={{ margin: 10 }}>
      <Image
        source={{
          uri: item.thumbnail.url,
        }}
        style={{ width: 100, height: 100 }}
        resizeMode="cover"
      />
      <Text style={{ color: "white" }}>{item.title}</Text>
    </View>
  );
};

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeTab'>) {

  const [data, setData] = useState<PlaylistType>([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    console.log("Data: ", data);
    if (!loadedData) {
      setData(getPlaylistItems());
      setLoadedData(true);
    }
  }, [loadedData, data])

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Home</Text> */}
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   /* <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    // </View>

    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text>Header</Text>
        <Image source={require("../assets/images/logo.png")} />
        <Text>Quote of the day...</Text>
        <Image source={require("../assets/images/bible-quote-1.png")} />
      </View>

      <Text>Categories and lists (horizontal)</Text>
      {data.length > 0 && (
        <SectionList
          ListEmptyComponent={<Text>No content</Text>}
          sections={data}
          keyExtractor={(item, index) => (item + index).toString()}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={{ fontSize: 32, color: "white", margin: 10 }}>
                {section.title}
              </Text>

              <FlatList
                horizontal
                keyExtractor={(item, index) => (item + index).toString()}
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
              />
            </>
          )}
          renderItem={({ item }) => null}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
