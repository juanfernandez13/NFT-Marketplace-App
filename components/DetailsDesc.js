import { useState } from "react";
import { View, Text } from "react-native";
import { EthPrice, NFTTilte } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

export const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTilte title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large,
          }}
        >
          {text}
          {!readMore && "... "}
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
            onPress={() => {
              if(readMore){
                setText(data.description.slice(0,100));
                setReadMore(false);
              } else {
                setText(data.description);
                setReadMore(true);
              }
            }}
          >{readMore ? "Show Less" : "Read More"}</Text>
        </Text>
      </View>
    </>
  );
};
