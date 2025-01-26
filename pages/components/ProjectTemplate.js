import React from "react";

function ProjectTemplate({ title, img, description, githubLink }) {
  return (
    <li className="flex w-[350px] flex-col border rounded-md border-stone-400 overflow-hidden">
      <img src={img} alt="" className="w-[350px] h-[200px] object-cover" />
      <h2 className="px-2 pt-2 text-stone-800 dark:text-white/80">{title}</h2>
      <p className="text-balance text-xs px-2 text-stone-600 dark:text-white/50">
        {description}
      </p>
      <button className="text-stone-800 self-end font-bold underline text-sm mr-6 mb-2 hover:text-stone-600 dark:text-white">
        <a href={githubLink} target="_blank">
          Github
        </a>
      </button>
    </li>
  );
}

export default ProjectTemplate;
