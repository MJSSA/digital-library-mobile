import React from "react";
import {
  FlatList,
  Image,
  LogBox,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const data = [
  {
    title: "Popular",
    data: [
      {
        key: "1",
        text: "Inaugration 2021",
        link: "https://www.youtube.com/watch?v=99zeQK-PpQw",
        uri:
          "https://i.picsum.photos/id/695/200/300.jpg?hmac=8XcLTGOEhNglzXNZlLLbH0z6flQivZ2F6LML0Wah8lI",
      },
      {
        key: "7",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/10/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1002/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1006/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1008/200",
      },
    ],
  },
  {
    title: "Continue Learning",
    data: [
      {
        key: "1",
        text: "Inaugration 2021",
        link: "https://www.youtube.com/watch?v=99zeQK-PpQw",
        uri:
          "https://i.picsum.photos/id/695/200/300.jpg?hmac=8XcLTGOEhNglzXNZlLLbH0z6flQivZ2F6LML0Wah8lI",
      },
      {
        key: "7",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/10/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1002/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1006/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1008/200",
      },
    ],
  },
  {
    title: "My Learning List",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1020/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1024/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1027/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1035/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1038/200",
      },
    ],
  },
  {
    title: "Sunday School Lessons",
    data: [
      {
        key: "1",
        text: "Item text 1",
        uri: "https://picsum.photos/id/1011/200",
      },
      {
        key: "2",
        text: "Item text 2",
        uri: "https://picsum.photos/id/1012/200",
      },

      {
        key: "3",
        text: "Item text 3",
        uri: "https://picsum.photos/id/1013/200",
      },
      {
        key: "4",
        text: "Item text 4",
        uri: "https://picsum.photos/id/1015/200",
      },
      {
        key: "5",
        text: "Item text 5",
        uri: "https://picsum.photos/id/1016/200",
      },
    ],
  },
  // {
  //   title: "Prayers - Audio/Video",
  //   data: "Test",
  // },
  // {
  //   title: "Evangelical Messages",
  //   data: "Test",
  // },
  // {
  //   title: "Devotional Hymns - Audio/Video",
  //   data: "Test",
  // },
  // {
  //   title: "Qurbana Songs - Audio/Video",
  //   data: "Test",
  // },
  // {
  //   title: "Christmas Carols - Audio/Video",
  //   data: "Test",
  // },
  // {
  //   title: "Sunday School Class Activities",
  //   data: "Test",
  // },
  // {
  //   title: "Holy Qurbana Text",
  //   data: "Test",
  // },
  // {
  //   title: "Evening Prayers Text",
  //   data: "Test",
  // },
  // {
  //   title: "Devotional Hymns - Lyrics",
  //   data: "Test",
  // },
  // {
  //   title: "Qurbana Songs - Lyrics",
  //   data: "Test",
  // },
  // {
  //   title: "Christmas Carols - Lyrics",
  //   data: "Test",
  // },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ListItem = ({ item }) => {
  // console.log("Displaying: ", item);
  return (
    <View style={{ margin: 10 }}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={{ width: 100, height: 100 }}
        resizeMode="cover"
      />
      <Text style={{ color: "white" }}>{item.text}</Text>
    </View>
  );
};

function HomeScreen() {
  LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  return (
    <View
      style={styles.container}
      // options={{
      //   title: "My home",
      //   headerStyle: {
      //     backgroundColor: "#f4511e",
      //   },
      // }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Image source={require("../img/bible-quote-1.png")} />
        <SectionList
          ListEmptyComponent={<Text>No content</Text>}
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={{ fontSize: 32, color: "white", margin: 10 }}>
                {section.title}
              </Text>

              <FlatList
                horizontal
                // keyExtractor={(item, index) => item + index}
                data={section.data}
                renderItem={({ item, index }) => <ListItem item={item} />}
              />
            </>
          )}
          renderItem={({ item }) => null}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
