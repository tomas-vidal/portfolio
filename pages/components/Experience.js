import React from "react";
import experience from "../api/dataExperience";
import CardExperience from "./CardExperience";

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-stone-900 mb-5 dark:text-white">
        Experiencia laboral
      </h1>
      {experience.map((item) => (
        <CardExperience
          job={item.job}
          company={item.company}
          date={item.date}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}
