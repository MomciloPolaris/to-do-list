import React, { useState } from "react";
import Link from "../components/Link";
import DateTimePicker from "../components/DateTimePicker";
import dayjs from "dayjs";
import Task from "../components/Task";
import Window from "../components/Window"; 

type TaskItem = {
  taskName: string;
  taskDay: string;
  taskMonth: string;
};

const Home = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [windowShow, setWindowShow] = useState(false); 
  const [taskArray, setTaskArray] = useState<TaskItem[]>([]);

  const handleDateChange = (inputDate: string) => {
    setInputDate(inputDate);
  };

  const handleRemoveTask = (taskName: string) => {
    setTaskArray((prevState) => prevState.filter((task) => task.taskName !== taskName));
  };

  const handleAddButtonClick = () => {
    if (inputDate === "" || inputText === "") {
      setWindowShow(true); 
      return;
    }
    if (taskArray.every((task) => task.taskName !== inputText)) {
      const newTaskItem: TaskItem = {
        taskDay: dayjs(inputDate).format("DD"),
        taskMonth: dayjs(inputDate).format("MMMM"),
        taskName: inputText,
      };
      setTaskArray((prevState) => [...prevState, newTaskItem]);
      setInputText("");
      setInputDate("");
      setShowDatePicker(false);
    }
  };

  const handleUpdateName = (oldTaskName: string, newTaskName: string) => {
    setTaskArray((prevState) =>
      prevState.map((task) =>
        task.taskName === oldTaskName ? { ...task, taskName: newTaskName } : task
      )
    );
  };

  return (
    <>
      <Window windowShow={windowShow} setWindowShow={setWindowShow} /> 
      <div className="bg-purple-600 h-10">
        <div className="max-w-4xl mx-auto text-3xl flex items-center justify-between">
          <h1 className="text-white font-bold">ToDo App Moca</h1>
          <div className="flex gap-5 text-base">
            <Link>Link 1</Link>
            <Link>Link 2</Link>
            <Link>Link 3</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-evenly mt-8 mb-8">
        <div>
          <div className="bg-white max-w-4xl mx-auto flex flex-col rounded-lg p-8 align-text-top h-60">
            <textarea
              className="h-24 p-4 border-2 rounded-lg whitespace-pre-line"
              value={inputText}
              onChange={(event) => {
                setInputText(event.target.value);
              }}
              placeholder="Input text here.."
            />
            <div className="flex justify-between">
              <DateTimePicker
                value={inputDate}
                onChange={handleDateChange}
                showDatePicker={showDatePicker}
                setShowDatePicker={setShowDatePicker}
              />
              <button
                onClick={handleAddButtonClick}
                className="bg-purple-600 rounded-lg text-white w-32 h-10 font-bold uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-400 duration-200"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-w-3xl mx-auto flex flex-col justify-evenly rounded-lg p-8 pb-20 align-text-top text-center">
        <h1 className="text-2xl font-semibold mb-20 cursor-default">TASKS</h1>
        <div className="flex flex-col gap-8 max-h-72 overflow-y-auto">
          {taskArray.map((task) => (
            <Task
              key={task.taskName}
              taskDay={task.taskDay}
              taskMonth={task.taskMonth}
              taskName={task.taskName}
              onUpdateName={(newTaskName) => handleUpdateName(task.taskName, newTaskName)}
              handleRemoveTask={() => handleRemoveTask(task.taskName)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
