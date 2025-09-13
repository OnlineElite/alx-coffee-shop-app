
import { View, Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

const Cart = () => {

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text>Cart Page</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Cart;
