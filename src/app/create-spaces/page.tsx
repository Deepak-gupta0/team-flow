"use client";

import { createProject } from "@/services/create-project.services";
import {getUser, UserInterface} from "@/services/get-user.services";
import { useEffect, useState } from "react";

export default function CreateProject() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser<UserInterface | null>();
        setUser(userData);
      } catch (error) {
        console.error(error);
      } 
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data = await createProject({
      name: projectName,
      description: description,
      owner_id: "",
    });
    console.log("Submitted");

    if (data.status === 201) {
      return;
    } else {
      console.log("something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-xl border bg-white p-8 shadow-sm">
        <div className="mb-7">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create Project
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create a new project and start managing your work.
          </p>
        </div>

        <form className="space-y-6">
          {/* Project Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Project Name
            </label>

            <input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              placeholder="Describe your project..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              className="rounded-lg border px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
