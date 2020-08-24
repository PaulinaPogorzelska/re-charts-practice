import React from "react";
import { Card, Box } from "../../../../components";
import { ReactComponent as CrossIcon } from "../../../../assets/cross.svg";

const ShareCoinModal = ({ toogleModal }) => {
  return (
    <Card
      color="#777"
      width="14rem"
      position="fixed"
      right="1rem"
      top="0.5rem"
      backgroud="white"
      z-index="1"
      display="flex"
    >
      <Box>Web Share API is not supported in your browser.</Box>
      <CrossIcon fill="gray" width="1.25rem" onClick={toogleModal} />
    </Card>
  );
};

export default ShareCoinModal;
