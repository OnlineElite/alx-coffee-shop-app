import {  ImageSourcePropType } from "react-native";
export interface DataProps {
    id : number;
    name : string;
    price : number;
    rate : number;
    image : ImageSourcePropType;
    type : string;
    description : string;
}
