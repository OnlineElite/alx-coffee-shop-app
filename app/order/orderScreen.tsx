import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const OrderScreen = () => {
  const { id, name, price, rate, type, description, image } = useLocalSearchParams();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white relative">
        <StatusBar barStyle="dark-content" backgroundColor="black" />
        <View className="flex-row items-center justify-between px-9 py-4 my-8 ">
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/item/[id]",
                params: {
                  id: id.toString(),
                  name,
                  price,
                  rate,
                  type,
                  description,
                  image: image.toString(),
                },
              })
            }
          >
            <MaterialIcons name="arrow-back-ios-new" size={20} color="black" />
          </TouchableOpacity>
          <Text className="font-bold text-xl">Detail</Text>
          <View></View>
        </View>
        <View className="px-6">
          <View className=" w-full px-1 py-1 bg-[#EDEDED] flex-row itemx-center justify-between rounded-xl">
            <TouchableOpacity className="items-center bg-[#C67C4E] py-2 rounded-xl w-[48%]">
              <Text className="text-white text-xl">Deliver</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center  py-2 rounded-xl w-[48%]">
              <Text className="text-xl">Pick Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex px-8 mt-6 mb-2">
          <View className="">
            <Text className="text-2xl font-bold">Delivery Address</Text>
            <View className="mt-4 mb-3">
              <Text className="font-bold flex-row text-xl">Jl. Kpg Sutoyo</Text>
              <Text className="text-gray-400 text-sm ">
                Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
              </Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-2xl px-2 py-1 mr-2">
              <FontAwesome5 name="edit" size={12} color="black" />
              <Text className="px-1">Edit Address</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-2xl px-2 py-1">
              <MaterialCommunityIcons
                name="note-text-outline"
                size={15}
                color="black"
              />
              <Text className="px-1">Add Note</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-t border-gray-200 mt-2 mx-8" />
        <View className="flex-row px-8 items-center justify-between w-full">
          <View className="flex-row items-center ">
            <Image
              source={require("@/assets/images/coffee2.png")}
              resizeMode="contain"
              className="w-[30%] mr-4 "
            />
            <View className="">
              <Text className="text-xl font-bold">{name} </Text>
              <Text className="text-gray-400">{type} </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-evenly w-[35%] ">
            <TouchableOpacity className="flex-row items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-100">
              <Entypo name="minus" size={20} color="gray" />
            </TouchableOpacity>
            <Text className="text-xl font-bold">2</Text>
            <TouchableOpacity className="flex-row items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-100">
              <Entypo name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className=" bg-[#F9F2ED] mb-4 py-1" />
        <View className="px-6">
          <TouchableOpacity className="w-full px-2 py-4 bg-white border border-[#EDEDED] flex-row items-center justify-between rounded-2xl">
            <View className="flex-row items-center">
              <Image source={require("@/assets/images/Icon0.png")} />
              <Text className="px-1 font-extrabold pl-2 text-lg">
                1 Discount is Applies
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex px-8 mt-6 mb-2">
          <Text className="text-2xl font-bold my-1">Payment Summary</Text>
          <View className="">
            <View className="flex-row items-center justify-between my-2">
              <Text className="flex-row text-lg">Price</Text>
              <Text className="text-black font-extrabold text-lg">
                $ {price}
              </Text>
            </View>
            <View className="flex-row items-center justify-between my-1">
              <Text className=" flex-row text-lg">Delivery Fee</Text>
              <View className="flex-row items-center ">
                <Text className="text-black text-lg line-through mr-2">
                  $ 2.0
                </Text>
                <Text className="text-black font-extrabold text-lg">$ 1.0</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="absolute bottom-12 left-0 right-0 px-8 py-4 bg-slate-50 rounded-2xl flex items-start justify-between ">
          <View className="mb-3 w-full flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image
                source={require("@/assets/images/Wallet.png")}
                className="mr-4"
              />
              <View>
                <Text className="text-black  text-lg font-extrabold">
                  Cash/Wallet
                </Text>
                <Text className="text-[#C67C4E] font-bold ">${price}</Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-down" size={28} color="black" />
          </View>
          <View className=" w-full">
            <TouchableOpacity
              className="items-center bg-[#C67C4E] py-4 rounded-2xl "
              onPress={() =>
                router.push({
                  pathname: "/delivery/DeliveryScreen",
                  params: { id, name, price, rate, type, description, image },
                })
              }
            >
              <Text className="text-white text-xl font-bold">Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default OrderScreen;
