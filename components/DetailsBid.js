import React from "react";
import { View, Text, Image } from "react-native";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

export const DetailsBid = ({ bid }) => {
  return (
    <View style={{
      width: '100%',
      flexDirection:'row',
      alignContent: 'space-between',
      alignItems: 'center',
      marginVertical: SIZES.base,
      marginHorizontal: SIZES.base * 2
    }}>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}>
            Bid placed by {bid.name}
          </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop:4
          }}>
            {bid.date}
          </Text>
          <EthPrice price={bid.price}/>
      </View>
    </View>
  );
};
