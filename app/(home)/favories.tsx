import { View, Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const Favories = () => {

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text>Favories Page</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Favories;
