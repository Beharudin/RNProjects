import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Container from '../../components/container';
import Inputs from '../../components/inputs';
import CustomButton from '../../components/customButtons';

const Login = () => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <Container>
      <Inputs
        label="Username"
        value={username}
        onChangeText={text => onChangeText(text)}
        // icon={<Text>HIDE</Text>}
        // iconPosition={'right'}
      />
      <Inputs
        label="Password"
        value={password}
        onChangeText={text => onChangePassword(text)}
        // icon={<Text>HIDE</Text>}
        // iconPosition={'right'}
      />
      <CustomButton secondary title={'Submit'} disabled={true} />
      <CustomButton primary title={'Click Me'} />
      <CustomButton primary title={'Submit'} loading={true} />
      <CustomButton danger title={'Submit'} />
    </Container>
  );
};

export default Login;
