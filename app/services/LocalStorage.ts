import AsyncStorage from "@react-native-async-storage/async-storage";


const saveUser = async (user: User) => {
    try {
        let data: string = JSON.stringify(user);
        console.log(data);
        await AsyncStorage.setItem('user', data);
    } catch (error) {
        console.log(`Saving exception: ${error}`)

    }
}


const getUser: object = async () => {
    try {
        const user = await AsyncStorage.getItem('user');
        if (user !== null) {
            return JSON.parse(user) as User;
        }
        else {
            return {
                "error": "Data not found",
            }
        }
    } catch (error) {
        return {
            'Error getting data': error
        }
    }
}

export default { saveUser }
