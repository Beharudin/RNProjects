import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Container from '../../components/container';
import Inputs from '../../components/inputs';

const Login = () => {
  const [text, onChangeText] = useState('');
  const [text1, onChangeText1] = useState('');

  return (
    <Container>
      <Inputs
        label="Username"
        value={text}
        onChangeText={text => onChangeText(text)}
        icon={<Text>HIDE</Text>}
        error={'This field is required!'}
        iconPosition={'left'}
      />
      <Inputs
        label="Username"
        value={text1}
        onChangeText={text => onChangeText1(text)}
        icon={<Text>HIDE</Text>}
        iconPosition={'right'}
      />
    </Container>
  );
};

export default Login;
