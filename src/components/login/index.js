import React, {useState} from 'react';
import Inputs from '../../components/inputs';
import CustomButton from '../../components/customButtons';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { REGISTER } from '../../constants/RouteNames';
import Container from '../container';

const LoginComponent = ({
  error,
  form,
  justSignedUp,
  onChange,
  loading,
  onSubmit,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="invalid credentials"
            />
          )}

          {error?.error && <Message danger onDismiss message={error?.error} />}
          <Inputs
            label="Username"
            // value={username}
            // onChangeText={text => onChangeText(text)}
            placeholder="Enter Username"
          />
          <Inputs
            label="Password"
            // value={password}
            // onChangeText={text => onChangePassword(text)}
            placeholder="Enter Password"
            icon={<Text>Show</Text>}
            iconPosition={'right'}
            secureTextEntry={true}
          />
          <CustomButton primary title={'Submit'} />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
