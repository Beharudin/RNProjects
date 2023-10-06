import {Text, View} from 'react-native';
import Container from '../../components/common/container';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useRef, useState} from 'react';
import Icon from '../../components/common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ContactsComponent from '../../components/ContactsComponent';
import { GlobalContext } from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';

const Contacts = ({navigation}) => {
  const {setOptions, toggleDrawer } = useNavigation();
  const [sortBy, setSortBy] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const contactsRef = useRef([]);
  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading, error},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" style={{padding: 10}} size={25} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};

export default Contacts;
