import React from "react";
import { TextProps } from "react-native";
import BoldText from "@/components/ui/texts/BoldText";

type Props = {
  title: string;
  fontSize?: number;
};

const Title: React.FC<Props & TextProps> = (props) => {
  const { title } = props;

  return <BoldText {...props}>{title}</BoldText>;
};

export default Title;
