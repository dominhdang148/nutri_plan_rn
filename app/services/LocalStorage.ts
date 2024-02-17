import AsyncStorage from "@react-native-async-storage/async-storage";


export const saveUser = async (user: User): Promise<boolean> => {
    try {
        let data: string = JSON.stringify(user);
        console.log(data);
        await AsyncStorage.setItem('appuser', data);
        return true;
    } catch (error) {
        console.log(`Saving exception: ${error}`)
        return false
    }
}


export const getUser = async (): Promise<string | null> => {
    try {
        const user: string | null = await AsyncStorage.getItem('appuser');
        console.log(user)
        return user;
    } catch (error) {
        console.log(`Error while getting data: ${error}`);
        return null
    }
}




