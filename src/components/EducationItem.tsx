import { educationType } from "../types/education";

function EducationItem({ name, university, date, description }: educationType) {
  return (
    <li className="mb-14 ms-4 grid grid-cols-3 gap-10">
      <div>
        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border  border-yellow-400 dark:bg-yellow-400"></div>
        <h3 className="text-md font-semibold dark:text-yellow-400">{name}</h3>
        <h2 className=" font-bold text-xl">{university}</h2>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {date}
        </time>
      </div>
      <p className="mb-4 font-normal text-gray-500 dark:text-stone-300 col-span-2 text-pretty">
        {description}
      </p>
    </li>
  );
}

export default EducationItem;
