import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="">
        <View className="w-screen h-2/3 text-white">
          <ImageBackground 
            source={require("@/assets/images/background.png")}
            resizeMode="cover"
            className="h-full"
          >
            <Text>Home Page</Text>
          </ImageBackground>
        </View>
        <View className="w-full relative  flex text-white h-1/3 justify-center items-center bg-black " >
          <View className=" flex absolute top-[-30] items-center justify-center px-12 mb-4">
            <Text className="text-white text-4xl w-fit mb-4 text-center">Fall in Love with Coffe in Blissful Delight!</Text>
            <Text className="text-white text-gray-400 w-fit text-center">Welcome to our cozy coffe corner, where every cup is a delightful for you.</Text>
          </View>
          <TouchableOpacity className="items-center bg-[#C67C4E] px-[33%] mt-40 py-5 rounded-xl font-bold">
            <Text className="text-white text-xl font-bold">Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
