"use client"
import { Circle } from "lucide-react";
import { useState } from "react";

interface dueTaskModel {
  id: string;
  dayOrDate: string;
  projectName: string;
  priority: "High" | "Medium" | "Low";
}

const DueTasks = () => {
  const [dueTasks, setDueTasks] = useState<dueTaskModel[]>([
    {
      id: "254",
      dayOrDate: "Today",
      priority: "High",
      projectName: "Web dev",
    },
    {
      id: "6358",
      dayOrDate: "Tomorrow",
      priority: "High",
      projectName: "Spring development",
    },
    {
      id: "8916",
      dayOrDate: "17 june",
      priority: "Medium",
      projectName: "HTML learning",
    },
    {
      id: "8145",
      dayOrDate: "7 july",
      priority: "Low",
      projectName: "Learn backend",
    },
  ]);
  const [taskSelector, setTaskSelector] = useState< string | null>(null); 

  return (
    <div className="w-190 bg-white my-2 p-4 rounded-xl shadow-md">
      <div className="header flex justify-between mb-2">
        <h3 className="text-lg font-bold text-black">
          My tasks due soon
        </h3>
        <p className="text-blue-700 font-semibold cursor-pointer hover:underline">
          View all
        </p>
      </div>

      <div className="due-task-list flex flex-col gap-2">
        {dueTasks.map((task) => (
          <div
            key={task.id}
            onClick={() => setTaskSelector(task.id)}
            className="task flex justify-between px-2 py-3 border border-black/7 rounded-xl cursor-pointer"
          >
            <div className="left flex items-center gap-2">
              <div className="checkbox cursor-pointer">
                <Circle
                  size={15}
                  fill={(task?.id === taskSelector && task?.priority === "High") ? "#fa3929" : (task?.id === taskSelector && task?.priority) === "Medium" ? "#fae929" : (task?.id === taskSelector && task?.priority === "Low" ? "#5cfa72" : "#ffffff") }
                  className="text-black/10 hover:text-black/50"
                />
              </div>

              <div className="leading-tight">
                <p className="font-bold text-black/80">Design landing hero section</p>
                <p className="text-sm font-semibold text-black/50">
                  {task.dayOrDate} ● {task.projectName}
                </p>
              </div>
            </div>

            <div className="right">
              <button
                className={`py-1 px-2 rounded-full border ${
                  task.priority === "High"
                    ? "bg-red-700/18 text-red-700"
                    : task.priority === "Medium"
                    ? "bg-yellow-500/18 text-yellow-500"
                    : "bg-green-700/18 text-green-700"
                }`}
              >
                ● {task.priority}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DueTasks;
