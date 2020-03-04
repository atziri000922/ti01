import React, { Component } from 'react';
import {StyleSheet, ActivityIndicator, Modal, View} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body,Button,Item,Input,Icon,Header,Left,Right,Title} from 'native-base';
import { NavigationRouteContext } from '@react-navigation/native';

class Login extends Component{

  constructor(props){
    super(props);
    this.state={
      nombre:'',
      password:'',
      isloading: true,
    }
  }
  ShowHideActivityIndicator=()=>{
    const navegar=this.props.navigation;
    if(this.state.isLoading==true){
      this.setState({isLoading:false})
    }
    else{
      this.setState({isLoading:true})
      setTimeout(()=>{
        navegar.navigate('Inicio'/*,{nombres:this.state.nombre,pass:this.state.password}*/);
        this.setState({isLoading:false})
      },2000);
    }
  }

  render(){
    const navegar=this.props.navigation;
    return (
      <Container>
        <Header>
            <Left/>
              <Body>
                <Title>Inicio de Sesión</Title>
              </Body>
            <Right />
            <View>
              {
                this.state.isLoading ?
                <Modal
                transparent={true}
                animationType={'none'}
                visible={this.state.isloading}>
                  <View style={misEstilos.modalBackground}>
                    <View style={misEstilos.activityIndicatorWrapper}>
                      <ActivityIndicator style={{padding: 70}}/>
                    </View>
                  </View>

                </Modal>:null
              }
            </View>
        </Header>
        <Content padder contentContainerStyle={misEstilos.content}>
        <Text style={misEstilos.textCenter}>¡Bienvenido!</Text>
          <Card>
            <CardItem>
              <Body>
                <Item inlineLabel>
                  <Icon type='FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre de usuario' value={this.state.nombre} onChangeText={(nombre)=>this.setState({nombre})}/>
                </Item>
                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock'></Icon>
                  <Input placeholder='Contraseña' value={this.state.password} onChangeText={(password)=>this.setState({password})} secureTextEntry={true}/>
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Button rounded style={misEstilos.boton} onPress={this.ShowHideActivityIndicator} >
                  <Icon type='MaterialCommunityIcons' name='login-variant'></Icon>
                  <Text>Entrar</Text>
                </Button>
            </CardItem>
         </Card>
         <CardItem footer>
              <Body>
                <CardItem>
                  <Text style={misEstilos.textCenter}>Si no tienes cuenta, puedes crear una</Text>
                </CardItem>
                <Button  block  onPress={()=>{navegar.navigate('Registro',{titulo:'Registro de usuario',});}} >
                  <Icon type='EvilIcons' name='pencil'></Icon>
                  <Text>Registrar</Text>
                </Button>
              </Body>
            </CardItem>
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
  modalBackground:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-around',
    backgroundColor:'#00000040'
  },
  activityIndicatorWrapper:{
    backgroundColor:'#FFFFFF',
    height:100,
    width:100,
    borderRadius:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around'
  }
});

export default Login;