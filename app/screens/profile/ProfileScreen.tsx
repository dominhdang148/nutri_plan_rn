import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GlobalStyling from '../../components/GlobalStyling';
import { User } from '../../model/User';
import { getUser } from '../../services/LocalStorage';
import AvatarSection from './components/AvatarSection';
import ProfileDetail from './components/ProfileDetail';


const ProfileScreen: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User>(new User("", { type: 0, value: '' }, 0, 0));

    useEffect(() => {
        getCurrentUser();
    },)


    const getCurrentUser = () => {
        getUser().then((result) => {
            if (result?.status === 'success') {
                const user = new User(result?.data?.name, result?.data?.gender, result?.data?.height, result.data?.weight);
                setCurrentUser(user);
            }
        })
    }
    return (
        <View style={GlobalStyling.screen}>
            <AvatarSection name={currentUser?.name} />
            <ProfileDetail user={currentUser} />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})