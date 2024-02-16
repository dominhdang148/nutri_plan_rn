import AsyncStorage from "@react-native-async-storage/async-storage";


const saveUser = async (user: User): Promise<boolean> => {
    try {
        let data: string = JSON.stringify(user);
        console.log(data);
        await AsyncStorage.setItem('user', data);
        return true;
    } catch (error) {
        console.log(`Saving exception: ${error}`)
        return false
    }
}


const getUser = async (): Promise<User | null> => {
    try {
        const user = await AsyncStorage.getItem('user');
        if (user !== null) {
            return JSON.parse(user) as User;
        }
        else {
            console.log('Data not found')
            return null
        }
    } catch (error) {
        console.log(`Error while getting data: ${error}`);
        return null
    }
}

export default { saveUser, getUser }
