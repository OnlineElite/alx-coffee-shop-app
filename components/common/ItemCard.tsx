import "@/styles/global.css"
import { DataProps } from "@/interfaces"
import { AntDesign, Entypo } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"


const ItemCard : React.FC <DataProps>= ({id, name, price, rate, image, type, description})=> {

    const router = useRouter();

    return(
        <TouchableOpacity
            className="bg-white w-[45%] p-2 rounded-2xl px-2"
            onPress={() => router.push({ pathname: "/item/[id]", params: { id, name, price, rate, type, description, image : image.toString()} })}
        >     
            <View className="relative w-full mb-1">
                <Image source={image} resizeMode="cover" className="w-full rounded-2xl"/>
                <Text className="absolute left-28 top-1 z-20 text-white font-bold"><AntDesign name="star" size={13} color="orange" /> {rate} </Text>
            </View>
            <View>
                <Text className="text-black font-bold text-lg">{name} </Text>
                <Text className="text-gray-400">{type} </Text>
                <View className="flex-row justify-between items-center pb-2">
                    <Text className="text-center text-black font-bold text-xl"> ${price} </Text>
                    <TouchableOpacity className="bg-[#C67C4E] rounded-lg p-1">
                        <Entypo name="plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCard;
