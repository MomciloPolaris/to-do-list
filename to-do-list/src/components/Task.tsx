import React, { useState } from "react";
import TaskName from "./TaskName";

type TaskProps = {
  taskName: string;
  taskDay: string;
  taskMonth: string;
  onUpdateName: (oldTaskName: string, newTaskName: string) => void;
  handleRemoveTask: () => void;
};

const Task: React.FC<TaskProps> = ({
  taskName,
  taskDay,
  taskMonth,
  onUpdateName,
  handleRemoveTask,
}) => {
  const [newTaskName, setNewTaskName] = useState(taskName);

  return (
    <div className="flex justify-between shadow-md border border-gray-300 rounded-xl p-5">
      <TaskName
        value={newTaskName}
        onChange={(event) => {
          setNewTaskName(event.target.value);
        }}
        onUpdateName={() => onUpdateName(taskName, newTaskName)}
        showTaskChange={false}
      />
      <button
        onClick={handleRemoveTask}
        className="group relative flex flex-col justify-between items-center p-5 text-white font-bold bg-purple-600 rounded-lg h-20 w-20"
      >
        <div className="group-hover:opacity-100 group-hover:scale-110 group-active:animate-spin duration-200 opacity-0 rounded-lg bg-red-500 absolute w-full h-full top-0 bottom-0 ">
          <img className="w-full h-full" src="./src/assets/react.svg" alt="trash" />
        </div>
        <div className="flex flex-col justify-between items-center text-white font-bold bg-purple-600 rounded-lg h-full w-full">
          <div className="text-xs font-bold">{taskMonth}</div>
          <div className="text-sm">{taskDay}</div>
        </div>
      </button>
    </div>
  );
};

export default Task;
