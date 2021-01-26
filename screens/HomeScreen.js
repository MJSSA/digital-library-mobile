import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const data = [
  {
    title: "Continue Learning",
    data: "Test",
  },
  {
    title: "My Learning List",
    data: "Test",
  },
  {
    title: "Sunday School Lessons",
    data: "Test",
  },
  {
    title: "Prayers - Audio/Video",
    data: "Test",
  },
  {
    title: "Evangelical Messages",
    data: "Test",
  },
  {
    title: "Popular",
    data: "Test",
  },
  {
    title: "Devotional Hymns - Audio/Video",
    data: "Test",
  },
  {
    title: "Qurbana Songs - Audio/Video",
    data: "Test",
  },
  {
    title: "Christmas Carols - Audio/Video",
    data: "Test",
  },
  {
    title: "Sunday School Class Activities",
    data: "Test",
  },
  {
    title: "Holy Qurbana Text",
    data: "Test",
  },
  {
    title: "Evening Prayers Text",
    data: "Test",
  },
  {
    title: "Devotional Hymns - Lyrics",
    data: "Test",
  },
  {
    title: "Qurbana Songs - Lyrics",
    data: "Test",
  },
  {
    title: "Christmas Carols - Lyrics",
    data: "Test",
  },
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
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ color: "white" }}>{item}</Text>
    </View>
  );
};

function HomeScreen() {
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
              <Text style={{ fontSize: 32, color: "white" }}>
                {section.title}
              </Text>

              <FlatList
                horizontal
                keyExtractor={(item, index) => item + index}
                data={section.data}
                renderItem={({ item, index }) => <ListItem item={item} />}
              ></FlatList>
            </>
          )}
          renderItem={({ item }) => null}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
