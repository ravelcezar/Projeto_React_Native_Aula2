import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: #007BFF;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const LoginScreen = () => {
  return (
    <Container>
      <Text>Email</Text>
      <Input placeholder="Digite seu email" keyboardType="email-address" />
      <Text>Senha</Text>
      <Input placeholder="Digite sua senha" secureTextEntry />
      <Button>
        <ButtonText>Logar</ButtonText>
      </Button>
    </Container>
  );
};

export default LoginScreen;


import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: #007BFF;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const RegisterScreen = () => {
  return (
    <Container>
      <Text>Nome</Text>
      <Input placeholder="Digite seu nome" />
      <Text>Senha</Text>
      <Input placeholder="Digite sua senha" secureTextEntry />
      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </Container>
  );
};

export default RegisterScreen;


import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: #007BFF;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const ForgotPasswordScreen = () => {
  return (
    <Container>
      <Text>Email</Text>
      <Input placeholder="Digite seu email" keyboardType="email-address" />
      <Button>
        <ButtonText>Enviar</ButtonText>
      </Button>
    </Container>
  );
};

export default ForgotPasswordScreen;