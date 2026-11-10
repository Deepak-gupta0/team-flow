"use client"
import Image, { StaticImageData } from "next/image";
import ScrumImage from "@/app/create-spaces/images/Scrum-cycle.webp";
import ProductDelieveryImage from "@/app/create-spaces/images/product_delievery.webp";
import KanbanImage from "@/app/create-spaces/images/kanban-board-methodology-to-do-in-progress-in-qa-done-stages-sprint-planning.webp";
import { useState } from "react";

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

interface spaceInterface {
  type: string;
  name?: string;
  isPublice?: boolean;
  key?: string;
}

const Cards = () => {
  
  const [space, setSpace] = useState<spaceInterface>({
    type:"", name:"", isPublice:true, key:""
  });
  
  const spaceHandler = (spaceType: string) => {
    setSpace({
      type: spaceType,
    })
    return;
  }
  return (
    <div className="lg:mt-9 w-full flex flex-wrap gap-2">
      {space.type === "" ? SPACE_TEMPLATES.map((s) => (
        <div
          onClick={() => spaceHandler(s.space_name)}
          key={s.space_name}
          className="bg-neutral-primary-soft block max-w-sm p-6 border border-gray-300 rounded-base shadow-xs rounded-lg"
        >
          <div className="relative h-60 w-full">
            <Image
              src={s.space_img}
              alt={s.space_name}
              fill
              className="object-contain"
              sizes="60"
            />
          </div>
          <div>
            <p className="mt-6 mb-2 text-lg lg:text-2xl font-semibold tracking-tight text-heading text-slate-800">
              {s.space_name}
            </p>
          </div>
          <p className="mb-6 text-body text-slate-700">{s.space_desc}</p>
        </div>
      )) : (<div>hello</div>)}
      
    </div>
  );
};

export default Cards;
