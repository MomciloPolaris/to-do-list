import React, { useState } from "react";

type TaskNameProps = {
  value: string;
  onUpdateName: () => void;
};

const TaskName: React.FC<TaskNameProps> = ({ value, onUpdateName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskValue, setTaskValue] = useState(value);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdateName();
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setTaskValue(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <textarea
          value={taskValue}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
      ) : (
        <h1 onDoubleClick={handleDoubleClick}>{taskValue}</h1>
      )}
    </>
  );
};

export default TaskName;
