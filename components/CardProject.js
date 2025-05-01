import React, { useState } from "react";

export default function CardProject({
  title,
  img,
  technologies,
  description,
  idx,
}) {
  const [animation, setAnimation] = useState("");

  const generateRandomAnimation = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        setAnimation("group-hover:rotate-6");
        break;
      case 1:
        setAnimation("group-hover:-rotate-2");
        break;
      case 2:
        setAnimation("group-hover:-rotate-12");
        break;
      default:
        setAnimation("");
    }
  };

  return (
    <div
      key={idx}
      onMouseLeave={() => generateRandomAnimation()}
      className="group relative rounded-md overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
    >
      <div className="h-96 w-72 sm:h-48">
        <img
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 ${animation}`}
          src={img}
          alt={`Imagen de proyecto ${title}`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[53%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1
          className="font-md serif sm:text-xs md:text-xl text-3xl font-bold h-32 text-white"
          aria-label={`Proyecto: ${title}`}
        >
          {title}
        </h1>
        <div className="flex flex-wrap justify-center gap-1 flex-grow-0">
          {technologies.map(({ name, style }, idx) => {
            return (
              <button
                key={idx}
                type="button"
                className={`inline-block px-3 uppercase mt-1 ${style} text-stone-900 text-[10px] rounded-sm transition ease-in-out opacity-0 duration-300 group-hover:opacity-100`}
                aria-label={`Tecnología utilizada: ${name}`}
              >
                {name}
              </button>
            );
          })}
        </div>
        <p className="my-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:hidden">
          {description}
        </p>
      </div>
    </div>
  );
}
