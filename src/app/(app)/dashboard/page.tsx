import DueTasks from "@/components/DueTasks";
import TaskBox from "@/components/TaskBox";

const page = () => {
  return (
    <div className="flex flex-col">
      <div>
        <TaskBox
          totalActiveTasks={24}
          totalCompletedTasks={148}
          totalPendingTasks={12}
          totalProjects={3}
        />
      </div>

      <div>
        <DueTasks />
      </div>
    </div>
  );
};

export default page;
