import React, { Component } from 'react'
import { ScrollView, Text, Image, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

class DetailScreen extends Component {

  constructor(props) {
    super(props);
    const { item } = this.props.navigation.state.params;
    this.state = { item }
  }

  render() {
    const { item } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => {
              this.props.navigation.pop();
            }}>
              <Icon name='md-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{
            justifyContent: "flex-start",
            alignItems: "center",
            height: 200,
            width: "100%"
          }}>
            <Image
              source={{ uri: item.thumbnailUrl }}
              resizeMode={"contain"}
              style={{
                width: "100%",
                height: 100,
                marginVertical: 20
              }}
            />
            <Text style={style.textStyle}>{item.id}</Text>
            <View style={{ height: 10 }} />
            <Text>{item.title}</Text>
          </View>
        </Content>
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

export default DetailScreen

const style = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: "bold"
  }
})
