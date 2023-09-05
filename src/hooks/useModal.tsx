import { useState } from "react";

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return { toggleModal, isModalVisible };
};

export default useModal;
