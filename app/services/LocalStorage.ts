import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../model/user";


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


export const getUser = async (): Promise<LocalStorageRespone> => {
    try {
        const user: string | null = await AsyncStorage.getItem('appuser');
        if (user !== null) {
            return {
                status: 'success',
                message: 'Get user successfully',
                data: JSON.parse(user),
            }

        }
        else {
            return {
                status: 'failed',
                message: 'user not found',
                data: null
            }
        }
    } catch (error) {
        return {
            status: 'failed',
            message: `error while getting data: ${error}`,
            data: null
        }
    }
}



