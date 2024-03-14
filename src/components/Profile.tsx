import LinkedinIcon from "../icons/LinkedinIcon";
import CVIcon from "./CVIcon";

function Profile() {
  return (
    <section className="text-center pt-20">
      <img
        className="w-52 h-52 object-cover mx-auto rounded-sm"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13HWX0ZMRmDqi9M9K84i0ZLXY4k3A1FtpnrnbzELEMw&s"
      ></img>
      <h1 className="text-6xl uppercase font-bold mt-10">Tomas Vidal</h1>
      <h3 className="text-stone-300 font-medium mt-2 text-md">
        Desarrollador Web Full Stack & Diseñador Digital
      </h3>
      <div className="flex justify-center gap-2">
        <button className="mt-2 flex gap-1 items-center border py-2 px-3 rounded-sm">
          <LinkedinIcon className="size-4"></LinkedinIcon>Linkedin
        </button>
        <button className="mt-2 flex gap-1 items-center border py-2 px-3 rounded-sm">
          <CVIcon className="size-5"></CVIcon>Mi CV
        </button>
      </div>
      <hr className=" mx-auto h-px mt-16 border-0 dark:bg-white/50"></hr>
    </section>
  );
}

export default Profile;
