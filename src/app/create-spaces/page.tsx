import Image, { StaticImageData } from "next/image";
import React from "react";
import ScrumImage from "@/app/create-spaces/images/Scrum-cycle.webp";
import ProductDelieveryImage from "@/app/create-spaces/images/product_delievery.webp";
import KanbanImage from "@/app/create-spaces/images/kanban-board-methodology-to-do-in-progress-in-qa-done-stages-sprint-planning.webp";

const page = () => {
  const list = [1, 2, 3, 4, 5];

  interface spaceTemplateInterface {
    space_name: string;
    space_desc: string;
    space_img: StaticImageData;
  }

  const SPACE_TEMPLATES: spaceTemplateInterface[] = [
    {
      space_name: "Scrum",
      space_desc: "Plan, track and execute work using sprints and backlog.",
      space_img: ScrumImage,
    },
    {
      space_name: "Product discovery",
      space_desc:
        "Prioritize ideas then connect them from discovery through to delievery.",
      space_img: ProductDelieveryImage,
    },
    {
      space_name: "Kanban",
      space_desc:
        "Work efficiently and visualize work on a board with to do, doing and done.",
      space_img: KanbanImage,
    },
  ];
  return (
    <div>
      <div>Space template</div>
      <div className="font-bold sm:text-lg lg:text-lg xl:text-2xl lg:my-7  text-slate-900">
        Made for you
      </div>
      <p className="text-slate-800">
        Templates for you based on how similar teams work.
      </p>

      <div className="lg:mt-9 w-full flex flex-wrap gap-2">
        {SPACE_TEMPLATES.map((s) => (
          <div key={s.space_name} className="bg-neutral-primary-soft block max-w-sm p-6 border border-gray-300 rounded-base shadow-xs rounded-lg">
            <div className="relative h-60 w-full">
              <Image src={s.space_img} alt={s.space_name} fill className="object-contain" />
            </div>
            <a href="#">
              <h5 className="mt-6 mb-2 text-lg lg:text-2xl font-semibold tracking-tight text-heading text-slate-800">
                {s.space_name}
              </h5>
            </a>
            <p className="mb-6 text-body text-slate-700">{s.space_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
