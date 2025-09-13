import { View, Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const Notifications = () => {

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text>Notifications Page</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Notifications;
