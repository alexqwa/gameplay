import React, { useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonExit } from '../../components/ButtonExit';
import { ModalQuit } from '../../components/ModalQuit';
import { Load } from '../../components/Load';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';
  
export function Home() {
  const [category, setCategory] = useState('');
  const [openLogout, setOpenLogout] = useState(false);
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const { signOut } = useAuth();

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  
  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }
  
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleOpenLogout() {
    setOpenLogout(true);
  } 

  function handleCloseLogout() {
    setOpenLogout(false);
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>
      <View style={styles.header}>
        <Profile openLogout={handleOpenLogout} />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load /> :
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total - ${appointments.length}`}
          />
    
          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item} 
                onPress={() => handleAppointmentDetails(item)}
              />
              
            )}  
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{paddingBottom: 50}}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </>
      }

      <ModalQuit visible={openLogout} closeModal={handleCloseLogout}>
        <View style={styles.content}>
          <ButtonExit title="Não" isHighlighted={true} onPress={handleCloseLogout} />
          <ButtonExit title="Sim" isHighlighted={false} onPress={signOut} />
        </View>
      </ModalQuit>
    </Background>
  );
 }