import "@/styles/global.css"
import { Tabs } from "expo-router"
import { Foundation, MaterialIcons, Ionicons } from "@expo/vector-icons"

const HomeRootLayout = () => {

    return(
        <Tabs screenOptions={{tabBarActiveTintColor : "#C67C4E", headerShown : false}}>
            <Tabs.Screen name="index" options={{ title : "Home", tabBarIcon : ({color}) => <Foundation name="home" size={24} color={color} />}}/>
            <Tabs.Screen name="favories" options={{title : "Favories", headerShown : true, tabBarIcon : ({color}) => <MaterialIcons name="favorite-border" size={24} color={color} />}}/>
            <Tabs.Screen name="cart" options={{title : "Cart", headerShown : true, tabBarIcon : ({color}) => <Ionicons name="bag-outline" size={24} color={color} />}}/>
            <Tabs.Screen name="notifications" options={{title : "Notifications", headerShown : true, tabBarIcon : ({color}) => <Ionicons name="notifications-outline" size={24} color={color} />}}/>
        </Tabs>

    )
}

export default HomeRootLayout;
