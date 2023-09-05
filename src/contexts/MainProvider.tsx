import React from "react";
import { LoaderProvider } from "@/contexts/LoaderContext";

type Props = {
  children: React.ReactNode;
};

const MainProvider: React.FC<Props> = (props) => {
  const { children } = props;
  return <LoaderProvider>{children}</LoaderProvider>;
};

export default MainProvider;
