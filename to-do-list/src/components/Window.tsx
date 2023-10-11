import React from "react";

type WindowProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Window: React.FC<WindowProps> = ({ isVisible, onClose }) => {
  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed inset-0 flex justify-center items-center bg-black bg-opacity-25`}
    >
      <div className="bg-white rounded-xl p-8">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <img src="./src/assets/x.svg" alt="X" />
          </button>
        </div>
        <div className="flex justify-center items-center p-8">
          <h1 className="font-bold uppercase text-3xl cursor-default">
            Popunite sva polja
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Window;
