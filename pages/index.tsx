import { useState } from "react";
import Modal from "../components/modal";

const Home = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="p-4">
      <h1 className="mb-2 text-3xl font-bold">Hello world! 👋</h1>

      <div className="mb-4">
        <button type="button" onClick={openModal} className="btn-default">
          Open dialog
        </button>
      </div>

      <button className="mb-4 btn-primary">Testing reuse button</button>
      <button className="mb-4 btn">Testing reuse button</button>

      <Modal isOpen={isOpen} closeModal={closeModal} title="Modal testing">
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mt-4">
          <button type="button" className="btn-primary" onClick={closeModal}>
            Got it, thanks!
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
