import {Text, View} from 'react-native';
import Container from '../../components/common/container';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
// import Icon from '../../components/common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Text>Nav</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Contacts Page</Text>
    </Container>
  );
};

export default Contacts;
