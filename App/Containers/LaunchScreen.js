import React, { Component } from 'react'
import { ScrollView, Text, Image, View, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class LaunchScreen extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      page: 1
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos?_page=" + this.state.page + "&_limit=30";
    await fetch(url).then((response) => response.json()).then((data) => {
      this.setState({ data: this.state.data.concat(data) })
    });
  }

  row = ({ item }) => {
    return (
      <View style={{
        width: "90%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 8
      }}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("DetailScreen", { item })
        }} style={{
          width: "25%",
          height: "100%",
          backgroundColor: "black"
        }}>
          <Image
            source={{ uri: item.url }}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "red"
            }}
          />
        </TouchableOpacity>
        <View style={{
          width: "75%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 5
        }}>
          <Text>{item.id + " - " + item.title}</Text>
        </View>
      </View>
    )
  }

  loadMore = () => {
    this.setState({
      page: this.state.page + 1
    }, this.getData)
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <FlatList
          style={{
            flex: 1,
            backgroundColor: "#dcdcdc"
          }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
          data={this.state.data}
          renderItem={this.row}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0}
        />
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
