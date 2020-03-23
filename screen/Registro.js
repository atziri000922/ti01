import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body,Button,Item,Input,Icon,Header, Title,Left,Right} from 'native-base';
import api from '../Mysql/api';


class Registro extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            user:'',
            pass:''
        }
    }

    register = () => api.registerData(this.state.email, this.state.pass)
    render(){
        const navegar = this.props.navigation;
        return(
            <Container>
                <Content padder contentContainerStyle = {misEstilos.content}>
                    <Card>
                        <CardItem header bordered>
                        <Text style = {misEstilos.textCenter}>
                        {this.props.route.params.titulo}
                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style = {misEstilos.body}>
                                <Item inlineLabel>
                                    <Icon type = 'FontAwesome' name = 'envelope'></Icon>
                                    <Input placeholder = 'Correo electronico'
                                    onChangeText = {(email) => this.setState({email})}/>
                                </Item>
                                <Item inlineLabel>
                                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                                    <Input placeholder = 'Nombre de usuario'
                                    onChangeText = {(pass) =>this.setState({user})}/>
                                </Item>
                                <Item inlineLabel last>
                                    <Icon type = 'FontAwesome' name ='lock'></Icon>
                                    <Input placeholder = 'Contraseña'
                                    onChangeText = {(pass) => this.setState({pass})}/>
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button primary onPress={() => navegar.navigate('Login')}><Text>Login</Text></Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
};

const misEstilos = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
    },
    textCenter:{
        textAlign:'center',
        width:'100%',
    },
    boton:{
        paddingVertical:30,
    }
});

export default Registro;

/*class Registro extends Component{
    render(){
        const navegar=this.props.navigation;
        return (
        <Container>
            <Header>
                <Left/>
                <Body>
                    <Title>Registro</Title>
                </Body>
                <Right />
            </Header>
            <Content padder contentContainerStyle={misEstilos.content}>
                <Card>
                    <CardItem header>
                        <Text style={misEstilos.textCenter}>{this.props.route.params.titulo}</Text>
                    </CardItem>
                        <Button rounded block>
                            <Icon type='Entypo' name='facebook'></Icon>
                            <Text>Registrarse con Facebook</Text>
                        </Button>
                        <Text></Text>
                        <Button rounded block warning>
                            <Icon type='Entypo' name='instagram'></Icon>
                            <Text>Registrarse con Instagram</Text>
                        </Button>
                    <CardItem >
                        <Body>

                            <Text>------------------------------ OR ------------------------------</Text>

                            <Item floatingLabel>
                            <Icon type='AntDesign' name='user'></Icon>
                            <Input placeholder='Nombre' />
                            </Item>

                            <Item floatingLabel>
                            <Icon type='AntDesign' name='user'></Icon>
                            <Input placeholder='Apellido' />
                            </Item>

                            <Item floatingLabel>
                            <Icon type='Feather' name='user'></Icon>
                            <Input placeholder='Nombre de Usuario'/>
                            </Item>

                            <Item floatingLabel>
                            <Icon type='Feather' name='mail'></Icon>
                            <Input placeholder='Correo'/>
                            </Item>

                            <Item floatingLabel>
                            <Icon type='AntDesign' name='lock'></Icon>
                            <Input placeholder='Contraseña'/>
                            </Item>
                        </Body>
                    </CardItem >
                    
                    <CardItem footer bordered>
                    <Button rounded style={misEstilos.boton} onPress={()=>{navegar.navigate('Login',{titulo:'Registro de usuario',});}} >
                        <Icon type='EvilIcons' name='pencil'></Icon>
                        <Text>Registrar</Text>
                    </Button>
                    </CardItem>
                </Card>
            </Content>
        </Container>
        );
    }
}

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
    marginLeft:'40%',
  },
});

export default Registro;*/