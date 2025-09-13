 import "@/styles/global.css"
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
import { CATEGORIES } from "@/constants/index"
import { useState } from "react"
import ItemCard from "@/components/common/ItemCard"
import { Data } from "@/constants/index"


const Home = () => {
    const [activeFilter, setActiveFilter]=useState("All Coffee")
   
    return(
        <SafeAreaProvider >
            <SafeAreaView className="">
                <StatusBar barStyle="light-content" backgroundColor="black" />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View className="bg-[#111111] pb-24 mb-20 relative">
                        <View className="my-8 ml-6 ">
                            <Text className="text-gray-400 py-2">Location</Text>
                            <View className="flex-row items-center">
                                <Text className="text-white text-xl font-bold mr-1">Bilzen, Tanjungbalai </Text>
                                <Image source={require('@/assets/images/Arrow.png')}/>
                            </View>
                        </View>
                        <View className="flex-row items-center justify-between w-full px-6 mb-5">
                            <View className=" relative flex-row items-center w-5/6">
                                <TouchableOpacity className="absolute left-2 z-40">
                                    <Feather name="search" size={24} color="white"  />
                                </TouchableOpacity>
                                <TextInput placeholder="Search Coffee" className=" w-full pl-10 py-4 bg-zinc-800  rounded-2xl text-white placeholder:text-gray-400"/>
                            </View>
                            <TouchableOpacity className="bg-[#C67C4E]  items-center py-5 px-5 rounded-2xl">
                                <Image source={require('@/assets/images/Filtre.png')} />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row absolute bottom-[-62] items-center justify-center w-full">
                            <Text className="bg-[#BBBBBB] absolute left-16 font-bold top-4 w-fit h-fit text-white px-4 py-2 rounded-lg z-40">Promo</Text>
                            <Image source={require('@/assets/images/Banner1.png')} className="rounded-3xl" resizeMode="cover"/>
                        </View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator = {false} className=" py-4 w-[93%]">
                        <View className="flex-row items-center px-5">
                            { CATEGORIES.map((item)=>(
                                <TouchableOpacity onPress={()=> setActiveFilter(item.name)}  key={item.id} >
                                    <Text className= {item.name === activeFilter? "mx-2 py-2 px-4 rounded-2xl bg-[#C67C4E] text-white" : "mx-2 py-2 px-4 rounded-2xl bg-gray-200"}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                    <View className="flex-row flex-wrap items-center justify-center w-full px-4 gap-4">
                        {Data.map((item)=>(
                            <ItemCard id={item.id} name={item.name} description={item.description} price={item.price} rate={item.rate} type={item.type} image={item.image} key={item.id}/>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home;