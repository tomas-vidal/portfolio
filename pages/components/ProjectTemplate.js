import React from "react";

function ProjectTemplate({ title, img, description, githubLink, idx }) {
  return (
    <article
      className="flex md:max-w-full max-w-full sm:w-full flex-col border rounded-md border-stone-400 overflow-hidden"
      key={idx}
    >
      <img
        src={img}
        alt={`Imagen del proyecto: ${title}`}
        className="w-full h-[200px] md:h-[300px] object-cover object-left-top "
      />
      <h2 className="px-2 pt-2 text-stone-800 dark:text-white/80">{title}</h2>
      <p className="text-balance text-xs px-2 text-stone-600 dark:text-white/50 flex-1">
        {description}
      </p>
      <button className="text-stone-800 self-end font-bold underline text-sm mr-6 mb-2 hover:text-stone-600 dark:text-white">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </button>
    </article>
  );
}

export default ProjectTemplate;
