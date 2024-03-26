import { Box, Button, HStack, Image, Input } from "@chakra-ui/react";
import React from "react";


type Props = {
  type: "native" | "token";
  tokenImage?: string;
  current: string;
  setValue: (value: any) => void;
  max?: any;
  value: string;
};

export default function SwapInput({
  type,
  tokenImage,
  setValue,
  value,
  current,
  max,
}: Props) {
  return (
    <HStack w="full" bgColor="transparent" px="5">

      <Input
        type="number"
        placeholder="0.0"
        fontSize="3xl"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        outline="none"
        py="10"
        isDisabled={current !== type}
        border="none"
        _focus={{ boxShadow: "none" }}
        style={{padding: "4%", color: "gray", borderRadius: "6px", background: "transparent", width: "100%", height: "60px", fontWeight: "400", fontSize: "24px", textAlign: "end", justifyContent: "center"}}
      />
    </HStack>
  );
}
