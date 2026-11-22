import {
  CalendarClock,
  CircleCheckBig,
  CircleDot,
  Ellipsis,
  Folder,
} from "lucide-react";

interface taskStats  {
  totalProjects: number,
  totalActiveTasks: number,
  totalPendingTasks: number,
  totalCompletedTasks: number,
};

const TaskBox = ({totalProjects, totalActiveTasks, totalCompletedTasks, totalPendingTasks}: taskStats) => {
  return (
    <div className="flex w-full justify-between">
      <div className="taskbox flex justify-between h-42 w-71 outline outline-black/10 rounded-2xl bg-white p-4">
        <div className="left flex flex-col justify-between">
          <div className="icon bg-yellow-900/15 w-fit p-2 rounded-lg text-yellow-600">
            <Folder className="font-bold" />
          </div>
          <div className="no-of text-3xl font-bold ">{totalProjects}</div>
          <div>
            <div className="task-status font-bold text-black/80">Total projects</div>
            <div className="date-wise-detail text-sm text-gray-500 hover:underline cursor-pointer">
              View projects
            </div>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <Ellipsis />
          </div>
        </div>
      </div>

      <div className="taskbox flex justify-between h-42 w-71 outline outline-black/10 rounded-2xl bg-white p-4">
        <div className="left flex flex-col justify-between">
          <div className="icon bg-blue-900/15 w-fit p-2 rounded-lg text-blue-600">
            <CircleDot className="font-bold" />
          </div>
          <div className="no-of text-3xl font-bold font-">{totalActiveTasks}</div>
          <div>
            <div className="task-status font-bold text-black/80">Open tasks</div>
            <div className="date-wise-detail text-sm text-gray-500 hover:underline cursor-pointer">
              View open tasks
            </div>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <Ellipsis />
          </div>
        </div>
      </div>

      <div className="taskbox flex justify-between h-42 w-71 outline outline-black/10 rounded-2xl bg-white p-4">
        <div className="left flex flex-col justify-between">
          <div className="icon bg-orange-900/15 w-fit p-2 rounded-lg text-orange-600">
            <CalendarClock className="font-bold" />
          </div>
          <div className="no-of text-3xl font-bold font-">{totalPendingTasks}</div>
          <div>
            <div className="task-status font-bold text-black/80">Pending tasks</div>
            <div className="date-wise-detail text-sm text-gray-500 hover:underline cursor-pointer">
              View pending tasks
            </div>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <Ellipsis />
          </div>
        </div>
      </div>

      <div className="taskbox flex justify-between h-42 w-71 outline outline-black/10 rounded-2xl bg-white p-4">
        <div className="left flex flex-col justify-between">
          <div className="icon bg-green-900/15 w-fit p-2 rounded-lg text-green-600">
            <CircleCheckBig className="font-bold" />
          </div>
          <div className="no-of text-3xl font-bold font-">{totalCompletedTasks}</div>
          <div>
            <div className="task-status font-bold text-black/80">Completed</div>
            <div className="date-wise-detail text-sm text-gray-500 hover:underline cursor-pointer">
              View completed tasks
            </div>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <Ellipsis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
