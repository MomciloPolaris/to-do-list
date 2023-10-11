import React from "react";

type DateTimePickerProps = {
  showDatePicker: boolean;
  setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: (inputDate: string) => void;
  value: string;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  showDatePicker,
  value,
  setShowDatePicker,
  onChange,
}) => {
  const toggleDatePicker = () => {
    setShowDatePicker((prevState) => !prevState);
  };

  return (
    <>
      {showDatePicker ? (
        <input
          value={value}
          className="bg-gray-300 text-center w-60 border border-black rounded p-1 cursor-pointer"
          onChange={(event) => {
            onChange(event.target.value);
          }}
          type="date"
        />
      ) : (
        <button
          className="bg-gray-300 text-sm w-60 border border-black rounded p-1"
          onClick={toggleDatePicker}
        >
          Date Time Picker
        </button>
      )}
    </>
  );
};

export default DateTimePicker;
