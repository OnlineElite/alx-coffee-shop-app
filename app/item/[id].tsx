import "@/styles/global.css";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
import { useState } from "react";

const ItemDetails = () => {

    const router = useRouter();
    const [activeSize, setActiveSize] = useState("M")
   
    const { id, name, price, type, rate, image, description}  = useLocalSearchParams();
    

    return(
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-white relative">
                <StatusBar barStyle="dark-content" backgroundColor="black" />
                <View className="flex-row items-center justify-between px-9 py-4 my-8 ">
                    <TouchableOpacity onPress={() => router.push('/(home)')}>
                        <MaterialIcons name="arrow-back-ios-new" size={21} color="black" />
                    </TouchableOpacity>
                    <Text className="font-bold text-xl">Detail</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="favorite-border" size={21} color="black" />
                    </TouchableOpacity>
                </View>
                <View className=" w-full h-[26%] px-8 ">
                    <Image  source={require('@/assets/images/coffee2.png')} resizeMode="cover" className="w-full h-full rounded-3xl"/>
                </View>
                
                <View className="flex-row px-8 my-6 items-center justify-between">
                    <View className=" w-[48%]">
                        <Text className="text-2xl font-extrabold">{name} </Text>
                        <Text className="text-gray-400">{type} </Text>
                        <View className="flex-row items-center mt-4">
                            <AntDesign name="star" size={18} color="orange" />
                            <Text className="font-bold flex-row text-xl"> {rate} </Text>
                            <Text className="text-gray-400 text-sm ">(230)</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center justify-between  w-[48%]">
                        <View className=" bg-gray-100 px-2 py-2 h-[45px] w-[45px] rounded-lg">
                            <Image source={require('@/assets/images/icon1.png')}/>
                        </View>
                        <View className=" bg-gray-100 px-2 py-2 h-[45px] w-[45px] rounded-lg">
                            <Image source={require('@/assets/images/icon2.png')}/>
                        </View>
                        <View className=" bg-gray-100 px-2 py-2 h-[45px] w-[45px] rounded-lg">
                            <Image source={require('@/assets/images/icon3.png')}/>
                        </View>
                    </View>
                </View>
                <View className="border-t border-gray-200 my-2 mx-8" />
                <View className="px-8">
                    <Text className="text-lg font-bold my-2">Description</Text>
                    <Text numberOfLines={3} ellipsizeMode="tail" className="text-gray-400">
                        {description}
                        <Text className="text-[#C67C4E] font-bold"> Read More</Text>
                    </Text>
                </View>
                <View className="px-8 my-4">
                    <Text className="text-lg font-bold my-4">Size</Text>
                    <View className="flex-row items-center justify-between">
                        <TouchableOpacity  
                            onPress={()=> setActiveSize("S")} 
                            className= {activeSize === "S"? "rounded-2xl border border-[#C67C4E] bg-orange-50 px-12 py-3" : "rounded-2xl border border-gray-300 px-12 py-3"}
                        >
                            <Text className={activeSize === "S"? "text-[#C67C4E]" : ""}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                            onPress={()=> setActiveSize("M")} 
                            className= {activeSize === "M"? "rounded-2xl border border-[#C67C4E] bg-orange-50 px-12 py-3" : "rounded-2xl border border-gray-300 px-12 py-3"}
                        > 
                            <Text className={activeSize === "M"? "text-[#C67C4E]" : ""}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                            onPress={()=> setActiveSize("L")} 
                            className= {activeSize === "L"? "rounded-2xl border border-[#C67C4E] bg-orange-50 px-12 py-3" : "rounded-2xl border border-gray-300 px-12 py-3"}
                        > 
                            <Text className={activeSize === "L"? "text-[#C67C4E]" : ""}>L</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="absolute bottom-16 left-0 right-0 p-8 bg-slate-50 rounded-2xl flex-row items-center justify-between ">
                    <View className="  w-[30%]">
                        <Text className="text-gray-400">Price</Text>
                        <Text className="text-[#C67C4E] font-bold text-xl">${price}</Text>
                    </View>
                    <View className=" w-[64%]">
                        <TouchableOpacity 
                        className="items-center bg-[#C67C4E] py-4 rounded-2xl "
                        onPress={()=> router.push({
                            pathname : "/order/orderScreen",
                            params : { id, name, price, rate, type, description, image}
                        })}
                    >
                            <Text className="text-white text-xl font-bold" >Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default ItemDetails;