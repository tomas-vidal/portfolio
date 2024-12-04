import EducationIcon from "../icons/EducationIcon";
import { educationType } from "../types/education";
import { education } from "../data/education";
import EducationItem from "./EducationItem";

function Education() {
  return (
    <section className="mt-20">
      <h2 className="flex items-center mb-10 gap-2 text-2xl font-bold">
        Estudios
        <EducationIcon className="text-3xl"></EducationIcon>
      </h2>
      <ol className="relative border-s border-gray-700">
        {education.map((item: educationType) => {
          return (
            <EducationItem
              name={item.name}
              university={item.university}
              date={item.date}
              description={item.description}
            ></EducationItem>
          );
        })}
      </ol>
    </section>
  );
}

export default Education;
