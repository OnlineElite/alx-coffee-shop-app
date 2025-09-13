import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

const DeliveryScreen = () => {
  const { id, name, price, rate, type, description, image } = useLocalSearchParams();
  // Mock coordinates
  const origin = { latitude: 37.78825, longitude: -122.4324 };
  const destination = { latitude: 37.789, longitude: -122.433 };

  return (
    <View className="flex-1 bg-gray-100">
      {/* Map Section */}
      <View className="flex-1 relative">
        <MapView
          className="flex-1"
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          {/* Route Line */}
          <Polyline
            coordinates={[
              { latitude: 37.78825, longitude: -122.4324 },
              { latitude: 37.7885, longitude: -122.4315 },
              { latitude: 37.789, longitude: -122.432 },
              { latitude: 37.789, longitude: -122.433 },
            ]}
            strokeColor="#D35400"
            strokeWidth={6}
          />

          {/* Origin Marker */}
          <Marker coordinate={origin} pinColor="#D35400" />

          {/* Destination Marker */}
          <Marker coordinate={destination} pinColor="#E74C3C" />
        </MapView>

        <View className="flex-row items-center justify-between w-[90%] absolute top-20 left-6 z-10">
            {/* Back Button */}
            <TouchableOpacity className="" onPress={() =>
                          router.push({
                            pathname: "/order/orderScreen",
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
                        }>
            <MaterialIcons name="arrow-back-ios-new" size={20} color="black" />
            </TouchableOpacity>

            {/* Location Pin Button */}
            <TouchableOpacity className=" ">
            <MaterialIcons name="my-location" size={24} color="black" />
            </TouchableOpacity>
        </View>
      </View>

      {/* Info Card */}
      <View className="bg-white rounded-t-3xl px-6 pb-16 pt-6 shadow-lg">
        {/* Time Left */}
        <View className="items-center mb-4">
          <Text className="text-lg font-extrabold text-gray-800">
            10 minutes left
          </Text>
          <Text className="text-base text-gray-400">
            Delivery to <Text className="font-bold text-gray-600">Jl. Kpg Sutoyo</Text>
          </Text>
        </View>

        {/* Progress Bar */}
        <View className="flex-row justify-between mb-4">
          {[...Array(4)].map((_, i) => (
            <View
              key={i}
              className={
                i < 3
                  ? "bg-green-500 w-20 h-1 rounded-full"
                  : "bg-gray-300 w-20 h-1 rounded-full"
              }
            />
          ))}
        </View>

        {/* Delivery Message */}
        <View className="border border-gray-200 p-4 rounded-xl flex-row items-center mb-2">
          <View className="p-3 border border-gray-200 rounded-xl">
            <Image source={require('@/assets/images/delivery.png')} className=""/>
          </View>
          <View className="ml-3">
            <Text className="font-semibold text-gray-800">
              Delivered your order
            </Text>
            <Text className="text-base text-gray-400 pr-3 w-55">
              We will deliver your goods to you in the shortest possible time.
            </Text>
          </View>
        </View>

        {/* Courier Info */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image
              source={require("@/assets/images/person.png")}
              className="w-14 h-14 rounded-xl"
            />
            <View className="ml-3">
              <Text className="font-semibold text-gray-800">
                Brooklyn Simmons
              </Text>
              <Text className="text-base text-gray-400">Personal Courier</Text>
            </View>
          </View>
          <TouchableOpacity className="p-3 border border-gray-200 rounded-xl">
            <Feather name="phone-call" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
