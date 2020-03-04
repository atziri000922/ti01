import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';

class Inicio extends Component{
  constructor(props){
    super(props);

    this.state={
      isLoading:true,
    }
  }// fin del constructor
  async componentDidMount(){
    try{
      const response=await fetch('https://reactnative.dev/movies.json');
      const responseJson= await response.json();

      this.setState({
        isLoading:false, 
        dataSource:responseJson.movies,
      },function(){
      });
    }
    catch(error){
      console.log(error);
    }
  }//fin componentDidMount

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex:1, padding:20}}>
          <ActivityIndicator/>
        </View>
      )
    }// fin if
    return(
      <View>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item})=>
          <Text>{item.title},{item.releaseYear}</Text>
          }
          keyExtractor={({id},index)=>id}
          />
      </View>
    )
  }//fin render
}//fin de la clase


export default Inicio;

/*import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body,Button,Item,Input,Icon,Header,Left,Right,Title} from 'native-base';

class Inicio extends Component{
  render(){
    const navegar=this.props.navigation;
    return (
      <Container>
        <Header>
                <Left/>
                <Body>
                    <Title>Bienvenido</Title>
                </Body>
                <Right />
            </Header>
        <Content padder contentContainerStyle={misEstilos.content}>
          <Card>
            <CardItem>
              <Body>
                <Item inlineLabel>
                  <Icon type='FontAwesome' name='user'></Icon>
                    <Text>Tu nombre es:{this.props.route.params.nombres}</Text>
                </Item>
                <Item>
                    <Text></Text>
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock'></Icon>
                    <Text>Tu nombre es:{this.props.route.params.pass}</Text>
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Button rounded onPress={()=>{navegar.navigate('Login',{titulo:'Salir',});}} >
                  <Icon type='AntDesign' name='back'></Icon>
                  <Text>Regresar</Text>
                </Button>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
};


const misEstilos=StyleSheet.create({
  content:{
    flex:1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign:'center',
    width: '100%',
  },
  boton:{
    marginLeft:'50%',
  },
});

export default Inicio;*/