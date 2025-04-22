import React from "react";

function CardExperience({ job, company, date, description, link, idx }) {
  return (
    <article
      className="relative border-l border-stone-300 dark:border-stone-600 pb-8"
      key={idx}
    >
      <div className="flex gap-10 sm:flex-col sm:gap-0 ml-4">
        <p className="flex flex-shrink-0 items-center text-sm">
          <a className="absolute w-3 h-3 bg-stone-400 rounded-full -left-1.5 border border-white dark:border-stone-400 dark:bg-stone-400"></a>
          <span className="px-4 py-2 text-xs text-white dark:text-stone-900 bg-stone-900 rounded-md dark:bg-white">
            {date}
          </span>
        </p>

        <aside className="text-sm flex-grow">
          <p className="mt-2 text-xl text-stone-500 dark:text-white font-bold">
            {job}
          </p>
          <p className="mb-1 mt-[-2px] text-stone-700 text-xs dark:text-white/50">
            {company}
          </p>
          <p className="text-stone-500 dark:text-white/80">{description}</p>

          {link && (
            <button className="text-stone-800 font-bold underline mt-2 hover:text-stone-600 dark:text-white">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Saber más
              </a>
            </button>
          )}
        </aside>
      </div>
    </article>
  );
}

export default CardExperience;
